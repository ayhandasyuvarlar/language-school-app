import TeacherExcerpt from "components/TeacherExcerpt";
import { selectAllTeacher } from "context/teachersSlice";
import React from "react";
import { useSelector } from "react-redux";
import styled from "scss/teacher.module.scss";
const Teachers = () => {
  const { title, content, left, right, teachers } =
    useSelector(selectAllTeacher);
  return (
    <section className={styled.teacher}>
      <div className={styled.teacher__top}>
        <h1 className={styled.teacher__title} title={title}>
          {title}
        </h1>
        <div className={styled.teacher__bar}>
          <p className={styled.teacher__content} title={content}>
            {content}
          </p>
          <div className={styled.teacher__icons}>
            <img
              src={left}
              alt="left-icon"
              className={styled.teacher__icons__left}
            />
            <img
              src={right}
              alt="right-icon"
              className={styled.teacher__icons__right}
            />
          </div>
        </div>
      </div>
      <div className={styled.teacher__bottom}>
        {teachers.map((item) => (
          <TeacherExcerpt key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Teachers;
