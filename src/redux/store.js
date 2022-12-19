import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars";
export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
export default store;
