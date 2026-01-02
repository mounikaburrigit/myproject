import React from "react";
// import girlimage from "./assets/girlimage.jpg";
import "./profile.css";
function Profile() {
  const connectNaukari=()=>{
    window.open(
       "https://www.naukri.com/mnjuser/profile",
      "_blank"
    )
  }

  const myResume=()=>{
    window.open(
      "https://drive.google.com/drive/home",
       "_blank"
    )
  }
  return (
    <div className="profile" id="home">
      <img src="https://i.ibb.co/h1rC4VNJ/Whats-App-Image-2025-12-29-at-4-04-37-PM.jpg" alt="Mounika Burri - Front-End React Developer" className="girlimage" />
      <h1>
        <span>I am Mounika,</span> Front-End React Developer
      </h1>
      <p>
        Front-End enthusiast and a continuous learner. Technically Skilled
        Front-End React Developer with 2+ Year experience in building Web &
        Enterprise Applications.
      </p>
      <div className="profile-button">
        <button className="connect-button btn" onClick={connectNaukari}>Connect with me </button>
        <button className="profile-rusume" onClick={myResume}>My resume</button>
      </div>
    </div>
  );
}

export default Profile;
