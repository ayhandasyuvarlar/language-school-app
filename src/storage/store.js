import { configureStore } from "@reduxjs/toolkit";
import featuresSlice from "context/featuresSlice";
import navDataSlice from "context/navDataSlice";

export const store = configureStore({
  reducer: {
    navbar: navDataSlice,
    features: featuresSlice,
  },
});
