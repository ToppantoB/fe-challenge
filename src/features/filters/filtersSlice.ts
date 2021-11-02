import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { selectPriceRangeFunc } from "../activities/activitiesSlice";

export interface FiltersState {
  priceRange: number[];
  rating: number;
  sportTypes: string[];
  date: string | null;
}

const initialState: FiltersState = {
  priceRange: [0, 9999],
  rating: 1,
  sportTypes: [],
  date: null,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload;
    },
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    setSportTypes: (state, action: PayloadAction<string[]>) => {
      state.sportTypes = action.payload;
    },
    setDate: (state, action: PayloadAction<string | null>) => {
      state.date = action.payload;
    },
    resetFilters: (state) => {
      state.priceRange = [0, 9999];
      state.rating = 1;
      state.sportTypes = [];
      state.date = null;
    },
  },
});

export const {
  setPriceRange,
  setRating,
  setSportTypes,
  setDate,
  resetFilters,
} = filtersSlice.actions;

const selectSelf = (state: RootState) => state.filters;

export const selectRatingFilter = createSelector(
  selectSelf,
  (filters: FiltersState) => filters.rating
);

export const selectPriceRangeFilter = createSelector(
  selectSelf,
  (filters: FiltersState) => filters.priceRange
);

export const selectSportstypesFilter = createSelector(
  selectSelf,
  (filters: FiltersState) => filters.sportTypes
);

export const selectDateFilter = createSelector(
  selectSelf,
  (filters: FiltersState) => filters.date
);

export const selectFilterCount = createSelector(
  selectSelf,
  (state: RootState) => state.activities,
  (filters, activities) => {
    let numberOfFilters = 0;
    const priceRange = selectPriceRangeFunc(activities.activities);

    if (
      (filters.priceRange[0] !== 0 &&
        filters.priceRange[0] !== priceRange[0]) ||
      (filters.priceRange[1] !== 9999 &&
        filters.priceRange[1] !== priceRange[1])
    ) {
      numberOfFilters++;
    }
    if (filters.rating !== 1) {
      numberOfFilters++;
    }

    if (filters.sportTypes.length > 0) {
      numberOfFilters++;
    }

    if (filters.date !== null) {
      numberOfFilters++;
    }

    return numberOfFilters;
  }
);

export default filtersSlice.reducer;
