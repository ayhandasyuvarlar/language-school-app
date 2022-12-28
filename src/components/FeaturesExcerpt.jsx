import React from "react";
import styled from "scss/features.module.scss";
export const FeaturesExcerpt = ({ title, icon, body }) => {
  return (
    <aside className={styled.excerpt}>
      <div className={styled.excerpt__img}>
        <img src={icon} alt={title} />
      </div>
      <div className={styled.excerpt__body}>
        <h1 className={styled.excerpt__title} title={title}>
            {title}
        </h1>
        <p className={styled.excerpt__text} body={body}>
            {body}
        </p>
      </div>
    </aside>
  );
};
