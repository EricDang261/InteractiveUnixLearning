import React, {useState, useRef} from 'react'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import "./FileManagement.css"
import { ManagementData } from '../components/ManagementData'
import tree from "../assets/Directory-Structure.png"
import terminal from "../assets/empty_terminal.png"
import lsCmd from "../assets/ls_command.png"
import error_msg from "../assets/error_msg.png"



const FileManagement = () => {
  const [image, setImg] = useState(terminal)
  const [text, setText] = useState("")
  const textRef = useRef()

  const handleChange = (event) =>{
    setText(event.target.value)
    textRef.current.value = text
    console.log(textRef.current.value)
    
  }

  const handleSubmit = (event) =>{
    console.log(textRef.current.value)
    event.preventDefault();
    
    if (textRef.current.value ==="ls"){
      setImg(lsCmd)
    }
    else{
      alert("wrong command!")
    }
    
  }

  return (
    <div className="management">
      <SideNav page={ManagementData}/>
      <div className="management_body">
        <h1>File Management</h1>
        {/* <div className="directory_info">
          <h3>Directory Structure</h3>
          <p className="file_system">
            The directory structure is a multi-level heirarchy often called a directory tree.
            All leaves(end nodes) and branches(middle nodes) stem from a singlular root. 
            <img className="directory_tree_img" src={tree} alt="file directory tree"></img>
            <p className="tree_img_resource">https://www.linuxyogi.com/linux-directory-structure-file-system-hierarchy/</p>
            <h5>Types of Files:</h5>
            <p>ordinary, directories, special/device files</p>
            <h5>File paths</h5>
            </p>
        </div> */}
        <div className="ls_cmd">
            <h1>LS Command</h1>
            <label>Hello:</label>
            <input name="command" ref={textRef} className="ls_input" type="text" value={text} onChange={handleChange} /> 
            <button className="ls_submit " onClick={handleSubmit}> Submit </button>
            <img src={image}></img>
            
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FileManagement