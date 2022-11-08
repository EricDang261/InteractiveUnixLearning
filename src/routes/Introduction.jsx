import React, { useState, useEffect } from 'react'
import SideNav from '../components/sidenav/SideNav'
import Footer from '../components/utility/Footer'
import "./Intro.css"
import { IntroData } from '../components/sidenav/IntroData'
import Quiz from './Quiz'
import "./Quiz.css"
import quizImg from "../assets/quiz.png"
import arch from "../assets/unix_arch.png"
import * as AiIcons from "react-icons/ai"
import encounter from "../assets/Encounter.png"
import modularity from "../assets/modularity.png"
import pas from "../assets/pas.png"
import Popup from '../components/utility/Popup'
import Progress from '../components/utility/Progress'
import Checkbox from '../components/Checkbox'

const Introduction = () => {
  const [hwPopup, setHWPop] = useState(false)
  const [kernPopup, setKernPop] = useState(false)
  const [shellPopup, setShellPop] = useState(false)
  const [appPopup, setAppPop] = useState(false)
  const [qData, setQData] = useState()
  const [loading, SetLoading] = useState(true)
  const [quizPopup, setQuizPop] = useState(false)


  useEffect(() => {
    fetch("./introMC.json")
      .then(res => res.json())
      .then(data => {
        setQData(Object.keys(data).map(function (value) { return data[value] }))
        console.log(qData)
        SetLoading(false);
      })
  }, [])

  if (loading) return <h1>Loading</h1>

  return (
    <div className="intro">
      <SideNav className="intro_nav" page={IntroData} />
      <div className="intro_body">
        <h1 className="intro_title">Introduction</h1>
        <br />
        <p className="intro_intro">In this lesson you will learn what Unix is, the uses behind it, and the architecture it uses.</p>
        <br />
        <div className="break">============</div>
        <br />
        <div className="definition">
          <h3 className="intro_topic1"> What is Unix?</h3>
          <p className="intro_os">Unix is the Granddaddy (yes capital G) of all operating systems (OS). Simply put the OS is software that
            controls the hardware of a computer system. OS manage resources and services such as memory management, device management,
            and resource allocation to name a few. Basically, everyhting that makes a computer useful is taken care of by the OS. Without it,
            your computer would be a pile of useless hardware. The purpose of an OS is to create an interface between the user and hardware of
            their system.
          </p>
          <br />
          <p className="intro_background">
            The Unix OS was created by Bell Labs back when punch cards were still being used and the first man landed on the moon.
            It was born from the ashes of Multics, a failed previous attempt at an OS system, and was originally named Unics (wanna take a guess
            why?). The goal of the project was to create a system that supports:
          </p>
          <ul className="unics_reasons">
            <li>Multiple users- several people using the computer at the same time</li>
            <li>Multitasking- running multiple programs at the same time (exe programs)</li>
            <li>Multi-processes- executing several processes simultaneously per user (programs in exe)</li>
          </ul>
          <br />
          <p className="intro_background">
            As seen, their project ended up a success and can be described very simply as a shell program, a command line interpreter
            (CLI), which translates user input commands into a language the OS, or kernel, can understand. A good analogy is to imagine
            the kernal is a foreign manager and the shell is the translating app you are using to communicate.
          </p>
          <br />
          <p className="intro_warning">
            WARNING: Linux != Unix
            <br />
            <br />
            Linix is one of Unix's many grandchildren. Linux is used with GNU (an OS) which stands for GNU is Not Unix.
          </p>
        </div>
        <div className="break">============</div>
        <h3 className="intro_topic2">Why Use Unix? </h3>
        <div className="uses">

          <div className="mod_wrapper">
            <img className="mod" src={modularity} alt="tree diagram describing modules" />
            <p className="mod_text">"Unix philosophy", create small modular components that do one thing well</p>
          </div>
          <div className="pas_wrapper">
            <img className="pas" src={pas} alt="blue arrow circle, sick figure, brown bag " />
            <p className="pas_text">Portability, Simplicity, Adaptability</p>
          </div>
          <div className="encounter_wrapper">
            <img className="encounter" src={encounter} alt="pokemon battle with Unix" />
            <p className="encounter_text">You will encounter more Unix systems in the future</p>
          </div>
        </div>
        <div className="break">============</div>
        <div className="arch">
          <h3 className="intro_topic3">Unix Architecture </h3>
          <p className="arch_instructions">
            Click the different components to learn more about
            Unix's 4-layered architecture.
          </p>
          <div className="arch_diagram">
            <AiIcons.AiOutlinePlusCircle className="hw_btn" onClick={() => setHWPop(true)} />
            <AiIcons.AiOutlinePlusCircle className="kernel_btn" onClick={() => setKernPop(true)} />
            <AiIcons.AiOutlinePlusCircle className="shell_btn" onClick={() => setShellPop(true)} />
            <AiIcons.AiOutlinePlusCircle className="applic_btn" onClick={() => setAppPop(true)} />
            <img className="unix_arch" src={arch} alt="overlapping circles of smaller sizes and colors" />
          </div>
          <div className="pop_container">
            <Popup className="hw_info"
              trigger={hwPopup}
              setTrigger={setHWPop}
              text="Hardware: Visible system components" />

            <Popup className="kernel_info"
              trigger={kernPopup}
              setTrigger={setKernPop}
              text="Kernel: This manages and allocates tasks and memory" />

            <Popup className="shell_info"
              trigger={shellPopup}
              setTrigger={setShellPop}
              text="Shell: The CLI, bridge between kernel and user" />


            <Popup className="applic_info"
              trigger={appPopup}
              setTrigger={setAppPop}
              text="Application: Data and programs users write" />
          </div>
          <div className="stickynotes">
            <ul>
              <li>
                <a href="#">
                    <h2>Hardware Layer</h2>
                    <p>The innermost layer that is composed of visible system components.</p>
                </a>
              </li>
              <li>
                <a href="#">
                    <h2>Kernel Layer</h2>
                    <p>The second most inner layer that manages and allocates tasks and memory.</p>
                </a>
              </li>
              <li>
                <a href="#">
                    <h2>Shell Layer</h2>
                    <p>The Third layer that consists of the CLI, the bridge between kernel and user. </p>
                </a>
              </li>
              <li>
                <a href="#">
                    <h2>Application Layer</h2>
                    <p>The outermost layer that consists of the data and programs users write.</p>
                </a>
              </li>
            </ul>
          </div>  
        </div>
      </div>
      <div className="break">============</div>
      <div className="topic_quiz">
        <h1 className="topic_quiz_title">End of Lesson Quiz</h1>
        <img src={quizImg} alt="pencil and test sheet" />
        <button onClick={() => setQuizPop(true)}>Click here to begin quiz!</button>
      </div>
      <Quiz data={qData} trigger={quizPopup} setTrigger={setQuizPop} />
      <Progress />
      <Checkbox id="1" />
      <Footer />
    </div>
  )
}

export default Introduction