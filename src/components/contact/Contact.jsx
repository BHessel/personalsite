import React, { useState } from "react";
import "./contact.scss";
import shake from "../../images/shake.svg";

const Contact = () => {

    const [ message, setMessage ] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message ? (
            <span>Thanks for the message, I look forward to meeting you!</span>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
