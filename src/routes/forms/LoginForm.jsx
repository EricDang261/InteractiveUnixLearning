import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../components/context/AuthContext";

import "./form.css";
import { useContext } from "react";
import { UsernameContext } from "../../components/context/UsernameContext";

const LoginForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const context = useContext(UsernameContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      context.setUsrName(nameRef.current.value);
      navigate("/");
      navigate(0);
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="form-container">
      {error && alert(error)}
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>
          <FaHome className="home_link" onClick={() => navigate("/")} />
          <div className="form-group">
            <label htmlFor="name"> Name: </label>
            <input type="text" name="name" id="name" ref={nameRef} />
          </div>{" "}
          {/* end of the form-group div */}
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" ref={emailRef} />
          </div>{" "}
          {/* end of the form-group div */}
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              ref={passwordRef}
            />
          </div>{" "}
          {/* end of the form-group div */}
          <input disabled={loading} type="submit" value="LOGIN" />
          <button className="sign_up_btn" onClick={() => navigate("/SignUp")}>
            {" "}
            Sign Up{" "}
          </button>
        </div>{" "}
        {/* end of the form innter div */}
      </form>
    </div>
  );
};

export default LoginForm;
