import carouselImgThree from "img/listfour.png";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import english from "img/english.png";

const initialState = {
  title: "TOP STUDIYING",
  content: "Our students say",
  carousel: [
    {
      name: "Juliet Watson",
      img: carouselImgThree,
      id: nanoid(),
      course: "B2 course student",
      flag: english,
      body: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quisquamet saepe, veritatis eveniet eos aliquam aliquid aut cum quibusdam error illo assumenda quia amet voluptatum. Ab consectetur odit cumque.",
    },
  ],
};

const sliderSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {},
});

export const selectAllCarousel = (state) => state.carousel;

export default sliderSlice.reducer;
