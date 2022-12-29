import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "scss/comment.module.scss";
import { useSelector } from "react-redux";
import { selectAllCarousel } from "context/sliderSlice";
import CommentExcerpt from "components/CommentExcerpt";
const Comment = () => {
  const { title, content, carousel } = useSelector(selectAllCarousel);
  return (
    <section className={styled.carousel}>
      <div className={styled.carousel__top}>
        <h1 title={title}>{title}</h1>
        <p title={content}>{content}</p>
      </div>
      <div className={styled.carousel__bottom}>
        {carousel.map((item) => (
          <CommentExcerpt {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Comment;
