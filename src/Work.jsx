import React from "react";
import theme from "./assets/theme.svg";
import mywork_data from "./assets/mywork_data";
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
          <div key={index} className="work-card-item">
            <div className="work-card-image-wrapper">
              <img src={item.w_img} alt={item.w_name} className="work-card-img" />
              <div className="work-card-overlay">
                <h3 className="work-card-title">{item.w_name}</h3>
                <div className="work-card-number">#{item.w_no}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-button">
        <button className="show-button">
          Show More
          <span className="arrow-icon">→</span>
        </button>
      </div>
    </div>
  );
}

export default Work;
