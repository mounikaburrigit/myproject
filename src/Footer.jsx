import React, { useState } from "react";
import "./footer.css";
import logoImg from "./assets/logoImg.jpg";
import emailjs from "@emailjs/browser";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email!");
      return;
    }

    emailjs
      .send(
        "service_lki48vd",       // Your Service ID
        "template_qe635pc",      // Your Template ID
        { subscriber_email: email },
        "Os0QhNgg9VKjhOO0M"         // Your Public Key
      )
      .then(() => {
        alert(`Thank you for subscribing, ${email}!`);
        setEmail("");
      })
      .catch(() => {
        alert("Failed to send subscription email. Try again.");
      });
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-title-image">
        <div className="footer-img-card">
          <img src={logoImg} alt="" className="image-logo" />
          <p>
            I am a frontend developer from USA with 10 years of experience in
            companies like Cl Infotech Private Limited
          </p>
        </div>
        <div className="email-footer-card">
          <input
            type="email"
            placeholder="Enter Your email"
            className="input-color"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="subscribe-button" onClick={handleSubscribe}>
            Subscribe
          </button>
          
        </div>
        
      </div>
      <hr className="hr-line" />
      <div className="footer-name-card">
        <div className="footer-para">
          <p>© 2022 Mounika Burri. All rights reserved.</p>
        </div>
        <div className="names">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
