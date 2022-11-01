import React, {useState, useEffect} from 'react'
import {
  SideNav,
  Footer,
  fmData, 
  FM_MCQs,
  Checkbox
} from '../components'

import Progress from "../components/utility/Progress"
import Quiz from './Quiz'

import {FaHandPointRight} from "react-icons/fa"
import {SiAzuredataexplorer} from "react-icons/si"
import "./fileManagement.css"

const FileManagement = () => {
  const [qData, setQData] = useState(FM_MCQs)
  const [loading, SetLoading] = useState(true)
 

  useEffect(()=>{
    fetch("./fmMC.json")
    .then(res => res.json())
    .then(data => {
      setQData(Object.keys(data).map(function(value){return data[value]}))
      SetLoading(false);  
    })
  }, [])

  if(loading) return <h1>Loading</h1>

  return (
    <div className="fm_container">
      <SideNav className="fm_nav" page={fmData}/>
      <div className="fm_body">
          <h1 className='fm_title'>File Management</h1>  <br/>
          <p className="fm_intro">
             You will look so cool with your friends when you are able to flex around with file-commands in the terminal. YES!!
             I am not kidding!! In fact, most of the operations are performed on files. After this ultimate lesson, you will 
             become an expert. Are you ready? Let's go <FaHandPointRight style={{color: "white"}} />
          </p>
          <div className="break">============</div>


          <div className="file_type">
              <h3 className="cmd_title">File Types </h3>
              <p>
                In Unix, we will mostly see these 3 basic types of files: <br />
                <strong> Ordinary Files - </strong> contains data, text, or program instructions. <br/>
                <strong> Special Files - </strong> provide access to hardware, or they could be aliases or shortcuts 
                and enable you to access a single file using different names. <br/>
                <strong> Directories - </strong> As you know, directories are folders which stores both ordinary files and special files.
              </p>
          </div> {/*end of file_type*/ }
          <br/>
          <div className="break">============</div>

          <div className='echo_cmd'>
            <h3 className="cmd_title">echo command</h3>
          <p>
            Let's start off with one of the most basic and common used command <span>echo</span>. This
            command in linux is used to display line of text or string that are passed as an argument.
          </p>
          <p className='cmd_exe'> <span> echo [option] [string]</span> </p>
          <p>To enable the interpretation of backslash escapes in a string. You will need to set -e as a flag to the command </p>

          <div className='example'>
            <p>Let's see some examples: </p>
               <p>
                To delete all the spaces in between the text <br/>
                <span>$echo -e "hello \bworld \b!"</span> &emsp; {`=>`} output: hellworld! <br/>
                To create new line <br/>
                <span>$echo -e "\nHello \nWorld \n!"</span> &emsp; {`=>`} output: <br/> hello<br/>world<br/>!<br/>
                To have a sound alert return at the end of the string or text <br/>
                <span>$echo -e "\aHello World</span> <br/>
                Last but not least, to print all files/folders  <br/>
                <span>$echo * </span> <br/>
                <SiAzuredataexplorer/> !!! And there are so many more escapes options waiting for you to explore!! <SiAzuredataexplorer/>
              </p>
          </div>
          </div> {/*end of echo cmd */}
          <br/>
          <div className="break">============</div>

          <div className="ls_cmd">
              <h3 className='cmd_title'>ls command</h3>
              <p>
                <span>ls</span> commands (abbreviation of list) list out all of the files in the current location <br />  
              </p>

              <p className="cmd_exe"><span>cd [option]</span></p>

              <table className="fm_table">
                <tbody>
                  <tr>
                    <th> Common Flags</th>
                    <th> Description </th>
                  </tr>

                  <tr>
                    <td> -a </td>
                    <td> -all, list all files in the directory, include hidden files beginning with . </td>
                  </tr>

                  <tr>
                    <td> -l </td>
                    <td> In addition to the file name, the file permissions, owner, file size, etc. are listed in detail.</td>
                  </tr>

                  <tr>
                    <td> -d </td>
                    <td> -directory, displays the directory as a file instead of the file in it </td>
                  </tr>
                  </tbody>
                </table>

          </div> {/*end of ls_cmd*/ }
          <br/>
          <div className="break">============</div>

          <div className='rm_cmd'>
            <h3 className='cmd_title'>rm command</h3>
            <p>
            <span>rm </span> command ( short for remove) deletes one or more files or directories in a directory. 
            It can also delete a directory and all files and subdirectories under it. <br />
            For new user be careful when you use this command.This is not a reversale command. 
            The entire system might be destroyed with this command 
            (for example, rm * -rf under / (root directory)). Therefore, be sure and confirm what you want to delete and your current locatio.  
            </p>
            <p className='cmd_exe'> <span>rm [options] files or directory</span> </p>

            <table className="fm_table">
              <tbody>
                  <tr>
                    <th> Common Flags</th>
                    <th> Description </th>
                  </tr>

                  <tr>
                    <td> -f </td>
                    <td> --force Ignore nonexistent files and warning </td>
                  </tr>

                  <tr>
                    <td> -i </td>
                    <td> --interactive, make an interactive deleteion </td>
                  </tr>

                  <tr>
                    <td> -r </td>
                    <td> --recursively, delete all directories and subdirectories listed in the paramemter </td>
                  </tr>
                  </tbody>
                </table>

          </div> {/*end of rm_cmd*/ }
          <br/>
          <div className="break">============</div>

          <div className="cp_cmd">
            <h3 className='cmd_title'> cp command</h3>
            <p>
               <span> cp </span> command ( short for copy) is a common used commands. This commands used to copy files or directories. <br />
            </p>
            <p className='cmd_exe'>
            <span>
                cp [options] source file directory <br />
                cp [options] -t directory source file
            </span>
            </p>

            <table className='fm_table'>
              <tbody>
                  <tr>
                    <th> Common Flags</th>
                    <th> Description </th>
                  </tr>

                  <tr>
                    <td> -f </td>
                    <td> --force, copy files or directories  </td>
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
                    <td> --update, the file will be copied only when the modiciation time of the souce file is more than the destination
                      file (or not existed)
                    </td>
                  </tr>
                  </tbody>
                </table>
          </div> {/*end of cp_cmd*/ }
          <br/>
          <div className="break">============</div>

          <div className="mv_cmd">
            <h3 className='cmd_title'>mv command</h3>
            <p>
              <span>mv</span> command is used to move files or change file names. It is also used to back up files or director.
            </p>
            <p className='cmd_exe'> <span>mv [option] src file or directory target file or directory</span></p>

            <div className="example">
            Common Examples: 
            <p>
              To move file called "hacker" into directory named "room", you would type <br/>
              <span>$ mv hacker room</span> <br/>

              To rename file called "redHoddie" into "blackHoodie", you would type <br/>
              <span>$ mv redHoddie blackHoodie</span> <br/>
            </p>
            </div>
          </div> {/*end of mv_cmd*/ }
          <br/>
          <div className="break">============</div>

          <div className="more_cmd">
            <h3 className='cmd_title'> more command</h3>
            <p>
              <span>More </span> command is to display file contents, one screen at at time. To display a single line more, hit {'<enter>'} key. 
              To display the next screenful, hit {'<spacebar>'}. To exit, press {"<q>"}
            </p>

            <p className='cmd_exe'>
              <span> more filename </span>
            </p>
          </div> {/*end of more_cmd*/ }
          <br/>
          <div className="break">============</div>

          <div className='tar_cmd'>
            <h3 className='cmd_title'>tar command</h3>
            <p>
            <span>tar</span> stands for tape archive, is used to create Archive and extract the Archive files. 
            tar command in Linux is one of the important command which provides archiving functionality in Linux.
            We can use Linux tar command to create compressed or uncompressed Archive files and also maintain and modify them
            </p> <br/>

            <p>
             <strong> What is archive file? </strong> archive file is a file contains one or more 
             than one file along with metadata. The benefit of archive file is that it is easier 
             portability and storage, or simply to compress files to use less storage space. 
            </p>
            <p className='cmd_exe'> <span>tar [options] [archive-file] [file or directory to be archived]</span></p>

            <table className='fm_table'>
              <tbody>
                  <tr>
                    <th> Common Flags</th>
                    <th> Description </th>
                  </tr>

                  <tr>
                    <td> -c </td>
                    <td> --create, create archive </td>
                  </tr>

                  <tr>
                    <td> -x </td>
                    <td> --extract, extract archive </td>
                  </tr>

                  <tr>
                    <td> -f </td>
                    <td>  creates archive with given filename </td>
                  </tr>

                  <tr>
                    <td> -t </td>
                    <td>  displays or lists files in archived file </td>
                  </tr>

                  <tr>
                    <td> -v </td>
                    <td>  displays Verbose Information  </td>
                  </tr>

                  <tr>
                    <td> -A </td>
                    <td>  Concatenates the archive files  </td>
                  </tr>

                  
                  <tr>
                    <td> -z </td>
                    <td>  --zip, tells tar command that creates tar file using gzip   </td>
                  </tr>

                  
                  <tr>
                    <td> -j </td>
                    <td>  filter archive tar file using tbzip </td>
                  </tr>

                  
                  <tr>
                    <td> -W </td>
                    <td>  Verify a archive file  </td>
                  </tr>

                  <tr>
                    <td> -r </td>
                    <td>  update or add file or directory in already existed .tar file   </td>
                  </tr>
                </tbody>
            </table>

            <div className='example'>
              Common Examples: <br/>
              <p>
                To create, verbose, filename. Bundle all the content of dir_1 into a single file called dir_1.tar <br/>
              <span>$ tar -cvf dir_1.tar dir_1 </span> <br/>
                To extract files from Archives use -xvf <br/>
              <span>$ tar xvf file.tar </span> <br/>
                To update existing tar file in Linux <br/>
              <span>$  tar rvf file.tar *.c  </span> <br/>
                We can also apply pipe to through 'prep' commands to find what we are looking for <br/>
              <span>$ tar tvf file.tar | grep "text to find" </span> 
                (This command will list only for the mentioned text or image in grep from archived file)
              </p>
            </div>

          </div> {/*end of tar_cmd*/ }

          <div className='cat_cmd'>
              <h3 className='cmd_title'>cat command</h3>
              <p>
                <span>cat </span> command ( abbreviation for catalogue/ or concatenate) This command is handy because it can do:
              </p>
              <ul>
                  <li> Ouput a file or standard input. </li>
                  <li> Display the contents of a file, or to link several files together. </li>
                  <li> Read and display content from standard input </li>
                  <li> It is also often used in conjunction with redirection symbols</li>
              </ul> 

              <p className='cmd_exe'> <span> cat option </span></p>

              <table className='fm_table'>
                <tbody>
                  <tr>
                    <th> Common Flags</th>
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
                  </tbody>
                </table>

                  <div className='example'>
                    Let's go to some common used examples: 
                    <p>
                        To show content of given filename <br/>
                        <span>$cat filename </span> <br/>
                        To show the content of file1 and file2 <br/>
                        <span> $cat file1 file2</span><br/>
                        To show content with line number <br/>
                        <span>$cat -n filename </span><br/>
                        To create a file named newfile<br/>
                        <span>$ cat {`>`} newfile</span><br/>
                        To copy the content of a file to another file <br/>
                        <span> $cat [filename-whose-contents-is-to-be-copied] {`>`}[destination-filename]</span> <br/>
                        To append the contents of one file to the end of another file <br/>
                        <span> $cat file1 {`>`} file2</span> <br/>
                        To highlight the end of line <br/>
                        <span> $cat -E "filename"</span> <br/>
                        To show that much content, which could fit in terminal and will ask to show more <br/>
                        <span> $cat "filename" | more</span> <br/>
                        To merge the contents of file in respective order and will insert that content in "merged_filename" <br/>
                        <span>$cat "filename1" "filename2" "filename3" {`>`} "merged_filename"</span> <br/>
                        To show the content of all text files present in the folder <br/>
                        <span>$cat *.txt</span><br/>
                        To append the content at the end of the file <br/>
                        <span>$cat {`>>`} text.txt The newly added text</span> ( this will append the text "The newly added text" to the end of the txt file.)

                    </p>
                     
                  </div>

          </div> {/*end of cp_cmd*/ }
      </div>{/*end of fm_container*/ }

      <div className="break">============</div>
        <div className="quiz">
          <h1 className= "quiz_title">End of Lesson Quiz</h1>
          <Quiz data={qData}/>
      </div>
      <Checkbox id="3"/>
      <Progress />
      <Footer/>
    </div>
  )
}

export default FileManagement