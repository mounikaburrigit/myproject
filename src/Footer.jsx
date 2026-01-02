import React from "react";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">MB</div>
            <p className="footer-description">
              Front-End React Developer passionate about creating exceptional web experiences 
              and delivering high-quality solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>Work</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </div>

          {/* Values Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Core Values</h3>
            <ul className="footer-links">
              <li>🚀 Innovation</li>
              <li>💡 Problem Solving</li>
              <li>🤝 Collaboration</li>
              <li>📈 Growth</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Get In Touch</h3>
            <ul className="footer-contact">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:mounikaburri21@gmail.com">mounikaburri21@gmail.com</a>
              </li>
              <li>
                <span className="contact-label">Location:</span>
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} Mounika Burri. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <span className="separator">|</span>
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
