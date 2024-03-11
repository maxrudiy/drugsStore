import { Slider, TextField, Button, Grid, Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";

const FilterBar = () => {
  const [sorting, setSorting] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const sortingHandler = (event) => {
    setSorting(event.target.value);
  };
  const priceRangeHandler = (e, newValue) => {
    setPriceRange(newValue);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const applyFilterHandler = () => {
    const searchParams = createSearchParams({ sorting, price: `${priceRange[0]}-${priceRange[1]}`, search }).toString();
    let pathname = location.pathname;
    !pathname.includes("/filters") && (pathname += "/filters");
    navigate(`${pathname}?page=1&${searchParams}`);
  };

  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
      <Grid item xs={3}>
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={searchHandler}
          size="small"
        />
      </Grid>
      <Grid item xs={1} sx={{ fontSize: 16, fontFamily: "roboto" }}>
        Price:
      </Grid>
      <Grid item xs={3.5}>
        <Slider
          min={0}
          max={100}
          getAriaLabel={() => "Price range"}
          value={priceRange}
          onChange={priceRangeHandler}
          valueLabelDisplay="auto"
          color="info"
        />
      </Grid>
      <Grid item xs={2.5}>
        <FormControl sx={{ m: 1, pl: 1, minWidth: 170 }} size="small">
          <InputLabel id="demo-select-small-label">Sorting</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={sorting}
            label="Sorting"
            onChange={sortingHandler}
          >
            <MenuItem value={"cheap"}>$ From low to high</MenuItem>
            <MenuItem value={"expensive"}>$ From high to low</MenuItem>
            <MenuItem value={"novelty"}>New products</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined" onClick={applyFilterHandler}>
          Aplly Filter
        </Button>
      </Grid>
    </Grid>
  );
};

export { FilterBar };
