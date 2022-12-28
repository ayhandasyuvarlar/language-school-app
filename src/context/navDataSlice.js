import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageName: "Lingua",
  navList: [
    {
      navName: "Courses",
      url: "/",
      id: 1,
    },
    {
      navName: "About us",
      url: "#/",
      id: 2,
    },
    {
      navName: "Teachers",
      url: "#/",
      id: 3,
    },
    {
      navName: "Pricing",
      url: "#/",
      id: 4,
    },
    {
      navName: "Careers",
      url: "/",
      id: 5,
    },
    {
      navName: "Blog",
      url: "/",
      id: 6,
    },
  ],
  buttonName: "Get started",
};

export const selectAllNav = (state) => state.navbar;

const navSlice = createSlice({
  name: "nav-data",
  initialState,
  reducers: {},
});


export default navSlice.reducer