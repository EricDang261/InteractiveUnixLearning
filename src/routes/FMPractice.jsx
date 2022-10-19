import React, {useState, useEffect, useRef} from 'react'
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
    const [currQuestion, setQuestion] = useState(1)
    const [ans, setAns] = useState("ls")
    const textRef = useRef()


    function nextQuestion(){
      if(currQuestion + 1 <= 16){
        setImg(terminal)
       // if(currQuestion === 2)
        // switch(currQuestion){
        //   case 1:
        //     break;
        //   case 2: 
        //     setAns("ls -l")
        //     break;
        //   case 3: 
        //     setAns("cd Documents")
        //     break;
        //   case 4: 
        //     setAns("pwd")
        //     break;
        //   case 5: 
        //     setAns("cat Message")
        //     break;
        //   case 6: 
        //     setAns("cat file1 > file2")
        //     break;
        //   case 7: 
        //     setAns("cat file1 >> file2")
        //     break;
        //   case 8: 
        //     setAns("cp Message copyMessage")
        //     break;
        //   case 9: 
        //     setAns("man")
        //     break;
        //   case 10: 
        //     setAns("mkdir directory1")
        //     break;
        //   case 11: 
        //     setAns("mv file1 /home/kali/Pictures")
        //     break;
        //   case 12: 
        //     setAns("mv file1 newFileName")
        //     break;
        //   case 13: 
        //     setAns("rm file1")
        //     break;
        //   case 14: 
        //     setAns("rmdir directory1")
        //     break;
        //   case 15: 
        //     setAns("wc Message")
        //     break;
        //   case 16: 
        //     setAns("whoami")
        //     break;
        //   default:
        //     setAns("")
        // }
        setQuestion(currQuestion + 1)

      }
    }


    useEffect(() =>{
        textRef.current.focus()
    },[])

    const handleChange = (event) =>{
        setText(event.target.value)
        textRef.current.value = text
       // console.log(textRef.current.value)
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
      <h1 className="question_number">Question {currQuestion} out of 15</h1>
      <div className ="terminal">
        <img src={img} ></img>
      </div>
      <button onClick={nextQuestion}>Next</button>
    </div>
  )
}

export default FMPractice