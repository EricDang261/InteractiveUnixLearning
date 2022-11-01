import React, {useState, useEffect, useRef} from 'react'
import {Link} from "react-router-dom"
import './FMPractice.css'

import Nav from '../components/utility/Nav'
import Popup from '../components/utility/Popup'

import initial from '../assets/fm/initial.png'


 

const EPractice = () => {
    const [text, setText] = useState("")
    const [img, setImg] = useState(initial)
    const [currQuestion, setCurrQuestion] = useState(1)
    const [ans, setAns] = useState("ls")
    const [popup, setPopup] = useState(false)

    let qt = 
    [
      "1. Let's see the details of the ls command!",
      "2. How can we see all the information about the system we are using?",
      "3. Now check who you currently are on the machine",
      "4. Let's snoop! How would you see information on logged in users and their login times?",
      "5. You're in a pickle and need to quickly switch to another user",
      "6. Using the UI to change your password can be a pain. Let's be lazy and change it from the terminal!",
      "7. Let's check environment variables",
      "8. Sometimes it's hard to find files using the file UI, let's find where the ls command exists quickly from the terminal!",
      "9. How do we quickly see a short summary of what a command does?",
      "10. What are all the current processes on the machine?",
      "11. How about all the processes for the user [insert]?",
      "12. Let's terminate the current process",
      "13. Let's suspend a job",
      "14. Now lets run the suspended job in the background",
      "15. How about running the suspended job in the foreground?",
      "16. We want to run the [insert] command while leaving the terminal free",
      "17. Let's kill the firefox process!",
      "18. I wonder what the real time usage for this machine is?",
      "19. I wonder what the network configuration currently look like?",
      "20. Let's try pining google.com!"
      
    ]
    const textRef = useRef()

    function restart(){
      setCurrQuestion(1)
      setImg(initial)
      setAns("ls")
      setPopup(false)
    }


    function nextQuestion(){
      if(currQuestion + 1 <= 20){
        setImg(initial)
        
        if(currQuestion === 1)
        {
          setAns("ls -la")
        }
        if(currQuestion === 2)
        {
          setAns("cd virtualDesktop")
        }
        if(currQuestion === 3)
        {
          setAns("pwd")
        }
        if(currQuestion === 4)
        {
          setAns("touch filename.txt")
        }
        if(currQuestion === 5)
        {
          setAns("echo 'aloha' >filename.txt")
        }
        if(currQuestion === 6)
        {
          setAns("cat filename.txt")
        }
        if(currQuestion === 7)
        {
          setAns("cd ..; touch test.txt")
        }
        if(currQuestion === 8)
        {
          setAns( "cp test.txt virtualDesktop; ls; cd virtualDeskop; echo 'this line should be merged' > test.txt; cat `filename.txt` `test.txt` > `merged_fn.txt`  ")
        }
        if(currQuestion === 9)
        {
          setAns("cat merged_fn")
        }
        if(currQuestion === 10)
        {
          setAns("ls")
        }
        if(currQuestion === 11)
        {
          setAns("mv merged_fn ../")
        }
        if(currQuestion === 12)
        {
          setAns("cd ..; ls")
        }
        if(currQuestion === 13)
        {
          setAns("rm virtualDesktop")
        }
        if(currQuestion === 14)
        {
          setAns("rm -r virtualDesktop")
        }
        if(currQuestion === 15)
        {
          setAns("ls")
        }
        if(currQuestion === 16)
        {
          setAns("rm test.txt merged_fn.txt; ls")
        }
        if(currQuestion === 17)
        {
          setAns("whoami")
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
          
          if(text === "ls" && currQuestion === 1){
        //    setImg(ls)
          }
          else if(text === "ls-la" && currQuestion === 2){
        //    setImg(lswithla)
          }
          else if(text === "cd virtualDesktop" && currQuestion === 3){
            // setImg(cdvirtualdesktop)
          }
          else if(text === "pwd" && currQuestion === 4){
            // setImg(pwd)
          }
          else if(text === "touch filename.txt" && currQuestion === 5){
            // setImg(touch)
         }
          else if(text === "echo 'aloha' >filename.txt" && currQuestion === 6){
            // setImg(echo)
          }
          else if(text === "cat filename.txt" && currQuestion === 7){
            // setImg(appendcontentwithecho)
          }
          else if(text === "cd ..; touch test.txt" && currQuestion === 8){
            //  setImg(cdandtouch)
          }
          else if(text === "cp test.txt virtualDesktop;cd virtualDeskop; echo 'this line should be merged' > test.txt; cat `filename.txt` `test.txt` > `merged_fn.txt`" && currQuestion === 9){
            //   setImg(catmerge)
          }
          else if(text === "cat merged_fn" && currQuestion === 10){
            // setImg(catseethecontent)
          }
          else if(text === "ls" && currQuestion === 11){
            // setImg(ls_after_merge)
          }
          else if(text === "mv merged_fn ../" && currQuestion === 12){
            //   setImg(mv)
          }
          else if(text === "cd ..; ls" && currQuestion === 13){
            // setImg(cdparentandls)
          }
          else if(text === "rm virtualDesktop" && currQuestion === 14){
            // setImg(rmfail)
          }    
          else if(text === "rm -r virtualDesktop" && currQuestion === 15){
            // setImg(rmwithr)
       
          }
          else if(text === "ls" && currQuestion === 16){
            //   setImg(lsafterrm)
          }        
          else if(text === "rm test.txt merged_fn.txt; ls" && currQuestion === 17){
            // setImg(rmandls)
          }     
          else if(text === "whoami" && currQuestion === 18){
        
          }    
          else{
            alert("Wrong command! Expected to input: " + ans);
          }

          setText("")
        }
      }

      return (
        <div className ="FMPractice">
            <div className="grid_left">    
                <h5 className="question_number">Question {currQuestion} out of 18</h5>
                <div className='question_text'>
                    {qt[currQuestion - 1]}
                </div>
              </div>
            <div className="grid_right"
              onClick={ e => {textRef.current.focus()}} >

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
                <Link className="fm_exit"to="/environ">Exit</Link>
          </div>
        </div>
      )
    }

export default EPractice