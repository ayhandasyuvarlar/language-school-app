import React from "react";
import styled from "scss/teacher.module.scss";
const TeacherExcerpt = ({ fullName, job, branch, flag, id, img }) => {
  return (
    <aside className={styled.excerpt}>
      <img src={img} alt={"teacher Img"} className={styled.excerpt__img} />
      <div className={styled.excerpt__body}>
        <h1 title={fullName}>{fullName}</h1>
        <div className={styled.excerpt__footer}>
          <img src={flag} alt="" />
          <p title={branch}>
            {branch}
            <span title={job}> {job} </span>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default TeacherExcerpt;
