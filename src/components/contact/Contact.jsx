import React, { useState, useRef } from "react";
import "./contact.scss";
import shake from "../../images/shake.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const form = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_obl80ng",
        "template_f0qkli8",
        form.current,
        "mtCeND9SvO1dh4GAo"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={(e) => sendEmail(e)}>
          <input type="text" placeholder="Your Email" name="user_email"></input>
          <textarea placeholder="Message" name="message"></textarea>
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
