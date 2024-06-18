import type { RootState } from "../store";

// Other code such as selectors can use the imported `RootState` type
export const headerPrices = (state: RootState) =>
  state.headerInfo.headerPriceList;
