import { createAction, props } from "@ngrx/store";

const component = "app";

const ACCEPTED = `${component} [Accepted]`;
const ACCEPTED_MODIFIED = `${component} [Accepted Modified]`;
const DID_NOT_ACCEPT = `${component} [Did Not Accept]`;
const COMPLICATED = `${component} [Complicated]`;

const POSITIVE_BOOST = `${component} [Positive Boost]`;
const NEGATIVE_BOOST = `${component} [Negative Boost]`;

export const accepted = createAction(ACCEPTED, props<{ date: string }>());
export const acceptedModified = createAction(
  ACCEPTED_MODIFIED,
  props<{ date: string }>()
);
export const didNotAccept = createAction(
  DID_NOT_ACCEPT,
  props<{ date: string }>()
);
export const complicated = createAction(COMPLICATED, props<{ date: string }>());
export const positiveBoost = createAction(
  POSITIVE_BOOST,
  props<{ date: string; size: number }>()
);
export const negativeBoost = createAction(
  NEGATIVE_BOOST,
  props<{ date: string; size: number }>()
);
