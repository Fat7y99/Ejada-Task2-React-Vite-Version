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
    filteredData: initialCarsData,
    searchQuery: "",
  },
  reducers: {
    search: (state, action) => {
      if (action.payload !== "") {
        state.searchQuery = action.payload;
        state.filteredData = state.data.filter((car) =>
          car.carName.toLowerCase().startsWith(action.payload.toLowerCase())
        );
      } else {
        state.filteredData = state.data;
      }
    },
    like: (state, action) => {
      LikeCar(action.payload);
      // console.log("Car is liked");
    },
    updateCars: (state, action) => {
      state.data = action.payload;
      // console.log("Cars Cards are updated");
    },
  },
});

export const { updateCars, like, search } = carsSlice.actions;
export default carsSlice.reducer;
