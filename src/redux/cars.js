import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, likeCar } from "../services/FireBase";

const initialCarsData = await fetchCars();

const LikeCar = async (id) => {
  await likeCar(id);
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: initialCarsData,
  },
  reducers: {
    like: (state, action) => {
      LikeCar(action.payload);
      console.log("Car is liked");
    },
    updateCars: (state, action) => {
      state.data = action.payload;
      console.log("Cars Cards are updated");
    },
  },
});

export const { updateCars, like } = carsSlice.actions;
export default carsSlice.reducer;
