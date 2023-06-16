import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName.slice.js";

export default configureStore({
  reducer: {
    trainerName,
  },
});
