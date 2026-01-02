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
        <div className="about-content-wrapper">
          <div className="about-para">
            <h2 className="about-subtitle">Who I Am</h2>
            <p>
              Front-End enthusiast and a continuous learner. Technically Skilled
              Front-End React Developer with 2+ Years experience in building Web
              & Enterprise Applications. Using React, JavaScript, RESTful API,
              CSS, Bootstrap, HTML while following Agile Methodology. Always
              ready for new challenges and adapting to deliver.
            </p>
          </div>
          
          <div className="values-skills-row">
            <div className="about-values">
              <h2 className="about-subtitle">My Values</h2>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">🚀</div>
                  <h3>Innovation</h3>
                  <p>Always exploring new technologies and best practices</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">💡</div>
                  <h3>Problem Solving</h3>
                  <p>Creative solutions for complex challenges</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <h3>Collaboration</h3>
                  <p>Working effectively in team environments</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">📈</div>
                  <h3>Growth</h3>
                  <p>Continuously learning and improving skills</p>
                </div>
              </div>
            </div>

            <div className="about-skills">
            <h2 className="about-subtitle">Technical Skills</h2>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">HTML & CSS & Bootstrap</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">React.js</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="90"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">JavaScript</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Python</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="70"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Node.js</span>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="75"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievment">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievment">
          <h1>3+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <div className="about-achievment">
          <h1>1+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
