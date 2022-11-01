import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import WebsiteLogo from "../../assets/websitelogo.png"

const Nav = () => {
  return (
    <div className="container">
      <Link to='/'><img className="logo" src={WebsiteLogo} alt="website logo"/></Link>
   
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Sign In</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
      
    </div>
  )
}

export default Nav