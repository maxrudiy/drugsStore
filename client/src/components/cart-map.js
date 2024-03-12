import { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Grid, Button } from "@mui/material";

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const STORE_ADDRESS = process.env.REACT_APP_STORE_ADDRESS;
const KYIV = [50.450001, 30.523333];

const loader = new Loader({
  apiKey: GOOGLE_MAP_API_KEY,
  version: "weekly",
  libraries: ["places"],
});

const CartMap = () => {
  const userAddress = "вулиця Кирилівська, 132";
  const googleMapRef = useRef(null);
  const googlePanelRef = useRef(null);

  const [map, setMap] = useState(null);

  useEffect(() => {
    loader.importLibrary("maps").then(() => {
      const googleMap = initGoogleMap();
      setMap(googleMap);
    });
  }, []);

  const searchRouteHandler = async (travelMode) => {
    const destinationResult = await new Promise((resolve, rejected) => {
      new window.google.maps.Geocoder().geocode({ address: STORE_ADDRESS }, (results, status) => {
        if (status === "OK") {
          resolve(results[0].geometry.location);
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    });

    const originResult = await new Promise((resolve, rejected) => {
      new window.google.maps.Geocoder().geocode({ address: userAddress }, (results, status) => {
        if (status === "OK") {
          resolve(results[0].geometry.location);
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    });
    var directionsService = new window.google.maps.DirectionsService();
    var directionsRenderer = new window.google.maps.DirectionsRenderer();
    var origin = originResult;
    var destination = destinationResult;

    var request = {
      origin: origin,
      destination: destination,
      travelMode,
    };
    directionsService.route(request, function (response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
        directionsRenderer.setMap(map);
        directionsRenderer.setPanel(googlePanelRef.current);
      }
    });
  };

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: new window.google.maps.LatLng(...KYIV),
      zoom: 8,
    });
  };
  return (
    <div>
      <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={2}>
        <Grid item xs={4}>
          <div ref={googlePanelRef} />
        </Grid>
        <Grid item xs={8}>
          <Grid container direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
            <Grid item>
              <div ref={googleMapRef} style={{ width: "100%", height: 500 }} />
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={() => searchRouteHandler("DRIVING")} sx={{ m: 1 }}>
                Route DRIVING
              </Button>
              <Button variant="outlined" onClick={() => searchRouteHandler("TRANSIT")} sx={{ m: 1 }}>
                Route TRANSIT
              </Button>
              <Button variant="outlined" onClick={() => searchRouteHandler("WALKING")} sx={{ m: 1 }}>
                Route WALKING
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export { CartMap };
