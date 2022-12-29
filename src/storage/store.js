import { configureStore } from "@reduxjs/toolkit";
import featuresSlice from "context/featuresSlice";
import navDataSlice from "context/navDataSlice";
import questionsSlice from "context/questionsSlice";
import sliderSlice from "context/sliderSlice";
import teachersSlice from "context/teachersSlice";

export const store = configureStore({
  reducer: {
    navbar: navDataSlice,
    features: featuresSlice,
    teachers: teachersSlice,
    carousel: sliderSlice,
    questions: questionsSlice,
  },
});
