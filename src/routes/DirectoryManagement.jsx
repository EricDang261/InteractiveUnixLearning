import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import "./DirectoryManagement.css"
import SideNav from '../components/sidenav/SideNav'
import Footer from '../components/utility/Footer'
import Progress from '../components/utility/Progress'
import {dmData} from "../components/sidenav/dmData"
import tree from "../assets/dm/Directory-Structure.png"
import Quiz from './Quiz'

const DirectoryManagement = () => {
  const [qData, setQData] = useState()
  const [loading, SetLoading] = useState(true)

  useEffect(()=>{
    fetch("./dmMC.json")
    .then(res => res.json())
    .then(data => {
      setQData(Object.keys(data).map(function(value){return data[value]}))
      console.log(qData)
      SetLoading(false);  
    })
  }, [])

  if(loading) return <h1>Loading</h1>
  return (
    <div className="dirM">
        <SideNav className="dirM_nav" page={dmData}/>
        <div className="dirM_body">
            <h1 className='dirM_title'>Directory Management</h1>
            <br/>
            <p className="dirM_intro"> In this lesson, you will learn about the directory structure and the different commands that can be used for it.</p>
            <br/>
            <div className="break">============</div>
            <div className="dirM_struct">
                <h3 className="dirM_struct_title">Directory Structure</h3>
                <p>The directory structure is a multi-level heirarchy often called a directory tree. All leaves(end nodes) and branches(middle nodes) stem from a singlular root.</p>
                <img className="dirM_heirarchy" src={tree}></img>
                <p className="tree_img_resource">https://www.linuxyogi.com/linux-directory-structure-file-system-hierarchy/</p>
                <p>You can think of the directory structure as a folder that holds files. An important thing to note is that everything in Unix is a file and that includes directories!</p>
            </div>
            <br/>
            <div className="break">============</div>
            <div className="dirM_pwd">
                <h3 className="pwd_title">What is pwd?</h3>
                <p>The <span>pwd</span> command is used for checking what directory you are currently in. The command stands for "print working directory" and prints out the directory name onto the terminal. Simply type <span>pwd</span> by itself into the terminal to use this command!</p>
            </div>
            <div className="break">============</div>
            <div className="dirM_cd">
                <h3 className="cd_title">What is cd?</h3>
                <p>The <span>cd</span> command is used for traversing through the directory structure. The command stands for "change directory". There are a couple of arguments that the command can take that will navigate you to specific destinations in certain ways:</p>
                <br/>
                <table className="cd_ex">
                    <tr>
                        <th>Command</th>
                        <th>What it does</th>
                    </tr>
                    <tr>
                        <td>cd</td>
                        <td>The command by itself will always take you back to your home directory.</td>
                    </tr>
                    <tr>
                        <td>cd dirName</td>
                        <td>This will navigate you to the specified directory as long as it is one branch lower in the directory tree (listed within your current directory)</td>
                    </tr>
                    <tr>
                        <td>cd path/dirName</td>
                        <td>This type of traversing uses the relative path of the directory. The relative path starts from the current directory continues down the branches of the tree (other directories) until the target.</td>
                    </tr>
                    <tr>
                        <td>cd fullPath/dirName</td>
                        <td>This type of traversing uses the absolute path os the directory. It starts form the root directory and includes all subsequent directories.</td>
                    </tr>
                    <tr>
                        <td>cd ..</td>
                        <td>This is like a back button. It will navigate you back to the previous (parent) directory. Combining it with / and more dots will navigate you back more directories.</td>
                    </tr>
                </table>
            </div>
            <div className="break">============</div>
            <div className="dirM_mkdir">
                <h3 className="mkdir_title">What is mkdir?</h3>
                <p>The <span>mkdir</span> command  creates a seperate empty directory within the current directory. The command stands for "make directory". The command is followed by the name of the new directory.</p>
                <p className="mkdir_ex"><span>mkdir</span> newDirName</p>
            </div>
            <div className="break">============</div>
            <div className="dirM_rmdir">
                <h3 className="rmdir_title">What is rmdir?</h3>
                <p>The <span>rmdir</span> command removes a directory only if the directory is empty. The command stands for "remove directory". The command is followed by the name directory to be remove.</p>
                <p className="rmdir_ex"><span>rmdir</span> dirName</p>
            </div>
            <div className="break">============</div>
            <div className="dirM_mv">
                <h3 className="mv_title">What is mv?</h3>
                <p>The <span>mv</span> command can be used to rename or move a directory. The commands stands for "move". When the second argument is a path, the command
                interprets it as a move operation. When  the second argument is not a path, it considers is a renaming operation.</p>
                <table>
                    <tr>
                        <th>Command</th>
                        <th>What is does</th>
                    </tr>
                    <tr>
                        <td>mv dirName /path/dest</td>
                        <td>Moves the directory to the specified destination</td>
                    </tr>
                    <tr> 
                         <td>mv dirName newDirName</td>
                        <td>Renames the directory to the specified new name</td>
                    </tr>
                </table>
            </div>
            <div className="break">============</div>
            <div className="dirM_du">
                <h3 className="du_title">What is du -sh ~?</h3>
                <p>The <span>du -sh ~</span> command tells you the disk usage for your home directory. The ~ can also be replaced with directory or file names. Realtive and absolute paths can also be used. The <span>s</span> flag stands for "summary" and the <span>h</span> tag stands for "human-readable.</p>
            </div>
        </div>
        <div className="break">============</div>
        <Link to="/DMPractice" className="dm_practice">PRACTICE HERE!</Link>
        <div className="break">============</div>
        <div className="dm_quiz">
            <h1 className= "dm_quiz_title">End of Lesson Quiz</h1>
            <Quiz data={qData}/>
        </div>
        <Progress/>
        <Footer/>
        
    </div>
  )
}

export default DirectoryManagement