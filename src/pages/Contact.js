import React from "react";
import "../styles/Contact.css";
import Img from "../assets/contact.jpeg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Img})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Please Enter Your Name" />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Please Enter Your EmailID"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
