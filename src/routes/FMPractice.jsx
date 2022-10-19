import React, {useState, useEffect, useRef} from 'react'
import './FMPractice.css'
import terminal from "../assets/empty_terminal.png"
import lsCmd from "../assets/ls_command.png"
import cdCmd from "../assets/cd_command.png"

const FMPractice = () => {
    const [text, setText] = useState("")
    const [textOutput, setTextOutput] = useState("")
    const [img, setImg] = useState(terminal)
    const textRef = useRef()


    useEffect(() =>{
        textRef.current.focus()
    },[])

    const handleChange = (event) =>{
        setText(event.target.value)
        textRef.current.value = text
        console.log(textRef.current.value)
        
    }

    const handleEnter = (e) =>{
        if(e.key === "Enter"){
          let newTextOutput =""
          newTextOutput = textOutput + "\n" + "$ " + text + "\n"
          switch(text){
            case "ls":
             newTextOutput += "List of projects"
              setImg(lsCmd)
              break;
            case "cd":
              setImg(cdCmd)
            case "pwd":
              newTextOutput += "Your are on my cool terminal site!"
              break;
            case "clear":
                setImg(terminal)
                break;

            default:
              newTextOutput += "Wrong or unknown command"
          }
          setTextOutput(newTextOutput)
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
      <div className ="terminal">
        {textOutput}
        <img src={img} ></img>
      </div>
    </div>
  )
}

export default FMPractice