import { createSlice, nanoid } from "@reduxjs/toolkit";
import logo from "svg/logo.svg";
import facebook from "svg/facebook.svg";
import instagram from "svg/instagram.svg";
import twitter from "svg/twitter.svg";
const initialState = {
  logo,
  name: "Lingua",
  address: "20 Osgood Rd, Milford, NH 03055, USA",
  phone: "+1283871239190213021",
  footerList: [
    {
      title: "Company",
      list: [
        {
          name: "Careers",
          id: nanoid(),
        },
        {
          name: "Teachers",
          id: nanoid(),
        },
        {
          name: "Support",
          id: nanoid(),
        },
        {
          name: "Contact",
          id: nanoid(),
        },
      ],
    },
    {
      title: "Product",
      list: [
        {
          name: "Courses",
          id: nanoid(),
        },
        {
          name: "Pricing",
          id: nanoid(),
        },
        {
          name: "Blog",
          id: nanoid(),
        },
      ],
    },
    {
      title: "Legal",
      list: [
        {
          name: "Terms & Conditions",
          id: nanoid(),
        },
        {
          name: "Privacy policy",
          id: nanoid(),
        },
      ],
    },
  ],
  social: [
    {
      icon: facebook,
      id: nanoid(),
    },
    {
      icon: instagram,
      id: nanoid(),
    },
    {
      icon: twitter,
      id: nanoid(),
    },
  ],
};
const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
});

export const selectAllFooter = (state) => state.footer;
export default footerSlice.reducer;
