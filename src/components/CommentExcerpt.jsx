import React from "react";
import styled from "scss/comment.module.scss";
const CommentExcerpt = ({ name, img, course, flag, body }) => {
  return (
    <aside className={styled.excerpt}>
      <div className={styled.excerpt__left}>
        <img src={img} alt="user img" />
      </div>
      <div className={styled.excerpt__right}>
        <h1>{name}</h1>
        <div className={styled.excerpt__right__course}>
          <img src={flag} alt="flag" />
          <p>{course}</p>
        </div>
        <div className={styled.excerpt__right__body}>
          <p>{body}</p>
        </div>
      </div>
    </aside>
  );
};

export default CommentExcerpt;
