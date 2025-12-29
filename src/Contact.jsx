import React from "react";

import theme from "./assets/theme.svg";

import mail_icon from "./assets/mail_icon.svg";

import call_icon from "./assets/call_icon.svg";
import location_icon from "./assets/location_icon.svg";
import emailjs from "@emailjs/browser";


import "./contact.css";
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_lki48vd", // Service ID from Step 2
        "template_qe635pc", // Template ID from Step 3
        e.target,
        "Os0QhNgg9VKjhOO0M" // Public Key from Step 4
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>GEt In Touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let'S talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="icons">
            <div className="icon">
              <img src={mail_icon} alt="" />
              <p>mounikaburri21@gmail.com</p>
            </div>
            <div className="icon">
              <img src={call_icon} alt="" />
              <p>6301435756</p>
            </div>
            <div className="icon">
              <img src={location_icon} alt="" />
              <p>Hyderabad</p>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="contact-form">
              <div className="inputs">
                <label>Your Name</label>
                <input type="text" placeholder="Enter Your Name" name="name" />
              </div>
              <div className="inputs">
                <label>Your Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                />
              </div>
              <div className="inputs">
                <label>Write your message here</label>
                <textarea className="my-textarea" placeholder="Enter your message" name="message"></textarea>

              </div>
              <div>
                <button type="submit" className="submit-button-now">
                  Submit Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
