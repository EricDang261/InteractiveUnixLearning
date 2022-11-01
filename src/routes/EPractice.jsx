import React, {useState, useEffect, useRef} from 'react'
import {Link} from "react-router-dom"
import './FMPractice.css'


import Nav from '../components/utility/Nav'
import Popup from '../components/utility/Popup'

import initial from '../assets/fm/initial.png'
import ctrlc from '../assets/environment/ctrlC.png'
import ctrlz from '../assets/environment/CtrlZ.png'
import env from '../assets/environment/env.png'
import ifconfig from '../assets/environment/ifconfig.png'
import kill from '../assets/environment/kill.png'
import man from '../assets/environment/manlist.png'
import pgrep from '../assets/environment/pgrepfirefox.png'
import ping from '../assets/environment/ping_cmd.png'
import psaux from '../assets/environment/psaux.png'
import psfu from '../assets/environment/psfu.png'
import top from '../assets/environment/top.png'
import uname from '../assets/environment/unamewitha.png'
import whatis from '../assets/environment/whatis.png'
import whereis from '../assets/environment/whereis.png'
import who from '../assets/environment/who.png'
import whoami from '../assets/environment/whoami.png'


 

const EPractice = () => {
    const [text, setText] = useState("")
    const [img, setImg] = useState(initial)
    const [currQuestion, setCurrQuestion] = useState(1)
    const [ans, setAns] = useState("ls")
    const [popup, setPopup] = useState(false)

    let qt = 
    [
      "1. Let's see all the details of the ls command!",
      "2. How can we see all the information about the system we are using?",
      "3. Now check who you currently are on the machine",
      "4. Let's snoop! How would you see information on logged in users and their login times?",
      "5. Let's check environment variables",
      "6. Sometimes it's hard to find files using the file UI, let's find where the ls command exists quickly from the terminal!",
      "7. How do we quickly see a short summary of what the ls command does?",
      "8. What are all the current processes on the machine?",
      "9. How about all the processes for the user UserName?",
      "10. Let's try pinging google.com!",
      "11. Now that you have pinged Google, the only way to stop it is to terminate the current process. Go ahead and do that. (This will be a key stroke ctrl command, but since this practice does not take keystrokes as input please type out the command instead)",
      "12. Instead of terminating the pin process, what happens if you try suspending it? (This will be a key stroke ctrl command, but since this practice does not take keystrokes as input please type out the command instead)",
      "13. I wonder what the real time usage for this machine is?",
      "14. I wonder what the network configuration currently look like?",
      "15. Lets start the Firefox browser process",
      "16. You are currently running the firefox browser process using pgreg which has the id 27085, let's kill it!"
      
    ]
    const textRef = useRef()

    function restart(){
      setCurrQuestion(1)
      setImg(initial)
      setAns("man ls")
      setPopup(false)
    }


    function nextQuestion(){
      if(currQuestion + 1 <= 20){
        setImg(initial)
        setPopup(false)
        if(currQuestion === 1)
        {
          setAns("uname")
        }
        if(currQuestion === 2)
        {
          setAns("whoami")
        }
        if(currQuestion === 3)
        {
          setAns("who")
        }
        if(currQuestion === 4)
        {
          setAns("env")
        }
        if(currQuestion === 5)
        {
          setAns("whereis ls")
        }
        if(currQuestion === 6)
        {
          setAns("whatis ls")
        }
        if(currQuestion === 7)
        {
          setAns("ps aux")
        }
        if(currQuestion === 8)
        {
          setAns( "ps UserName")
        }
        if(currQuestion === 9)
        {
          setAns("ping google.com")
        }
        if(currQuestion === 10)
        {
          setAns("ctrl-c")
        }
        if(currQuestion === 11)
        {
          setAns("ctrl-z")
        }
        if(currQuestion === 12)
        {
          setAns("top")
        }
        if(currQuestion === 13)
        {
          setAns("ifconfig -a")
        }
        if(currQuestion === 14)
        {
          setAns("pgrep firefox")
        }
        if(currQuestion === 15)
        {
          setAns("kill 27085")
        }
        if(currQuestion === 16)
        {
          setAns("kill 27085")
        }
        
        setCurrQuestion(currQuestion + 1)
      }
    }

    useEffect(() =>{
        textRef.current.focus()
    },[])

    const handleChange = (event) =>{
        setText(event.target.value)
        textRef.current.value = text
    }

    const handleEnter = (e) =>{
        if(e.key === "Enter"){
          
          if(text === "man ls" && currQuestion === 1){
            setImg(man)
          }
          else if(text === "uname" && currQuestion === 2){
            setImg(uname)
          }
          else if(text === "whoami" && currQuestion === 3){
            setImg(whoami)
          }
          else if(text === "who" && currQuestion === 4){
            setImg(who)
         }
          else if(text === "env" && currQuestion === 5){
            setImg(env)
          }
          else if(text === "whereis ls" && currQuestion === 6){
            setImg(whereis)
          }
          else if(text === "whatis ls" && currQuestion === 7){
            setImg(whatis)
          }
          else if(text === "ps aux" && currQuestion === 8){
             setImg(psaux)
          }
          else if(text === "ps -fu UserName" && currQuestion === 9){
              setImg(psfu)
          }
          else if(text === "ping google.com" && currQuestion === 10){
            setImg(ping)
          }
          else if(text === "ctrl-c" && currQuestion === 11){
            setImg(ctrlc)
          }
          else if(text === "ctrl-z" && currQuestion === 12){
              setImg(ctrlz)
          }
          else if(text === "top" && currQuestion === 13){
            setImg(top)
          }
          else if(text === "ifconfig -a" && currQuestion === 14){
            setImg(ifconfig)
          }    
          else if(text === "pgrep firefoxp" && currQuestion === 15){
            setImg(pgrep)
       
          }
          else if(text === "kill 27085" && currQuestion === 16){
              setImg(kill)
          }        
          else{
            setPopup(true);
          }

          setText("")
        }
      }

      return (
        <>
          <Nav/>
          <div className ="FMPractice">
              <div className="grid_left">    
                  <h5 className="question_number">Question {currQuestion} out of 18</h5>
                  <div className='question_text'>
                      {qt[currQuestion - 1]}
                  </div>
                </div>
              <div className="grid_right"
                onClick={ e => {textRef.current.focus()}} >
                    <Popup className="wrong_ans"
                      trigger = {popup}
                      setTrigger={setPopup}
                      text={`Wrong command! Expected to input: ${ans}`}
                      />
                    <input className="terminal_input_cmd" 
                                type ="text" 
                                ref={textRef}
                                value={text}
                                onChange={handleChange}
                                onKeyDown={handleEnter}
                      />
                  <div className ="terminal">
                    <img src={img} ></img>
                  </div>
                  <button className="fm_next" onClick={nextQuestion}>Next</button>
                  <button className="fm_restart" onClick={restart}>Restart</button>
                  <Link className="fm_exit"to="/fileManage">Exit</Link>
            </div>
          </div>
        </>
      )
    }

export default EPractice