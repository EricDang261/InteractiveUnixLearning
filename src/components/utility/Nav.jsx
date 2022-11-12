import React, { useState, useEffect, useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import WebsiteLogo from "../../assets/websitelogo.png";

// import { useAuth } from "../context/AuthContext";

import { UsernameContext } from "../context/UsernameContext";

const Nav = () => {
  const [helloUserName, setHelloUserName] = useState("Sign In");
  const [isLogin, setIsLogin] = useState(false);
  localStorage.setItem("is-login", isLogin);

  const context = useContext(UsernameContext);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("username"));
    if (username) {
      // context.setUsrName(username);
      setHelloUserName("Hello " + username);
      localStorage.setItem("is-login", JSON.stringify(setIsLogin(true)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(context.usrName));
  }, [context.usrName]);

  const checkLogin = JSON.parse(localStorage.getItem("is-login"));

  return (
    <div className="container">
      <Link to="/">
        <img className="logo" src={WebsiteLogo} alt="website logo" />
      </Link>

      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* {checkLogin ? (
            <Link to="/logout"> {helloUserName} </Link>
          ) : (
            <Link to="/login"> {helloUserName} </Link>
          )} */}

          <Link to="/login"> {helloUserName} </Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
