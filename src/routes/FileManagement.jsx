import React, {useState} from 'react'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import "./FileManagement.css"
import { ManagementData } from '../components/ManagementData'
import tree from "../assets/Directory-Structure.png"
import Quiz from './Quiz'
import  {IntroMCQs}  from '../components/IntroMCQs'
import Q1Context from '../components/store/Quiz1Context'
import lsGif from "../assets/lsGif.gif"
import Popup from '../components/Popup'
import cdGif from "../assets/cdgif.gif"
import pwdGif from "../assets/pwdGif.gif"
import mkdirGif from "../assets/mkdirGif.gif"
import rmGif from "../assets/rmGif.gif"
import catGif from "../assets/catGif.gif"
import {Link} from 'react-router-dom'



const FileManagement = () => {

  const [imgLs, setLs] = useState(false)
  const [imgCd, setCd] = useState(false)
  const [imgPwd, setPwd] = useState(false)
  const [imgMkdir, setMkdir] = useState(false)
  const [imgRm, setRm] = useState(false)
  const [imgCat, setCat] = useState(false)


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
                <button className="ls_btn" onClick={()=> setLs(true)}>Click Me!</button>
                <Popup className= "ls_popup"
                    trigger={imgLs} 
                    setTrigger={setLs}
                    img ={lsGif}
                    />
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
            <button className="cd_btn" onClick={()=> setCd(true)}>Click Me!</button>
            <Popup className= "cd_popup"
                    trigger={imgCd} 
                    setTrigger={setCd}
                    img ={cdGif}
                    />
        </div>{/* end of cd_cmd div */}



      <div className="pwd_cmd">
            <h1> pwd command </h1>
            <p>
              cd commands( abbreviation of change directory) swiches the current directory to the specific directory <br />
              <b>pwd</b>
            </p>
            <button className="pwd_btn" onClick={()=> setPwd(true)}>Click Me!</button>
            <Popup className= "pwd_popup"
                    trigger={imgPwd} 
                    setTrigger={setPwd}
                    img ={pwdGif}
                    />
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
                <button className="mkdir_btn" onClick={()=> setMkdir(true)}>Click Me!</button>
                <Popup className= "mkdir_popup"
                        trigger={imgMkdir} 
                        setTrigger={setMkdir}
                        img ={mkdirGif}
                        />

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
                <button className="rm_btn" onClick={()=> setRm(true)}>Click Me!</button>
                <Popup className= "rm_popup"
                        trigger={imgRm} 
                        setTrigger={setRm}
                        img ={rmGif}
                        />

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
                
        </div>{/* end of cp_cmd div */}

        <div className="cat_cmd">
            <h1> cat command </h1>
            <p>
            cat command ( abbreviation for concatenate ) is toouput a file or standard input.  This command is often used to display the contents of a file, or to link several files together, 
            or to read and display content from standard input. It is often used in conjunction with redirection symbols <br />
              <b> cat option  </b>
            </p>

            <table>
                  <tr>
                    <th> Common Parameters</th>
                    <th> Description </th>
                  </tr>

                  <tr>
                    <td> -A </td>
                    <td> --show all Equivalent to -vET </td>
                  </tr>

                  <tr>
                    <td> -n </td>
                    <td> --number For all the output line numbers, starting from 1 for all output line numbers</td>
                  </tr>
                
                  </table>

            <p>
              Common Used Examples: 
              <ul>
                <li> View a single file <b> $cat filename </b> : It will show content of given filename </li>
                <li> View multiple files <b> $cat file1 file2 </b>: This will show the content of file1 and file2. </li>
                <li> View contents of a file preceding with line numbers <b> $cat -n filename </b>: will show content with line number</li> {/* example will be in geekforgeeks website https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/} */}
                <li> Create a file  <b> $ cat {`>`} newfile</b>: create a file named newfile</li>
                <li> Copy the contents of one file to another file. <b> $cat [filename-whose-contents-is-to-be-copied] {`>`}[destination-filename] </b> The content will be copied in destination file</li>
                <li> Append the content will be copied in destination file <b> $cat file1 {`>`} file2</b>: Will append the contents of one file to the end of another file </li>
                <li> Display content in reverse order using tac command <b>$tac filename </b>:  display content in reverse order  </li>
                <li> Highlight the end of line <b>$cat -E "filename"</b>: highlight the end of line </li>
                <li> Cat command if the file has a lot of content and can't fit in the terminal <b>$cat "filename" | more</b>: Will show that much content, which could fit in terminal and will ask to show more. </li>
                <li> Cat command to merge the contents of multiple files <b>$cat "filename1" "filename2" "filename3" {`>`} "merged_filename" </b>:  merge the contents of file in respective order and will insert that content in "merged_filename". </li>
                <li> Display the content of all text files in the folder <b> $cat *.txt</b>: show the content of all text files present in the folder.</li>
                <li> Write in an already existing file <b>  $cat {`>>`} geeks.txt The newly added text.</b>: append the text "The newly added text." to the end of the file. </li>
              </ul>
            </p>
            <button className="cat_btn" onClick={()=> setCat(true)}>Click Me!</button>
                  <Popup className= "cat_popup"
                          trigger={imgCat} 
                          setTrigger={setCat}
                          img ={catGif}
                          />


        </div>{/* end of cat_cmd div */}
        <Link to="/fileManagePractice">PRACTICE HERE!</Link>

      </div>
      <Footer/>
    </div>
  )
}

export default FileManagement
