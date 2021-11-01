import React, { SyntheticEvent, useState } from "react";

import useStyles from "./style";
import { Slider, Radio } from "@mui/material";
import PriceChip from "../../../components/PriceChip";

import { useSelector, useDispatch } from "react-redux";
import {
  selectRatingFilter,
  setRating,
  setPriceRange,
} from "../../../features/filters/filtersSlice";
import Ratings from "../../../components/Ratings";
import { selectPriceRange } from "../../../features/activities/activitiesSlice";

const radioButtons = [
  {
    value: 1,
    ariaLabel: "1 & Up",
  },
  {
    value: 2,
    ariaLabel: "2 & Up",
  },
  {
    value: 3,
    ariaLabel: "3 & Up",
  },
  {
    value: 4,
    ariaLabel: "4 & Up",
  },
];

const ActivitySearchSidebar = () => {
  const style = useStyles();
  const dispatch = useDispatch();
  const [priceFilter, setPriceFilter] = useState([0, 9999]);

  const ratingFilter = useSelector(selectRatingFilter);
  const priceRange = useSelector(selectPriceRange);


  const handlePriceFilterChange = (event: Event, value: number | number[]) => {
    setPriceFilter(value as number[]);
  };

  // we only want to update the filter if the use released the slider
  // otherwise one slide can cause several dispatch, that causes the slider to lag
  const savePriceFilter = (
    event: Event | SyntheticEvent,
    value: number | number[]
  ) => {
    dispatch(setPriceRange(value as number[]));
  };

  const handleRatingFilterChange = (value: number) => {
    dispatch(setRating(value));
  };

  return (
    <>
      <h4 className={style.title}>PRICE RANGE</h4>
      <Slider
        getAriaLabel={() => "Price filter range"}
        value={priceFilter}
        onChange={handlePriceFilterChange}
        onChangeCommitted={savePriceFilter}
        valueLabelDisplay="auto"
        min={priceRange[0]}
        max={priceRange[1]}
      />
      <div className={style.priceDisplayContainer}>
        <div className={style.priceDisplay}>
          <span className={style.priceFilterLabel}>From</span>
          <PriceChip
            text={priceFilter[0] <= priceRange[0] ? "Minimum" : priceFilter[0]}
          />
        </div>
        <div className={style.priceDisplay}>
          <span className={style.priceFilterLabel}>To</span>
          <PriceChip
            text={priceFilter[1] >= priceRange[1] ? "Maximum" : priceFilter[1]}
          />
        </div>
      </div>
      <h4 className={style.title}>REVIEWS</h4>
      {radioButtons.map((rb) => (
        <label className={style.radioButtonContainer}>
          <Radio
            checked={ratingFilter === rb.value}
            onChange={() => handleRatingFilterChange(rb.value)}
            name="ratings-buttons"
            inputProps={{ "aria-label": rb.ariaLabel }}
          />
          <Ratings rating={rb.value} />
          <span>{"& Up"}</span>
        </label>
      ))}
    </>
  );
};

export default ActivitySearchSidebar;
