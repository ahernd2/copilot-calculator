import { createSelector } from "@ngrx/store";
import { featureSelector } from "./feature.selector";

export const datesSelector = createSelector(
  featureSelector,
  state => state.dates
);
