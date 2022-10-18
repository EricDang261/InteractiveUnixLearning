import React, {useState, useRef, createContext} from 'react'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import "./FileManagement.css"
import { ManagementData } from '../components/ManagementData'
import tree from "../assets/Directory-Structure.png"
import terminal from "../assets/empty_terminal.png"
import lsCmd from "../assets/ls_command.png"
import error_msg from "../assets/error_msg.png"
import Quiz from './Quiz'
import  {IntroMCQs}  from '../components/IntroMCQs'
import Q1Context from '../components/store/Quiz1Context'



const FileManagement = () => {


  const [image, setImg] = useState(terminal)
  const [text, setText] = useState("")
  const textRef = useRef()

  const handleChange = (event) =>{
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
    <div className="management">
      <SideNav page={ManagementData}/>
      <div className="management_body">
        <h1>File Management</h1>
        <div className="directory_info">
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
        </div>
        <div className="ls_cmd">
            <h1>ls command</h1>
              <p>
                ls commands (abbreviation of list) list out all of the files in the directed folder <br />  
                <b> ls [option] </b>
              </p>

                <table>
                  <tr>
                    <th> Common Parameters</th>
                    <th> Description </th>
                  </tr>

                  <tr>
                    <td> -a </td>
                    <td> -all list all files in the directory, include hidden files beginning with . </td>
                  </tr>

                  <tr>
                    <td> -l </td>
                    <td> In addition to the file name, the file permissions, owner, file size, etc. are listed in detail.</td>
                  </tr>

                  <tr>
                    <td> -d </td>
                    <td> -directory displays the directory as a file instead of the file in it </td>
                  </tr>
                </table>

            <input name="command" ref={textRef} className="ls_input" type="text" value={text} onChange={handleChange} /> 
            <button className="ls_submit " onClick={(event) => {handleSubmit(event, "ls", lsCmd)}}> Submit </button>
            <img src={image}></img>
        </div> {/* end of ls_cmd div */}

        <div className="cd_cmd">
            <h1> cd command </h1>
            <p>
              cd commands( abbreviation of change directory) swiches the current directory to the specific directory <br />
              <b>cd [directory]</b>
            </p>

            <p>
              Some special cases:
              <ol>
                <li> <b> cd / </b>: from the current directory enter into the system root directory </li>
                <li> <b> cd .. </b>: from the current directory enter into the parent directory </li>
                <li> <b> cd ~ </b>:  Entering the current user's home directory from the current directory </li>
                <li> <b> cd - </b>:  from the current directory into the previous directory </li>
              </ol>
            </p>
        </div>{/* end of cd_cmd div */}



      <div className="pwd_cmd">
            <h1> pwd command </h1>
            <p>
              cd commands( abbreviation of change directory) swiches the current directory to the specific directory <br />
              <b>pwd</b>
            </p>

        </div>{/* end of pwd_cmd div */}


      <div className="mkdir_cmd">
            <h1> mkdir command </h1>
            <p>
              mkdir command ( abbreviation for make directory) create a directory from the current directory <br />
              <b>mkdir [options] directory </b>
            </p>

            <table>
                  <tr>
                    <th> Common Parameters</th>
                    <th> Description </th>
                  </tr>

                  <tr>
                    <td> -m </td>
                    <td> Set permision </td>
                  </tr>

                  <tr>
                    <td> -p </td>
                    <td> Create missing intermediate path name direciries. if the <b>-p</b> is not specified,
                    the parent directory of each-newly created directory must already exist.
                    </td>
                  </tr>

                </table>
        </div>{/* end of mkdir_cmd div */}

        <div className="rm_cmd">
            <h1> rm command </h1>
            <p>
            rm command ( short for remove) deletes one or more files or directories in a directory. It can also delete a directory and all files and subdirectories under it. <br /> <br />
            When using rm command be careful of what file or directory are going to be deleted 
            Be careful when using rm commands. Especially for new user, the entire system might be destroyed with this command 
            (for example, rm * -rf under / (root directory)). Therefore, be sure and confirm which directory we are in, and what we want to delete. <br />

              <b>rm [options] files or directory </b>
            </p>

            <table>
                  <tr>
                    <th> Common Parameters</th>
                    <th> Description </th>
                  </tr>

                  <tr>
                    <td> -f </td>
                    <td> --force Ignore nonexistent files and warning </td>
                  </tr>

                  <tr>
                    <td> -i </td>
                    <td> Make an interactive deleteion </td>
                  </tr>

                  <tr>
                    <td> -r </td>
                    <td> Recursively delete all directories and subdirectories listed in the paramemter </td>
                  </tr>

                </table>
        </div>{/* end of rm_cmd div */}

        <div className="cp_cmd">
            <h1> cp command </h1>
            <p>
            cp command ( short for copy) is a common used commands. This commands used to copy files or directories. <br />
              <b>
                cp [options] source file directory <br />
                cp [options] -t directory source file
              </b>
            </p>

            <table>
                  <tr>
                    <th> Common Parameters</th>
                    <th> Description </th>
                  </tr>

                  <tr>
                    <td> -f </td>
                    <td> --force copy files or directories  </td>
                  </tr>

                  <tr>
                    <td> -i </td>
                    <td> ask before overwritting the file </td>
                  </tr>

                  <tr>
                    <td> -n </td>
                    <td> Do not overwritting exisiting files ( disable -i flag) </td>
                  </tr>

                  <tr>
                    <td> -u </td>
                    <td> --update The file will be copied only when the modiciation time of the souce file is more than the destination
                      file, or the corresponding destination file does not exist
                    </td>
                  </tr>

                </table>
        </div>{/* end of mv_cmd div */}


        
        





      </div>
      <Footer/>
    </div>
  )
}

export default FileManagement