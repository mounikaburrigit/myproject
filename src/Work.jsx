import React from "react";
import theme from "./assets/theme.svg";
import mywork_data from "./assets/mywork_data";
import arrow_icon from "./assets/arrow_icon.svg";
import "./work.css";
function Work() {
  return (
    <div className="my-work" id="work">
      <div className="mywork-title">
        <h1>My latest Work</h1>
        <img src={theme} alt="" className="image" />
      </div>
      <div className="work-card">
        {mywork_data.map((item, index) => (
          <div key={index}>
            <img src={item.w_img} alt="" />
          </div>
        ))}
      </div>
      <div className="mywork-button">
        <button className="show-button">
          Show More
          <span className="icon-img">
            <img src={arrow_icon} alt="" className="icon" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Work;
