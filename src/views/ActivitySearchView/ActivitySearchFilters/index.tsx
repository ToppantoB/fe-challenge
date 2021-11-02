import React, { SyntheticEvent, useState } from "react";

import useStyles from "./style";
import { Slider, Radio } from "@mui/material";
import PriceChip from "../../../components/PriceChip";

import { useSelector, useDispatch } from "react-redux";
import {
  selectRatingFilter,
  setRating,
  setPriceRange as setPriceRangeFilter,
  selectFilterCount,
  resetFilters,
  selectSportstypesFilter,
  selectDateFilter,
  selectPriceRangeFilter,
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

const createFilterText = (
  priceFilter: number[],
  priceRange: number[],
  ratingFilter: number,
  sportTypes: string[],
  date: string | null
) => {
  let priceText = "";
  let ratingText = "";
  let sportTypesText = "";
  let dateText = "";

  if (priceFilter[0] > priceRange[0]) {
    priceText += `from ${priceFilter[0]} euros `;
  }

  if (priceFilter[1] < priceRange[1]) {
    priceText += `up to ${priceFilter[1]} euros `;
  }

  if (ratingFilter !== 1) {
    ratingText = `${ratingFilter} & up`;
  }

  if (sportTypes.length) {
    sportTypesText = sportTypes.join(" & ");
  }

  if (date !== null) {
    dateText = `${date.slice(0, 3)},${date.slice(3, 10)}`;
  }

  return [priceText, ratingText, sportTypesText, dateText]
    .filter((t) => t)
    .join(" • ");
};

const ActivitySearchFilters = () => {
  const style = useStyles();
  const dispatch = useDispatch();

  const ratingFilter = useSelector(selectRatingFilter);
  const priceRange = useSelector(selectPriceRange);
  const filterCount = useSelector(selectFilterCount);
  const priceFilter = useSelector(selectPriceRangeFilter);
  const sportTypes = useSelector(selectSportstypesFilter);
  const date = useSelector(selectDateFilter);

  // we have to store the controlled component's state locally
  // otherwise the UI of the slider only updates after the mouseUp event is fired
  const [localPriceFilter, setLocalPriceFilter] = useState(priceFilter);

  const handlePriceFilterChange = (event: Event, value: number | number[]) => {
    setLocalPriceFilter(value as number[]);
  };

  // we only want to update the filter if the use released the slider
  // otherwise one slide can cause several dispatch, that causes the slider to lag
  const savePriceFilter = (
    event: Event | SyntheticEvent,
    value: number | number[]
  ) => {
    dispatch(setPriceRangeFilter(value as number[]));
  };

  const handleRatingFilterChange = (value: number) => {
    dispatch(setRating(value));
  };

  const handleResetClick = () => {
    setLocalPriceFilter(priceRange);
    dispatch(resetFilters());
  };

  return (
    <>
      <div className={style.filters}>
        <h4 className={style.title}>{`${filterCount} FILTER`}</h4>
        {filterCount > 0 && (
          <>
            <span className={style.filterText}>
              {createFilterText(
                priceFilter,
                priceRange,
                ratingFilter,
                sportTypes,
                date
              )}
            </span>
            <span onClick={handleResetClick} className={style.clearAllButton}>
              Clear all
            </span>
          </>
        )}
      </div>
      <h4 className={style.title}>PRICE RANGE</h4>
      <Slider
        getAriaLabel={() => "Price filter range"}
        value={localPriceFilter}
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
            text={
              localPriceFilter[0] <= priceRange[0]
                ? "Minimum"
                : localPriceFilter[0]
            }
          />
        </div>
        <div className={style.priceDisplay}>
          <span className={style.priceFilterLabel}>To</span>
          <PriceChip
            text={
              localPriceFilter[1] >= priceRange[1]
                ? "Maximum"
                : localPriceFilter[1]
            }
          />
        </div>
      </div>
      <h4 className={style.title}>REVIEWS</h4>
      {radioButtons.map((rb, i) => (
        <label
          key={`ratings-radio-${i}`}
          className={style.radioButtonContainer}
        >
          <Radio
            checked={ratingFilter === rb.value}
            onChange={() => handleRatingFilterChange(rb.value)}
            name="ratings-buttons"
            inputProps={{ "aria-label": rb.ariaLabel }}
          />
          <Ratings rating={rb.value} />
          <span className={style.ratingText}>{"& Up"}</span>
        </label>
      ))}
    </>
  );
};

export default ActivitySearchFilters;
