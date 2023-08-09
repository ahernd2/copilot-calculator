import { createFeatureSelector } from "@ngrx/store";
import { State } from "../state";

export const featureSelector = createFeatureSelector<State>("app");
