import React, {useState} from 'react'
import './Nav.css'
import {Link, useNavigate} from 'react-router-dom'
import WebsiteLogo from "../../assets/websitelogo.png"

import {useAuth} from "../context/AuthContext" 
import { useEffect } from 'react'
import { useContext } from 'react'
import { UsernameContext } from '../context/UsernameContext'

const Nav = () => {
  const [hello, setHello] = useState("Sign In")
  const navigate = useNavigate()
  const {currentUser} = useAuth()
  const context = useContext(UsernameContext)


  useEffect( () => {
    const username = JSON.parse(localStorage.getItem("username"))
    if(username){
      context.setUsrName(username)   
      setHello("Hello " + username)
    }
  },[])

  useEffect( () => {
      localStorage.setItem("username", JSON.stringify(context.usrName))
  }, [context.usrName])


  return (
    <div className="container">
      <Link to='/'><img className="logo" src={WebsiteLogo} alt="website logo"/></Link>
   
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login"> { hello } </Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
      
    </div>
  )
}

export default Nav