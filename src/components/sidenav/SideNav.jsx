import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./SideNav.css";
import { Link as LinkScroll } from "react-scroll";

const SideNav = (props) => {
  // Define state
  const [sidebar, setActive] = useState(false);

  // Change state function
  const showSidebar = () => {
    setActive(!sidebar);
  };

  return (
    <>
      <div className="sidebar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} size={40} />
        </Link>
        <div className="home_link">
          <Link to="/" className="home_icon">
            <FaIcons.FaHome size={40} />
          </Link>
        </div>
      </div>
      <nav className={sidebar ? "side-menu active" : "side-menu"}>
        <ul className="side-menu-items" onClick={showSidebar}>
          <li className="sidebar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <div className="menu-items"></div>
          {props.page.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <LinkScroll to={item.path} spy={true} smooth={true}>
                  <span className="side_titles">{item.title}</span>
                </LinkScroll>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default SideNav;
