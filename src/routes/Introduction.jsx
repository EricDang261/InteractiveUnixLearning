import React, {useState} from 'react'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import "./Introduction.css"
import { IntroData } from '../components/IntroData'
import { IntroMCQs } from '../components/IntroMCQs'
import Quiz from './Quiz'
import arch from "../assets/unix_arch.png"
import * as AiIcons from "react-icons/ai"
import Popup from '../components/Popup'

const Introduction = () => {
  return (
    <div className="intro">
        {/* <Nav/> */}
        <SideNav page={IntroData} />
        <div className="intro_body">
            <h1 className="intro_title">Introduction</h1>
            <br/>
            <p className="intro_intro">In this lesson you will learn what Unix is, the uses behind it, and the architecture it uses.</p>
            <br/>
            <div className="definition">
              <h3 className="intro_topic1"> What is Unix?</h3>
              <p className="intro_os">Unix is the Granddaddy (yes capital G) of all operating systems (OS). Simply put the OS is software that 
                controls the hardware of a computer system. OS manage resources and services such as memory management, device management,
                and resource allocation to name a few. Basically, everyhting that makes a computer useful is taken care of by the OS. Without it,
                your computer would be a pile of useless hardware. The purpose of an OS is to create an interface between the user and hardware of
                their system.
              </p>
              <br/>
              <p className="intro_background">
                The Unix OS was created by Bell Labs back when punch cards were still being used and the first man landed on the moon.
                It was born from the ashes of Multics, a failed previous attempt at an OS system, and was originally named Unics (wanna take a guess
                why?). The goal of the project was to create a system that supports: 
                <ul className="unics_reasons">
                  <li>Multiple users- several people using the computer at the same time</li>
                  <li>Multitasking- running multiple programs at the same time (exe programs)</li>
                  <li>Multi-processes- executing several processes simultaneously per user (programs in exe)</li>
                </ul>
                <br/>
                As seen, their project ended up a success and can be described very simply as a shell program, a command line interpreter 
                (CLI), which translates user input commands into a language the OS, or kernel, can understand. A good analogy is to imagine
                the kernal is a foreign manager and the shell is the translating app you are using to communicate.
              </p>
              <p className="intro_warning">
                WARNING: Linux != Unix
                <br/>
                Linix is one of Unix's many grandchildren. Linux is used with GNU (an OS) which stands for GNU is Not Unix.
              </p>
            </div>
            <div className="uses">
              <h3 className="intro_topic2">Why Use Unix? </h3>

            </div>
            <div className="arch">
              <h3 className="intro_topic3">Unix Architecture </h3>
              <Popup trigger={false}><h1>My Popup</h1></Popup>
              <div className="arch_diagram">
                <AiIcons.AiOutlinePlusCircle className="hw_btn"/>
                <AiIcons.AiOutlinePlusCircle className="kernel_btn"/>
                <AiIcons.AiOutlinePlusCircle className="shell_btn"/>
                <AiIcons.AiOutlinePlusCircle className="applic_btn"/>
                <img className="unix_arch" src={arch} alt="overlapping circles of smaller sizes and colors"/>
              </div>

              

            </div>
        </div>
        {console.log("WHYYYYY?", Array.isArray({IntroMCQs}))}
        
        {/* <Quiz data={IntroMCQs}/> */}
        <Footer/>  
    </div>
  )
}

export default Introduction