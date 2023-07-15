import React from "react";
import "../Styles/Content3.css";
import Quiz from "../Assets/content3_Img1.png";
import DailyTraining from "../Assets/content3_Img2.png";
function Content3() {
  return (
    <>
      <div className="content3_box1">
        <p className="head1">Monthly Training Activity</p>
        <p className="head2">
          <span style={{ color: "green", fontSize: "20px" }}>&#8593;</span> 16%
          more enrollers this year
        </p>
        <ul>
          <li>
            <p className="course">Course a</p>
            <p className="count">23 Workers Took this course This week</p>
          </li>
          <li>
            <p className="course">Course b</p>
            <p className="count">253 Workers Took this course This week</p>
          </li>
          <li>
            <p className="course">Course c</p>
            <p className="count">253 Workers Took this course This week</p>
          </li>
          <li>
            <p className="course">Course d</p>
            <p className="count">253 Workers Took this course This week</p>
          </li>
        </ul>
      </div>
      <div className="content3_box2">
        <p>Quiz Passing %</p>
        <img src={Quiz} alt="Quiz Passing" />
      </div>
      <div className="content3_box3">
        <p>
          <span>Daily Training Completions</span>
          <span>Last 7 Days</span>
        </p>
        <img src={DailyTraining} alt="Daily Training" />
      </div>
    </>
  );
}

export default Content3;
