import React from 'react'
import "./Footer.css"
import UWlogo from "../assets/uw-logo.png"

const Footer = () => {
  return (
    <div className = "footer_container">
        <img className="uw_logo" src={UWlogo} alt="purple W with gold outline"/>
    </div>
  )
}

export default Footer