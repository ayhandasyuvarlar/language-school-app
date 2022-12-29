import React, { useState } from "react";
import styled from "scss/questions.module.scss";

const QuestionsExcerpt = ({ count, increment, title, body }) => {
  const [visible, setVisible] = useState(false);
  const handlerClick = () =>{
    setVisible(visible === true ?  false: true)
  }
  return (
    <aside className={styled.excerpt} onClick={handlerClick}>
      <div className={styled.excerpt__head}>
        <h1>{title}</h1>
        {visible ? (
          <img src={increment} alt="increment" />
        ) : (
          <img src={count} alt="count" />
        )}
      </div>
     {visible && <p>{body}</p>}
    </aside>
  );
};

export default QuestionsExcerpt;
