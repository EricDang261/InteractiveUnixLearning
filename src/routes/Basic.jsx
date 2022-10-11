import React from 'react'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import "./Basic.css"
import { BasicData } from '../components/BasicData'

const Basic = () => {
  return (
    <div className="basic">
      <SideNav page={BasicData}/>
      <div className="basic_body">

      </div>
      <Footer/>
    </div>
  )
}

export default Basic