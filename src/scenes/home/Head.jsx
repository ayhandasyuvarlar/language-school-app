import Navbar from "components/Navbar";
import React from "react";
import styled from "scss/head.module.scss";
import Greet from "./Greet";
const Head = () => {
  return (
    <header className={styled.head_container} title={"greet"}>
      <Navbar />
      <Greet />
    </header>
  );
};

export default Head;
