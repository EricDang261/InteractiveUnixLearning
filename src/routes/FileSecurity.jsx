import React from 'react'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import "./FileSecurity.css"
import {SecurityData} from '../components/SecurityData'

const FileSecurity = () => {
  return (
    <div className="security">
      <SideNav page={SecurityData}/>
      <div className="security_body">
        <h1>File Security</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default FileSecurity