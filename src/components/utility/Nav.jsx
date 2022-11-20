import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as FeedbackIcon } from "../../icons/feedback.svg";
import { ReactComponent as CaretIcon } from "../../icons/caret.svg";
import { ReactComponent as Signout } from "../../icons/signout.svg";
import WebsiteLogo from "../../assets/websitelogo.png";

import { UsernameContext } from "../context/UsernameContext";
import "./Nav.css";

// import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const [helloUserName, setHelloUserName] = useState("Sign In");
  const [isLogin, setIsLogin] = useState(false);
  const [isSignout, setIsSignout] = useState(!isLogin);
  localStorage.setItem("is-login", isLogin);
  localStorage.setItem("is-signout", isSignout);

  const context = useContext(UsernameContext);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("username"));
    if (username) {
      context.setUsrName(username);
      setHelloUserName("Hello " + username);
      localStorage.setItem("is-login", JSON.stringify(setIsLogin(true)));
      localStorage.setItem("is-signout", JSON.stringify(setIsSignout(false)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(context.usrName));
  }, [context.usrName]);

  const checkLogin = JSON.parse(localStorage.getItem("is-login"));
  return (
    <Navbar>
      <Link to="/">
        <img className="logo" src={WebsiteLogo} alt="website logo" />
      </Link>
      <ul className="navbar-list">
        <li>
          {checkLogin ? (
            <Link to="/"> {helloUserName} </Link>
          ) : (
            <Link to="/login"> {helloUserName} </Link>
          )}
        </li>
      </ul>
      <NavItem icon={<CaretIcon />}>
        <DropDownMenu></DropDownMenu>
      </NavItem>
    </Navbar>
  );
}

export function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

export function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export function DropDownMenu(props) {
  function DropDownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }
  return (
    <div className="dropdown">
      <DropDownItem leftIcon={<FeedbackIcon />}>
        {" "}
        <Link to="/feedback">Feedback</Link>
      </DropDownItem>
      <DropDownItem leftIcon={<Signout />}>
        <form
          onClick={() => !props.isSignout && localStorage.clear("username")}
        >
          <button>Sign out</button>
        </form>
      </DropDownItem>
    </div>
  );
}
