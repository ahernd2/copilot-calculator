export interface State {
  dates: DateData;
}

export interface DateData {
  [key: string]: DateDataItem;
}

export interface DateDataItem {
  accepted: number;
  acceptedModified: number;
  rejected: number;
  complicatedAlgorithm: number;
  timeSavedEstimate: number;
  timeLostEstimate: number;
  codingHours: number;
  notes: string;
}

export const initialState: State = {
  dates: {}
};
