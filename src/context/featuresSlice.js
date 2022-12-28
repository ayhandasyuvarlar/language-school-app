import iconOne from "svg/glassIcons.svg";
import iconTwo from "svg/glassIconsTwo.svg";
import iconThree from "svg/glassIconsThree.svg";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  title: "WHY CHOOSE US",
  content: "Our values ",
  features: [
    {
      icon: iconOne,
      title: "Speaking clubs",
      body: "In our school you will pratice your speaking skilss and just get a lat of positive emotions !",
      id: 1,
    },
    {
      icon: iconTwo,
      title: "Quality control",
      body: "A huge work has been done with the teachers and their work has been monitored thoroughly. ",
      id: 2,
    },
    {
      icon: iconThree,
      title: "Progress analysis",
      body: "The CEF of Reference has been used at our school. It allows to control our students’ success in studying.",
      id: 3,
    },
  ],
};
export const selectAllFeature = (state => state.features)
const featuresSlice = createSlice({
  name: "featuresSlice",
  initialState,
  reducers: {},
});

export default featuresSlice.reducer;
