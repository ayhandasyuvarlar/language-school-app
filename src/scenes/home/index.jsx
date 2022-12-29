import React from "react";
import Features from "./Features";
import Head from "./Head";
import Teachers from "./Teachers";
import Comment from "./Comment";
import Questions from "./Questions";
const HomePage = () => {
  return (
    <>
      <Head />
      <Features/>
      <Teachers/>
      <Comment/>
      <Questions/>
    </>
  );
};

export default HomePage;
