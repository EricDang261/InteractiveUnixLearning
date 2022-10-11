import React, {useState} from 'react'
import {Link} from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import "./SideNav.css"
// import { IntroData } from './IntroData'

const SideNav = (props) => {

    // Define state
    const [sidebar,setActive] = useState(false)

    // Change state function
    const showSidebar = () => {
        setActive(!sidebar)
    }

  return (
    <>
        <div className="sidebar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
       <nav className ={sidebar ? "side-menu active" : "side-menu"}>
            <ul className="side-menu-items" onClick={showSidebar}>
                <li className="sidebar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                <div className="menu-items"></div>
                {props.page.map((item, index)=>{
                    return(
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                            <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
       </nav>
        

    </>
  )
}

export default SideNav