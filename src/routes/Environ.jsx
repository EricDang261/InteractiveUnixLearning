import React, {useState, useEffect} from 'react'
import { Checkbox, SideNav } from '../components'
import {envData} from "../components/sidenav/envData"
import Footer from '../components/utility/Footer'
import Progress from '../components/utility/Progress'
import "./Environ.css"
import Quiz from './Quiz'

const Environ = () => {
    const [qData, setQData] = useState()
    const [loading, SetLoading] = useState(true)



    useEffect(()=>{
        fetch("./envMC.json")
        .then(res => res.json())
        .then(data => {
          setQData(Object.keys(data).map(function(value){return data[value]}))
          console.log(qData)
          SetLoading(false);  
        })
      }, [])
    
      if(loading) return <h1>Loading</h1>

  return (
    <div className="env">
        <SideNav page={envData}/>
        <div className='env_body'>
            <div className="env_title">Environment & Development</div>
            <p className="env_intro">
                In this lesson you will be learning about Unix commands that deal with your computer environment, 
                such as processes and network operations, as well as commands that help with development.
            </p>
            <div className="break">============</div>
            <div className="env_man">
                <h3 className="subtitle">What is man?</h3>
                <p>
                    The <span>man</span> command gives you more information about other commands.
                    The command stands for "manual". The <span>man</span> command is followed by
                    command you want to know more about.
                </p>
                <span className="man_ex"> man cmd</span>
            </div>
            <div className="break">============</div>
            <div className="env_uname">
                <h3 className="subtitle">What is uname?</h3>
                <p>
                    The <span>uname</span> command displays information about the system.
                    Placing the <span>-a</span> flag onto it will list all the system information
                    including kernel name, network node name, os, and hardware platform.
                </p>
                <span className="uname_ex"> uname -a </span>
            </div>
            <div className="break">============</div>
            <div className="env_whoami">
                <h3 className="subtitle">What is whoami?</h3>
                <p>
                    The <span>whoami</span> prints the current active username.
                </p>
            </div>
            <div className="break">============</div>
            <div className="env_who">
                <h3 className="subtitle">What is who?</h3>
                <p>
                    The <span>who</span> command gives you information on current
                    logged in users. It tells of the login name and time.
                </p>
            </div>
            <div className="break">============</div>
            <div className="env_su">
                <h3 className="subtitle">What is su?</h3>
                <p>
                    The <span>su</span> command is used to quickly switch to a different
                    user account. A password will be asked to every user but the root. The
                    command can be used to execute a command under a different user account.
                </p>
                <span className="su_ex"> su userName</span>
            </div>
            <div className="break">============</div>
            <div className="env_passwd">
                <h3 className="subtitle">What is passwd?</h3>
                <p>
                    The <span>passwd</span> command changes your password.
                    You will be prompted fo your old password before it asks for
                    your new one if you are not the root user. Passwords can also
                    be deleted if the <span>-d</span> flag is used. A username 
                    follows the command
                </p>
                <span className="passwd_ex">passwd userName</span>
            </div>
            <div className="break">============</div>
            <div className="env_env">
                <h3 className="subtitle">What is env?</h3>
                <p>
                    The <span>env</span> command displays all of the environment variables. 
                </p>
            </div>
            <div className="break">============</div>
            
            <div className="env_whereis">
                <h3 className="subtitle">What is whereis?</h3>
                <p>
                    The <span>whereis</span> command is used to find where a command
                    exists. This will find the path of where the executable for the command lies.
                </p>
                <span className="whereis_ex"> whereis cmd</span>
            </div>
            <div className="env_whatis">
                <h3 className="subtitle">What is whatis?</h3>
                <p>
                    The <span>whereis</span> command is used to quickly see an single
                    line description on what a command does.
                </p>
                <span className="whereis_ex"> whatis cmd</span>
            </div>
            <div className="break">============</div>
            <div className="env_ps">
                <h3 className="subtitle">What is ps?</h3>
                <p>
                    The <span>ps</span> command will display all the current processes
                    owned by the current user. The list of processes is printed out onto
                    the terminal. The command stands for "process". The useful attribute of this command is that it also
                    displays the process id number which is very useful for killing
                    specific processes. There are a couple important variations of this command:
                    <br/>
                    NOTE: <span>grep</span> matches regular expressions (search tool)
                    <br/>
                    NOTE: "pipe" <span>|</span> redirects output, it takes the output of one process and sends it t another for further processing
                </p>
                <table>
                    <tbody>
                        <tr>
                            <th>Command</th>
                            <th>What is does</th>
                        </tr>
                        <tr>
                            <td>ps -fu userName</td>
                            <td>Full listing of all the processes owned by a specified user</td>
                        </tr>
                        <tr>
                            <td>ps -fu userName | grep process</td>
                            <td>Full listing of all the processes that match the processName or processID owned by a specified user.</td>
                        </tr>
                        <tr>
                            <td>ps aux</td>
                            <td>Displays all processes on machine</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="break">============</div>
            <div className="env_ctrl">
                <h3 className="subtitle">What is ctrl?</h3>
                <p>The different <span>ctrl</span> commands terminate or stop processes. The most commonly used version is <span>ctrl-c</span>.</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Command</th>
                            <th>What is does</th>
                        </tr>
                        <tr>
                            <td>ctrl-c</td>
                            <td>Terminates a process. Commonly used in CSS classes when you encounter an infinite loop or "hanging" code.</td>
                        </tr>
                        <tr>
                            <td>ctrl-d</td>
                            <td>Terminates an external process.</td>
                        </tr>
                        <tr>
                            <td>ctrl-z</td>
                            <td>Suspends a job. Exactly like pausing a movie. Good for large downloads and transfers.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="break">============</div>
            <div className="env_kill">
                <h3 className="subtitle">What is kill?</h3>
                <p>
                    The kill command is used to terminate specific processes. 
                    This is done by placing the chosen processId after the command.
                </p>
                <span className="kill_ex">kill processId</span>
            </div>
            <div className="break">============</div>
            <div className="env_amp">
                <h3 className="subtitle">What is &?</h3>
                <p>
                    The <span>&</span> character is added on to a command. It allows the
                    command to be run in the background so that the terminal stays free
                    and other commands can be done in parallel. 
                </p>
                <span className="amp_ex"> command& </span>
            </div>
            <div className="break">============</div>
            <div className="env_bg">
                <h3 className="subtitle">What is bg?</h3>
                <p>The <span>bg</span> command will resume suspended jobs in the background.
                    This keeps the terminal free for other commands.
                </p>
            </div>
            <div className="break">============</div>
            <div className="env_fg">
                <h3 className="subtitle">What is fg?</h3>
                <p>The <span>fg</span> command will resume suspended jobs in the foreground.
                    Also can move background jobs into the foreground.
                </p>
            </div>
            <div className="break">============</div>
            <div className="env_top">
                <h3 className="subtitle">What is top?</h3>
                <p>
                    The <span>top</span> command gives you real time resource usage by job
                    for the machine. Terminates with <span>ctrl-c</span>
                </p>
            </div>
            <div className="break">============</div>
            <div className="env_ssh">
                <h3 className="subtitle">What is ssh?</h3>
                <p>
                    The <span>ssh</span> command is a protocol that a secure connection
                    between two hosts (remote) over an insecure network. The command stands
                    for "secure shell". The command is followed by the name of the host that
                    is being accessed.
                </p>
                <span className="ssh_ex"> ssh hostname</span>
            </div>
            <div className="break">============</div>
            <div className="env_scp">
                <h3 className="subtitle">What is scp?</h3>
                <p>
                    The <span>scp</span> command is a protocol that copies a file from
                    a local computer onto a remote host. The command stands for "secure
                    copy protocol" and is followed by the local file name, the remot host,
                    and the path where the file should be stored. This command should b used
                    over the <span>ftp</span> command becasue it is more secure.

                </p>
                <span className="scp_ex"> scp localFile remoteHost:/path/</span>
            </div>
            <div className="break">============</div>
            <div className="env_ifconfig">
                <h3 className="subtitle">What is ifconfig?</h3>
                <p>
                    The <span>ifconfig</span> command is used to view or configure
                    a network. It can also be used to find your ip address which will
                    be under the inet identifier. The following command displays information:
                </p>
                <span className="ifconfig_ex"> ifconfig -a</span>
            </div>
            <div className="break">============</div>
            
            <div className="env_ping">
                <h3 className="subtitle">What is ping?</h3>
                <p>
                    The <span>ping</span> command is used to see if a server is
                    available and there is a connection between two nodes.
                </p>
                <span className="ping_ex"> ping dest</span>
            </div>
            <div className="break">============</div>
            <div className="env_g">
                <h3 className="subtitle">What is g++?</h3>
                <p>
                    The <span>g++</span> command will be used a lot in c++ development
                    and is used for preprocessing, compiling, assembling, and linking source
                    code to create an executable. The <span>-o</span> flag targets files
                    and can be used to target <span>.cpp</span> files for executables.
                </p>
                <span className="g_ex"> g++ exeFileName cppFileNames</span>
            </div>
        </div>
        <div className="break">============</div>
        <div className="env_quiz">
            <h1 className= "env_quiz_title">End of Lesson Quiz</h1>
            <Quiz data={qData}/>
        </div>

        <Checkbox id="4"/>
        <Progress/>
        <Footer/>
    </div>
  )
}

export default Environ