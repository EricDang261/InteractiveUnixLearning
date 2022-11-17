import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { FaHome } from "react-icons/fa";
import "./form.css";

const Feedback = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const fbRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uvgw7ai",
        "template_11inkne",
        e.target,
        "9Fn7kdQ5gIBk4kE6S"
      )
      .then((res) => {
        console.log(res);
        nameRef.current.value = "";
        emailRef.current.value = "";
        fbRef.current.value = "";
        setIsSubmit(true);
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <form onSubmit={sendEmail}>
        <div className="form-inner">
          <h2>Feedback</h2>
          <Link to="/">
            <FaHome className="home_link" />
          </Link>
          <div className="form-group">
            <label htmlFor="name"> Name: </label>
            <input ref={nameRef} type="text" name="name" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              ref={emailRef}
              type="email"
              name="user_email"
              id="user_email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message"> Feedback </label>
            <textarea ref={fbRef} name="message" rows="4"></textarea>
            <input className="fb-button" type="submit" value="Send" />
          </div>
          {isSubmit ? (
            <label style={{ color: "white" }}>
              {" "}
              Thank you for your feedback!
            </label>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default Feedback;
