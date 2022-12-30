import React from "react";
import styled from "scss/concat.module.scss";
const title = "Get a free trial lesson today";
const content = "Start fulfilling your language dreams with our school";
const button = 'Send'
const Concat = () => {
  return (
    <section className={styled.concat}>
      <h1>{title}</h1>
      <p>{content}</p>
      <div className={styled.concat__input}>
        <input type="text"  placeholder='Enter your send email'/>
        <button>{button}</button>
      </div>
    </section>
  );
};

export default Concat;
