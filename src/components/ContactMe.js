import React from "react";
import "../assets/css/ContactMe.css";

const ContactMe = () => {
  return (
    <div className="ContactMe">
      <h2 className="contact-me-title">Contact Me</h2>
      <p className="contact-me-subtitle">
        Say <strong>hi </strong>
      </p>
      <strong className="email">hi@alilotfi.dev</strong>
      <div className="social">
        <a
          href="https://github.com/alilotfidev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ali-lotfi-85443817b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://t.me/alilotfidev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-telegram"></i>
        </a>
        <a
          href="https://www.instagram.com/alilotfi.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
