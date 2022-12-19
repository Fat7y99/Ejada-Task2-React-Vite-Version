import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { likeCar } from "../services/FireBase";
var cars;
const LikeCar = async (id) => {
  await likeCar(id);
  cars = useSelector((state) => state.cars.data);

  console.log("favCounterSlice2");
};
const favCounterSlice = createSlice({
  name: "favCounter",
  initialState: {
    value: ,
  },
  reducers: {
    like: (state, action) => {
      LikeCar(action.payload);
      state.value = cars.length;
      console.log("favCounterSlice");
    },
    disLike: (state) => {
      state.value -= 1;
    },
  },
});
export const { like, disLike } = favCounterSlice.actions;
export default favCounterSlice.reducer;
