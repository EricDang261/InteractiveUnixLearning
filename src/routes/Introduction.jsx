import React from 'react'
import Nav from '../components/Nav'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import "./Introduction.css"
import { IntroData } from '../components/IntroData'

const Introduction = () => {
  return (
    <div className="intro">
        {/* <Nav/> */}
        <SideNav page={IntroData} />
        <div className="intro_body">
            <h1>Introduction</h1>
            <p></p>
        </div>
        <Footer/>  
    </div>
  )
}

export default Introduction