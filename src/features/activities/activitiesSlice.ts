import { createSelector, createSlice } from "@reduxjs/toolkit";
import activities from "./activities.json";
import { Activity } from "../../types";
import { RootState } from "../../store/store";

export interface ActivitiesState {
  activities: Activity;
}

const initialState = {
  activities: activities,
};

export const activitiesSlice = createSlice({
  name: "sports",
  initialState,
  reducers: {},
});

const selectSelf = (state: RootState) => state.activities;

export const selectActivities = createSelector(
  selectSelf,
  (state) => state.activities
);

export const selectFilteredActivities = createSelector(
  selectActivities,
  (state: RootState) => state.filters,
  (activities, filters) => {
    return activities.filter(
      (act) =>
        filters.rating <= act.rating &&
        filters.priceRange[0] <= act.fromPrice &&
        filters.priceRange[1] >= act.fromPrice &&
        (filters.sportTypes.length === 0 ||
          filters.sportTypes.includes(act.sport)) &&
        (!filters.date || areDatesOnSameDay(filters.date, act.startTime))
    );
  }
);

const areDatesOnSameDay = (date1: string, date2: string) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export const selectPriceRange = createSelector(selectActivities, (activities) =>
  activities.reduce(
    (range, act) => {
      if (act.fromPrice < range[0]) {
        return [act.fromPrice, range[1]];
      }
      if (act.fromPrice > range[1]) {
        return [range[0], act.fromPrice];
      }
      return range;
    },
    [9999, 0]
  )
);

export default activitiesSlice.reducer;
