import React from "react";
import styled from "scss/greet.module.scss";
import img from "img/headwomen.png";
const Greet = () => {
  const spanCase = () => {
    return (
      <>
        A <span>unique</span> approach to learning foreign languages online
      </>
    );
  };
  const content =
    "Learn at your own pace, with lifetime access on mobile and desktop";
  return (
    <section className={styled.greet}>
      <div className={styled.greet__left}>
        <aside className={styled.greet__context}>
          <div className={styled.greet__title}>
            <h1>{spanCase()}</h1>
          </div>
          <div className={styled.greet__content}>
            <p title={content}>{content}</p>
          </div>
          <div className={styled.greet__btn}>
            <button title="get-started">Get Started</button>
          </div>
        </aside>
      </div>
      <aside className={styled.greet__right}>
        <div className={styled.greet__imgbox}>
          <div className={styled.greet__imgboxTwo}>
            <img src={img} alt="" />
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Greet;
