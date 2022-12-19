import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "../services/FireBase";

const initialCarsData = await fetchCars();

const getCars = async () => {
  const Cars = await fetchCars();
  return Cars;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: initialCarsData,
  },
  reducers: {
    updateCars: (state, action) => {
      console.log("sayed");
      state.data = action.payload;
      console.log(state.data);
    },
  },
});
export const { updateCars } = carsSlice.actions;
export default carsSlice.reducer;
