import React from "react";
import Features from "./Features";
import Head from "./Head";
import Teachers from "./Teachers";
import Comment from "./Comment";
import Questions from "./Questions";
import Concat from "./Concat";
import Footer from "scenes/Footer";
const HomePage = () => {
  return (
    <>
      <Head />
      <Features/>
      <Teachers/>
      <Comment/>
      <Questions/>
      <Concat/>
      <Footer/>
    </>
  );
};

export default HomePage;
