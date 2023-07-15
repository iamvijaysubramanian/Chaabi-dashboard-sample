import React from "react";
import "../Styles/Content2.css";
import ChapterWiseStatus from "../Assets/content2_img1.png";
import WorkersInTraining from "../Assets/content2_Img2.png";
function Content2() {
  return (
    <>
      <div className="content2_box1">
        <p className="head">Chapter Wise Status</p>
        <img src={ChapterWiseStatus} alt="Chapter Wise Status" />
      </div>
      <div className="content2_box2">
        <p>
          <span>Last 14 Days Active Workers In Training</span>
          <span>Last 14 Days</span>
        </p>
        <img src={WorkersInTraining} alt="Workers In Training" />
      </div>
    </>
  );
}

export default Content2;
