import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import WebsiteLogo from "../../assets/websitelogo.png"
// import {FaBars, FaTimes} from 'react-icons/fa'

const Nav = () => {
  return (
    <div className="container">
      <Link to='/'><img className="logo" src={WebsiteLogo} alt="website logo"/></Link>
      {/* <div className="hamburger">
        <FaBars size={20}/>
      </div> */}
   
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Sign In</Link></li>
      </ul>
      
    </div>
  )
}

export default Nav