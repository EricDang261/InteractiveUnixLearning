import React, {useState, useEffect, useRef} from 'react'
import {Link} from "react-router-dom"
import './FMPractice.css'

import Nav from '../components/utility/Nav'
import Popup from '../components/utility/Popup'

import initial from '../assets/fm/initial.png'

        // pwd,
        // ls, 
        // cdvirtualdesktop, 
        // appendcontentwithecho,
        // catmerge,
        // cdparentandls,
        // touch, 
        // rmfail,
        // rmandls, 
        // rmwithr,
        // mv,
        // lswithla,
        // lsafterrm,
        // ls_after_merge,
        // lsaftercreatingvirtualdesktop,
        // echo,
        // cdandtouch,
        // cdandls,
        // catseethecontent
 

const FMPractice = () => {
    const [text, setText] = useState("")
    const [img, setImg] = useState(initial)
    const [currQuestion, setCurrQuestion] = useState(1)
    const [ans, setAns] = useState("ls")
    const [popup, setPopup] = useState(false)

    let qt = 
    [
      "1. Let's try to see what are files in the current directory ",
      "2. Okay, now you see what are files in the current directory! Do you Want to know more? (hint: use -l flag) " ,
      "3. Now let's visit the Documents folder! ",
      "4. Good Job! Now try pwd command determine what is your location",
      "5. There is a Message file here. Let's explore what is inside? ( hint: using cat cmd)",
      "6. Yahoo!, you have found the treasure map named file1. Now overwrite the content of file1 into file2 ( hint using cat cmd with >) ",
      "7. Append the file1 to file2 ",
      "8. Copy the file name Message to a new file and named it as copyMessage",
      "9. Try man cmd for the manual",
      "10. Now make a new directory which is named newFileName",
      "11. Alright now move file1 into /home/kali/Pictures",
      "12. Rename the file1 into newFileName",
      "13. Remove file1",
      "14. Remove a directory named directory1 ",
      "15. Now try to count the number of lines, words, and bytes in the file Message (hint: using wc cmd)",
      "16. Good job! You have have one question left. Try to discovery who you are by printting the your usename.",
    ]
    const textRef = useRef()

    function restart(){
      setCurrQuestion(1)
      setImg(initial)
      setAns("pwd")
      setPopup(false)
    }


    function nextQuestion(){
      if(currQuestion + 1 <= 16){
        setImg(initial)
        
        if(currQuestion === 1)
        {
          setAns("ls -l")
        }
        if(currQuestion === 2)
        {
          setAns("cd Documents")
        }
        if(currQuestion === 3)
        {
          setAns("pwd")
        }
        if(currQuestion === 4)
        {
          setAns("cat Message")
        }
        if(currQuestion === 5)
        {
          setAns("cat file1 > file2")
        }
        if(currQuestion === 6)
        {
          setAns("cat file1 >> file2")
        }
        if(currQuestion === 7)
        {
          setAns("cp Message copyMessage")
        }
        if(currQuestion === 8)
        {
          setAns("man")
        }
        if(currQuestion === 10)
        {
          setAns("mkdir directory1")
        }
        if(currQuestion === 11)
        {
          setAns("mv file1 /home/kali/Pictures")
        }
        if(currQuestion === 12)
        {
          setAns("mv file1 newFileName")
        }
        if(currQuestion === 13)
        {
          setAns("rm file1")
        }
        if(currQuestion === 14)
        {
          setAns("rmdir directory1")
        }
        if(currQuestion === 15)
        {
          setAns("wc Message")
        }
        if(currQuestion === 16)
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
           
          }
          else if(text === "ls -l" && currQuestion === 2){
           
          }
          else if(text === "cd Documents" && currQuestion === 3){
 
          }
          else if(text === "pwd" && currQuestion === 4){
            
          }
          else if(text === "cat Message" && currQuestion === 5){
            
         }
          else if(text === "cat file1 > file2" && currQuestion === 6){
          
          }
          else if(text === "cat file1 >> file2" && currQuestion === 7){
         
          }
          else if(text === "cp Message copyMessage" && currQuestion === 8){
             
          }
          else if(text === "man" && currQuestion === 9){
            // setImg(manCmd)
          }
          else if(text === "mkdir directory1" && currQuestion === 10){
     
          }
          else if(text === "mv file1 /home/kali/Pictures" && currQuestion === 11){
       
          }
          else if(text === "mv file1 newFileName" && currQuestion === 12){
       
         }    
          else if(text === "rm file1" && currQuestion === 13){
       
          }
          else if(text === "rmdir directory1" && currQuestion === 14){
      
          }        
          else if(text === "wc Message" && currQuestion === 15){
            
          }     
          else if(text === "whoami" && currQuestion === 16){
        
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
                <h5 className="question_number">Question {currQuestion} out of 20</h5>
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
                <Link className="fm_exit"to="/fileManage">Exit</Link>
          </div>
        </div>
      )
    }

export default FMPractice