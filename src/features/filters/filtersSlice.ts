import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

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
  },
});

export const { setPriceRange, setRating, setSportTypes, setDate } =
  filtersSlice.actions;

const selectSelf = (state: RootState) => state.filters;

export const selectRatingFilter = createSelector(
  selectSelf,
  (filters: FiltersState) => filters.rating
);

export const selectPriceRangeFilter = createSelector(
  selectSelf,
  (filters: FiltersState) => filters.priceRange
);

export const selectSportStypesFilter = createSelector(
  selectSelf,
  (filters: FiltersState) => filters.sportTypes
);

export const selectDateFilter = createSelector(
  selectSelf,
  (filters: FiltersState) => filters.date
);

export default filtersSlice.reducer;
