import React, {useState, useEffect, useRef} from 'react'
import {Link} from "react-router-dom"
import './FMPractice.css'
import terminal from "../assets/empty_terminal.png"
import lsCmd from "../assets/ls_command.png"
import cdCmd from "../assets/cd_command.png"
import catCmd from "../assets/readFile_cmd.png"
import catOverWriteCmd from "../assets/cat1_cmd.png"
import catAppendCmd from "../assets/cat2_cmd.png"
import cpCmd from "../assets/cp_cmd.png"
import lsLongCmd from "../assets/ls_long_cmd.png"
import manCmd from "../assets/man_cmd.png"
import mkdirCmd from "../assets/mkdir_cmd.png"
import mvCmd from "../assets/mv_cmd.png"
import mvRenameCmd from "../assets/mv_rename.png"
import rmCmd from "../assets/rm_file.png"
import rmDirCmd from "../assets/rmdir_cmd.png"
import  wcCmd from "../assets/wc_cmd.png"
import whoamiCmd from "../assets/whoami_cmd.png"


const FMPractice = () => {
    const [text, setText] = useState("")
    const [img, setImg] = useState(terminal)
    const [currQuestion, setCurrQuestion] = useState(1)
    const [ans, setAns] = useState("ls")
    let qt = 
    [
      "1. Let's try to see what are files in the current directory ",
      "2. Okay, now you see what are files in the current directory! Want to know more? (hint: use -l flag) " ,
      "3. Now let's visit the Documents folder! ",
      "4. Good Job! Now try pwd command determine what is your location",
      "5. There is a Message file here. Let's explore what is inside? (hmm treasure map? maybe???!!) ( hint: using cat cmd)",
      "6. Yahoo!, you have found the treasure map file1. Now clone it to your own map named file2 ( hint using cat cmd with >) ",
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


    function nextQuestion(){
      if(currQuestion + 1 <= 16){
        setImg(terminal)
        
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
            setImg(lsCmd)
          }
          else if(text === "ls -l" && currQuestion === 2){
            setImg(lsLongCmd)
          }
          else if(text === "cd Documents" && currQuestion === 3){
            setImg(cdCmd)
          }
          else if(text === "pwd" && currQuestion === 4){
            // setImg(pwdCmd)
          }
          else if(text === "cat Message" && currQuestion === 5){
            setImg(catCmd)
         }
          else if(text === "cat file1 > file2" && currQuestion === 6){
             setImg(catOverWriteCmd)
          }
          else if(text === "cat file1 >> file2" && currQuestion === 7){
             setImg(catAppendCmd )
          }
          else if(text === "cp Message copyMessage" && currQuestion === 8){
             setImg(cpCmd)
          }
          else if(text === "man" && currQuestion === 9){
            setImg(manCmd)
          }
          else if(text === "mkdir directory1" && currQuestion === 10){
            setImg(mkdirCmd)
          }
          else if(text === "mv file1 /home/kali/Pictures" && currQuestion === 11){
            setImg(mvCmd)
          }
          else if(text === "mv file1 newFileName" && currQuestion === 12){
            setImg(mvRenameCmd)
         }    
          else if(text === "rm file1" && currQuestion === 13){
            setImg(rmCmd)
          }
          else if(text === "rmdir directory1" && currQuestion === 14){
            setImg(rmDirCmd)
          }        
          else if(text === "wc Message" && currQuestion === 15){
            setImg(wcCmd)
          }     
          else if(text === "whoami" && currQuestion === 16){
              setImg(whoamiCmd)
          }    
          else{
            alert("Wrong command! Expected to input: " + ans);
          }

          setText("")
        }
      }

  return (
    <div className ="FMPractice"
          onClick={ e => {textRef.current.focus()}}>
      <input className="terminal_input_cmd" 
              type ="text" 
              ref={textRef}
              value={text}
              onChange={handleChange}
              onKeyDown={handleEnter}
      />
      <h5 className="question_numberkk">Question {currQuestion} out of 15</h5>
       <div className='practice_question'>
          {qt[currQuestion -1 ]}
      </div>
      <div className ="terminal">
        <img src={img} ></img>
      </div>
      <button className="fm_next"onClick={nextQuestion}>Next</button>
      <Link className="fm_exit"to="/fileManage">Exit</Link>
    </div>
  )
}

export default FMPractice