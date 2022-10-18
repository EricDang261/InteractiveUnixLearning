import React, {useState, useRef} from 'react'
import terminal from "../assets/empty_terminal.png"
import lsCmd from "../assets/ls_command.png"
import cdCmd from "../assets/cd_command.png"

const FMPractice = () => {
    const [image, setImg] = useState(terminal)
    const [text, setText] = useState("")
    const textRef = useRef()

    const handleChange = (event, cmd) =>{
        setText(event.target.value)
        textRef.current.value = text
        console.log(textRef.current.value)
        
    }

    const handleSubmit = (event, cmd, pic) =>{
        console.log(textRef.current.value)
        event.preventDefault();
        
        if (textRef.current.value ===cmd){
        setImg(pic)
        }
        else{
        alert("wrong command!")
        }

    }
  return (
    <div>FMPractice
        <input name="ls_cmd" ref={textRef} className="ls_input" type="text" value={text} onChange={handleChange} /> 
        <button className="ls_submit " onClick={(event) => {handleSubmit(event, "ls", lsCmd)}}> Submit </button>
        <img src={image}></img> 

        <br/>
        <input name="cd_cmd" ref={textRef} className="cd_input" type="text" value={text} onChange={handleChange}/>
        <button className="cd_submit " onClick={(event) => {handleSubmit(event, "cd Documents", cdCmd)}}> Submit </button>
        <img src={image}></img> 
        
    </div>
  )
}

export default FMPractice