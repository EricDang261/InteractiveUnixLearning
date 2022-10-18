import React from 'react'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import "./FileSecurity.css"
import {SecurityData} from '../components/SecurityData'
import * as BsIcons from "react-icons/bs"

const FileSecurity = () => {
  return (
    <div className="security">
      <SideNav page={SecurityData}/>
      <div className="security_body">
        <h1>File Security</h1>

        <div>
          <p>
            Congratulation! You have completed the File Mangement module. Now you are able to use some basic UNIX/LINUX commands without using GUI.
            HOW COOL IS THAT, iSN'T IT <BsIcons.BsEmojiSunglasses/>. In this module you are going to learn about security in UNIX so that you can 
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FileSecurity