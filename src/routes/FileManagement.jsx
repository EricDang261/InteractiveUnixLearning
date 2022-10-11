import React from 'react'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import "./FileManagement.css"
import { ManagementData } from '../components/ManagementData'


const FileManagement = () => {
  return (
    <div className="management">
      <SideNav page={ManagementData}/>
      <div className="management_body">
        <h1>File Management</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default FileManagement