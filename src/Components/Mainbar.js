import React from "react";
import "../Styles/Mainbar.css";
import graph from "../Assets/graph.png";
import graph2 from "../Assets/redgraph.png";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

function Mainbar() {
  return (
    <div className="container">
      <nav>
        <h1>Hello, Vijay Subramanian</h1>
        <p>Following is Your Organization's Performance Summary</p>
      </nav>
      <div id="content1">
        <Content1
          heading="In Training Workers"
          value="3,354"
          span1="&#8605; 20%"
          span2="234"
          img={graph}
          classname="span1"
        />
        <Content1
          heading="Video Watch-Time (Hrs)"
          value="2,433"
          span1="&#8605; 20%"
          span2="435"
          img={graph2}
          classname="span3"
        />
        <Content1
          heading="% Workers Passing Quiz"
          value="95%"
          span1="&#8605; 20%"
          span2="24%"
          img={graph}
          classname="span1"
        />
        <Content1
          heading="Avg. Days Taken"
          value="6"
          span1="&#8605; 20%"
          span2="3"
          img={graph}
          classname="span1"
        />
      </div>

      <div id="content2">
        <Content2 />
      </div>

      <div id="content3">
        <Content3 />
      </div>
    </div>
  );
}

export default Mainbar;
