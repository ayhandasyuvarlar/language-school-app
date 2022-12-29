import count from "svg/count.svg";
import increment from "svg/increment.svg";
const { nanoid, createSlice } = require("@reduxjs/toolkit");

const initialState = {
  title: "MORE INFO",
  content: "Common questions",
  count,
  increment,
  questions: [
    {
      id: nanoid(),
      title: "How can I know my level of knowledge ?",
      body: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
    {
      id: nanoid(),
      title: "Can I do it individually or only in a group?",
      body: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
    {
      id: nanoid(),
      title: "Do I need to buy materials for lessons?",
      body: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
    {
      id: nanoid(),
      title: "What is the maximum group size?",
      body: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
    {
      id: nanoid(),
      title: "Are you adjusting to the student's schedule?",
      body: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
    {
      id: nanoid(),
      title: "How the first lesson with teacher will be?",
      body: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
  ],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

export const selectAllQuestions = (state) => state.questions;
export default questionsSlice.reducer;
