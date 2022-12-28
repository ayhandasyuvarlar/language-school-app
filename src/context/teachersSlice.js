import imgOne from "img/teacherone.jpeg";
import imgTwo from "img/teacheroen.jpeg";
import imgThree from "img/teachertwo.jpeg";
import english from "img/english.png";
import italian from "img/italian.png";
import spanish from "img/spanish.png";
import left from "svg/left.svg";
import right from "svg/right.svg";
import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  title: "KEY PERSONS",
  content: "Meet our teachers",
  teachers: [
    {
      fullName: "Christian Howard",
      job: "teacher",
      branch: "Italian",
      flag: italian,
      id: nanoid(),
      img: imgOne,
    },
    {
      fullName: "Sandra Wilson",
      job: "teacher",
      branch: "Spanish",
      flag: spanish,
      id: nanoid(),
      img: imgTwo,
    },
    {
      fullName: "Jimmy Cooper",
      job: "teacher",
      branch: "English",
      flag: english,
      id: nanoid(),
      img: imgThree,
    },
  ],
  left: left,
  right: right,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {},
});

export const selectAllTeacher = (state) => state.teachers;
export default teacherSlice.reducer;
