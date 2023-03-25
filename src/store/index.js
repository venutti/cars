import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  changeSearchTerm,
  removeCar,
} from "./slices/cars";
import {
  carCreationReducer,
  changeCost,
  changeName,
} from "./slices/carCreation";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    carCreation: carCreationReducer,
  },
});

export { store, addCar, changeSearchTerm, removeCar, changeCost, changeName };
