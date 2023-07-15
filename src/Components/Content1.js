import React from "react";
import "../Styles/Content1.css";

function Content1({ heading, value, span1, span2, img, classname }) {
  return (
    <div className="content1_box">
      <p className="head">{heading}</p>
      <div className="body">
        <div className="content1_box_left">
          <h2>{value}</h2>
          <p>
            <span className={`${classname}`}>{span1}</span>
            <span className="span2">{span2}</span>
          </p>
        </div>
        <div className="content1_box_right">
          <img src={img} alt="Graph" />
        </div>
      </div>
    </div>
  );
}

export default Content1;
