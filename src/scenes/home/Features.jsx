import { FeaturesExcerpt } from "components/FeaturesExcerpt";
import { selectAllFeature } from "context/featuresSlice";
import React from "react";
import { useSelector } from "react-redux";
import styled from "scss/features.module.scss";
const Features = () => {
  const { title, content, features } = useSelector(selectAllFeature);
  return (
    <section className={styled.features}>
      <aside className={styled.features__top}>
        <div className={styled.features__title}>
          <h1 title={title}> {title}</h1>
        </div>
        <div className={styled.features__content}>
          <p title={content}>{content}</p>
        </div>
      </aside>
      <div className={styled.features__bottom}>
        {features.map((feature) => (
          <FeaturesExcerpt key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
