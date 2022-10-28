import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import "./DMPractice.css"
import terminal from "../assets/empty_terminal.png"
import Nav from '../components/utility/Nav'
import { Footer } from '../components'
import pwdCmd from "../assets/dm/pwd_cmd.png"
import mkdirCmd from "../assets/dm/mkdir_cmd.png"
import cdCmd from "../assets/dm/cd_cmd.png"
import rmdirCmd from "../assets/dm/rmdir_cmd.png"
import duCmd from "../assets/dm/du_cmd.png"
import Popup from '../components/utility/Popup'

const DMPractice = () => {
    const [text, setText] = useState("")
    const [img, setImg] = useState(terminal)
    const [currQuestion, setCurrQuestion] = useState(1)
    const [ans, setAns] = useState("pwd")
    const [popup, setPopup] = useState(false)
    let qt =
        [
            "1. Try seeing the current directory you are in ",
            "2. Okay, now try to navigate to the directory dir2",
            "3. Lets make a new directory now. Name the new directory cat ",
            "4. Good Job! Now try removing the cat directory",
            "5. You have made it to the last question! I promise the following practices will be longer. Try seeing the disk usage of the dir1 directory"
        ]
    const textRef = useRef()


    function restart(){
        setCurrQuestion(1)
        setImg(terminal)
        setAns("pwd")
        setPopup(false)
    }


    function nextQuestion() {
        if (currQuestion + 1 <= 5) {
            setImg(terminal)
            setPopup(false)

            if (currQuestion === 1) {
                setAns("cd dir2")
            }
            if (currQuestion === 2) {
                setAns("mkdir cat")
            }
            if (currQuestion === 3) {
                setAns("rmdir cat")
            }
            if (currQuestion === 4) {
                setAns("du -sh dir1")
            }
            if (currQuestion === 5) {
                setAns("du -sh dir1")
            }
            setCurrQuestion(currQuestion + 1)
        }
    }

    useEffect(() => {
        textRef.current.focus()
    }, [])

    const handleChange = (event) => {
        setText(event.target.value)
        textRef.current.value = text
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {

            if (text === "pwd" && currQuestion === 1) {
                setImg(pwdCmd)
            }
            else if (text === "cd dir2" && currQuestion === 2) {
                setImg(cdCmd)
            }
            else if (text === "mkdir cat" && currQuestion === 3) {
                setImg(mkdirCmd)
            }
            else if (text === "rmdir cat" && currQuestion === 4) {
                setImg(rmdirCmd)
            }
            else if (text === "du -sh dir1" && currQuestion === 5) {
                setImg(duCmd)
            }
            else {
                setPopup(true)
            }

            setText("")
        }
    }
    return (
        <>
        <Nav/>
        <div className="dm_practice">
            <div className="grid_left">    
                <h5 className="question_number">Question {currQuestion} out of 5</h5>
                <div className='question_text'>
                    {qt[currQuestion - 1]}
                </div>
            </div>
            <div className="grid_right"
                onClick={e => { textRef.current.focus() }}>
                    <Popup className="wrong_ans"
                    trigger = {popup}
                    setTrigger={setPopup}
                    text={`Wrong command! Expected to input: ${ans}`}
                    />
                <input className="terminal_input_cmd"
                    type="text"
                    ref={textRef}
                    value={text}
                    onChange={handleChange}
                    onKeyDown={handleEnter}/>
                <div className="terminal">
                    <img src={img} ></img>
                </div>
                <button className="dm_next" onClick={nextQuestion}>Next</button>
                <button className="dm_restart" onClick={restart}>Restart</button>
                
                <Link className="dm_exit" to="/dirManage">Exit</Link>
            
            </div>
        </div>
        {/* <Footer className="dm_footer"/> */}
        </>
    )
}

export default DMPractice