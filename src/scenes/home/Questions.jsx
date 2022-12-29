import QuestionsExcerpt from "components/QuestionsExcerpt";
import { selectAllQuestions } from "context/questionsSlice";
import React from "react";
import { useSelector } from "react-redux";
import styled from "scss/questions.module.scss";
const Questions = () => {
  const { title, content, questions, count, increment } =
    useSelector(selectAllQuestions);
  return (
    <section className={styled.questions}>
      <div className={styled.questions__top}>
        <h1 title={title}>{title}</h1>
        <p title={content}>{content}</p>
      </div>
      <div className={styled.questions__bottom}>
        {questions.map((question) => (
          <QuestionsExcerpt
            key={question.key}
            {...question}
            count={count}
            increment={increment}
          />
        ))}
      </div>
    </section>
  );
};

export default Questions;
