import React from "react";
import theme from "./assets/theme.svg";
// import girlimage from "./assets/girlimage.jpg";
import "./about.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="https://i.ibb.co/h1rC4VNJ/Whats-App-Image-2025-12-29-at-4-04-37-PM.jpg" className="girlimage" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Front-End enthusiast and a continuous learner. Technically Skilled
              Front-End React Developer with 1+ Year experience in building Web
              & Enterprise Applications. using React, JavaScript, Restful API,
              CSS, Bootstrap, HTML while followings Agile Methodology. Always
              ready For New Challenges and adapting to Deliver.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML &CSS &BOOTSTRAP</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "55%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Nodejs</p>
              <hr style={{ width: "65%" }}></hr>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievment">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>3+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>1+</h1>
          <p>HAPPY CLIENTS</p>
        </div>

        <hr />
      </div>
    </div>
  );
}

export default About;
