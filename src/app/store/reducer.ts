import { createReducer, on } from "@ngrx/store";
import * as actions from "./actions";
import { initialState } from "./state";

export const reducer = createReducer(
  initialState,
  on(actions.accepted, (state, { date }) => ({
      ...state,
    dates: {...state.dates, [date]: { ...state.dates[date], accepted: (state.dates[date]?.accepted ?? 0) + 1 }}
  })),
  on(actions.acceptedModified, (state, { date }) => ({
    ...state,
    dates: {...state.dates, [date]: {
      ...state.dates[date],
      acceptedModified: (state.dates[date]?.acceptedModified ?? 0) + 1
    }}
  })),
  on(actions.didNotAccept, (state, { date }) => ({
    ...state,
    dates: {...state.dates, [date]: { ...state.dates[date], rejected: (state.dates[date]?.rejected ?? 0) + 1 }}
  })),
  on(actions.complicated, (state, { date }) => ({
    ...state,
    dates: {...state.dates, [date]: {
      ...state.dates[date],
      complicatedAlgorithm: (state.dates[date]?.complicatedAlgorithm ?? 0) + 1
    }}
  })),
  on(actions.positiveBoost, (state, { date, size }) => ({
    ...state,
    dates: {...state.dates, [date]: { ...state.dates[date], timeSavedEstimate: (state.dates[date]?.timeSavedEstimate ?? 0) + size }}
  })),
  on(actions.negativeBoost, (state, { date, size }) => ({
    ...state,
    dates: {...state.dates, [date]: { ...state.dates[date], timeLostEstimate: (state.dates[date]?.timeLostEstimate ?? 0) + size }}
  })),
);
