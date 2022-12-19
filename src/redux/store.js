import { configureStore } from "@reduxjs/toolkit";
import favCounterReducer from "./favCounter";
import carsReducer from "./cars";
export const store = configureStore({
  reducer: {
    favCounter: favCounterReducer,
    cars: carsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
