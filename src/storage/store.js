import { configureStore } from "@reduxjs/toolkit";
import featuresSlice from "context/featuresSlice";
import navDataSlice from "context/navDataSlice";
import teachersSlice from "context/teachersSlice";

export const store = configureStore({
  reducer: {
    navbar: navDataSlice,
    features: featuresSlice,
    teachers: teachersSlice,
  },
});
