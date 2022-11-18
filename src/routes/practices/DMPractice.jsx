import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./DMPractice.css";
import terminal from "../../assets/empty_terminal.png";
import Nav from "../../components/utility/Nav";
import { Footer } from "../../components";
import pwdCmd from "../../assets/dm/pwd_cmd.png";
import mkdirCmd from "../../assets/dm/mkdir_cmd.png";
import cdCmd from "../../assets/dm/cd_cmd.png";
import rmdirCmd from "../../assets/dm/rmdir_cmd.png";
import duCmd from "../../assets/dm/du_cmd.png";
import Popup from "../../components/utility/Popup";
import { HiOutlineLightBulb } from "react-icons/hi"

const DMPractice = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(terminal);
  const [currQuestion, setCurrQuestion] = useState(1);
  const [ans, setAns] = useState("pwd");
  const [popup, setPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  
  let qt = [
    "1. Try seeing the current directory you are in ",
    "2. Okay, now try to navigate to the directory dir2",
    "3. Lets make a new directory now. Name the new directory cat ",
    "4. Good Job! Now try removing the cat directory",
    "5. You have made it to the last question! I promise the following practices will be longer. Try seeing the disk usage of the dir1 directory",
  ];
  const textRef = useRef();

  const pattern1 = new RegExp(/^(pwd)\s*$/i);
  const pattern2 = new RegExp(/^(cd)\s+(dir2)\s*$/i);
  const pattern3 = new RegExp(/^(mkdir)\s+(cat)\s*$/i);
  const pattern4 = new RegExp(/^(rmdir)\s+(cat)\s*$/i);
  const pattern5 = new RegExp(/^(du)\s+(-sh)\s+(dir1)\s*$/i);

  function restart() {
    setCurrQuestion(1);
    setImg(terminal);
    setAns("pwd");
    setPopup(false);
  }

  function prevQuestion() {
    if (currQuestion - 1 > 0) {
      setText("");
      setCurrQuestion(currQuestion - 1);
      // need this variable becasue currQ dosen;y fully update until function is over
      let prevQ = currQuestion - 1;
      setImg(terminal);
      setPopup(false);
      setIsDisabled(false);
      if (prevQ === 1) {
        setAns("pwd");
      }
      if (prevQ === 2) {
        setAns("cd dir2");
      }
      if (prevQ === 3) {
        setAns("mkdir cat");
      }
      if (prevQ === 4) {
        setAns("rmdir cat");
      }
      if (prevQ === 5) {
        setAns("du -sh dir1");
      }
    }
  }
  function nextQuestion() {
    if (currQuestion + 1 <= 5) {
      setImg(terminal);
      setPopup(false);
      setIsDisabled(false);
      setText("");

      if (currQuestion === 1) {
        setAns("cd dir2");
      }
      if (currQuestion === 2) {
        setAns("mkdir cat");
      }
      if (currQuestion === 3) {
        setAns("rmdir cat");
      }
      if (currQuestion === 4) {
        setAns("du -sh dir1");
      }
      if (currQuestion === 5) {
        setAns("du -sh dir1");
      }
      setCurrQuestion(currQuestion + 1);
    }
  }

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
    textRef.current.value = text;
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (pattern1.test(text) === true && currQuestion === 1) {
        setImg(pwdCmd);
        setIsDisabled(true);
      } else if (pattern2.test(text) === true && currQuestion === 2) {
        setImg(cdCmd);
        setIsDisabled(true);
      } else if (pattern3.test(text) === true && currQuestion === 3) {
        setImg(mkdirCmd);
        setIsDisabled(true);
      } else if (pattern4.test(text) === true && currQuestion === 4) {
        setImg(rmdirCmd);
        setIsDisabled(true);
      } else if (pattern5.test(text) === true && currQuestion === 5) {
        setImg(duCmd);
        setIsDisabled(true);
      }
      setText("");
    }
  };
  return (
    <>
      <Nav />
      <div className="dm_practice">
        <div className="grid_left">
          <h5 className="question_number">Question {currQuestion} out of 5</h5>
          <div className="question_text">{qt[currQuestion - 1]}</div>
          <p>Click the terminal to enter your answer!</p>
          <button className="hint_btn" onClick={() => { setPopup(true) }}>Hint: <HiOutlineLightBulb size={25} /></button>
          <Popup
            className="wrong_ans"
            trigger={popup}
            setTrigger={setPopup}
            text={`Wrong command! Expected to input: ${ans}`}
          />
        </div>
        <div
          className="grid_right"
          onClick={(e) => {
            textRef.current.focus();
          }}
        >
            <input
              className="terminal_input_cmd"
              type="text"
              ref={textRef}
              value={text}
              onChange={handleChange}
              onKeyDown={handleEnter}
              disabled={isDisabled}
            />
          <div className="terminal">
            <img src={img}></img>
          </div>
          <div className="btn_container">
            <button className="dm_prev" onClick={prevQuestion} style={{color: currQuestion === 1 ? "grey" : "rgba(124, 255, 124)"}}>Prev</button>
            <button className="dm_next" onClick={nextQuestion} style={{color: currQuestion === 5 ? "grey" : "rgba(124, 255, 124)"}}>
              Next
            </button>
            <button className="dm_restart" onClick={restart}>
              Restart
            </button>
            <Link className="dm_exit" to="/dirManage">
              Exit
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer className="dm_footer"/> */}
    </>
  );
};

export default DMPractice;
