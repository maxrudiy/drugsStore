import { Slider, TextField, Button, Grid, Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";

const FilterBar = () => {
  const [sorting, setSorting] = useState("");

  const sortingHandler = (event) => {
    setSorting(event.target.value);
  };
  const [priceRange, setPriceRange] = useState([10, 50]);
  const [search, setSearch] = useState("");

  const applyFiltersHandler = () => {};
  const priceRangeHandler = (e, newValue) => {
    setPriceRange(newValue);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
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
      <Grid item xs={4}>
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
      <Grid item xs={2}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Sorting</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={sorting}
            label="Sorting"
            onChange={sortingHandler}
          >
            <MenuItem value={10}>$ From low to high</MenuItem>
            <MenuItem value={20}>$ From high to low</MenuItem>
            <MenuItem value={30}>New products</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined" onClick={applyFiltersHandler}>
          Aplly Filter
        </Button>
      </Grid>
    </Grid>
  );
};

export { FilterBar };
