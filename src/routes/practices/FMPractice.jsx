import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./FMPractice.css";

import Nav from "../../components/utility/Nav";
import Popup from "../../components/utility/Popup";

import initial from "../../assets/fm/initial.png";
import pwd from "../../assets/fm/pwd.png";
import ls from "../../assets/fm/ls.png";
import cdvirtualdesktop from "../../assets/fm/cdvirtualDesktop.png";
import appendcontentwithecho from "../../assets/fm//append_content_with_echo.png";
import catmerge from "../../assets/fm/catmerge.png";
import cdparentandls from "../../assets/fm/cd..andls.png";
import touch from "../../assets/fm/touch.png";
import rmfail from "../../assets/fm/rmfail.png";
import rmandls from "../../assets/fm/rmandls.png";
import rmwithr from "../../assets/fm/rm-r.png";
import mv from "../../assets/fm/mv.png";
import lswithla from "../../assets/fm/ls-la.png";
import lsafterrm from "../../assets/fm/ls_after_rm.png";
import ls_after_merge from "../../assets/fm/ls_after_merge.png";
import echo from "../../assets/fm/echo.png";
import cdandtouch from "../../assets/fm/cdandtouch.png";
import catseethecontent from "../../assets/fm/catSeeTheContent.png";

const FMPractice = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(initial);
  const [currQuestion, setCurrQuestion] = useState(1);
  const [ans, setAns] = useState("ls");
  const [popup, setPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const pattern1 = new RegExp(/^(ls)\s*$/i);
  const pattern2 = new RegExp(/^(ls)\s+(-la)\s*$/i);
  const pattern3 = new RegExp(/^(cd)\s+(virtualDesktop)\s*$/i);
  const pattern4 = new RegExp(/^(pwd)\s*$/i);
  const pattern5 = new RegExp(/^(touch)\s+(filename.txt)\s*$/i);
  const pattern6 = new RegExp(
    /^(echo)\s+('aloha')\s+(>)\s+()filename.txt\s*$/i
  );
  const pattern7 = new RegExp(/^(cat)\s+(filename.txt)\s+$/i);
  const pattern8 = new RegExp(/^(cd)\s+(..)\s+(;)\s+(touch)\s+(test.txt)\s*$/i);
  const pattern9 = new RegExp(
    /^(cp)\s+(test.txt)\s+(virtualDesktop)\s+(;)\s+(ls)\s+(;)\s+(cd)\s+(virtualDesktop)\s+(;)\s+(echo)\s+('this line should be merged')\s+(>)\s+(test.txt)\s(;)\s+(cat)\s+('filename.txt')\s+('test.txt')\s+(>)\s+('merged_fn.txt')\s*$/i
  );
  const pattern10 = new RegExp(/^(cat)\s+(merged_fn)\s*$/i);
  const pattern11 = new RegExp(/^(ls)\s*$/i);
  const pattern12 = new RegExp(/^(mv)\s+(merged_fn)\s+(..\/)\s*$/i);
  const pattern13 = new RegExp(/^(cd)\s+(..)\s+(;)\s+(ls)\s*$/i);
  const pattern14 = new RegExp(/^(rm)\s+(virtualDesktop)\s*$/i);
  const pattern15 = new RegExp(/^(rm)\s+(-r)\s+(virtualDesktop)\s*$/i);
  const pattern16 = new RegExp(/^(ls)\s*$/i);
  const pattern17 = new RegExp(
    /^(rm)\s+(test.txt)\s+(merged_fn.txt)\s+(;)\s+(ls)\s*$/i
  );

  let qt = [
    "1. Let's try to see what are files in the current directory ",
    "2. Okay, now you see what are files in the current directory! Do you Want to know more? (hint: use -la flag) ",
    "3. Now let's visit the virtualDesktop folder! ",
    "4. Good Job! Now try pwd command determine what is your location",
    "5. Now please create a txt file name filename.txt",
    "6. Use echo to write some content to your recent created txt",
    "7. You can append the content of the text file with echo >>. We have written down more content to you file,now alternatively, use cat cmd to see the content of filename.txt",
    "8. Linux terminal can execute 2 command at a same time. Try to go out to its parents location and create test.txt",
    "9. Copy the test.txt into virtualDesktop folder,  then list all files in virtualDesktop, then add 'this line should be merged' into test.txt', after that merge all the contents of existing files to new file named merged_fn ( this is the hardest question in this practice)",
    "10. Yahoo, you are amazing! Now use cat to see the merged_fn file content.",
    "11. See how many files in the current working directory",
    "12. Move the merged_fn into the parent location",
    "13. Check if can see the file in the parent directory location",
    "14. Remove the virtualDesktop directory and think about the result!!",
    "15. The reason is that the virtualDesktop contains files in it, you will need to recursively delete all the files inside. Be careful with this command since it is unreversable!",
    "16. Double check files in the current directory",
    "17. Good job! You have have one question left! You can even delete 2 files in one command! Check it out by removing test.txt and merged_fn.txt ",
  ];
  const textRef = useRef();

  function restart() {
    setCurrQuestion(1);
    setImg(initial);
    setAns("ls");
    setPopup(false);
  }

  function prevQuestion() {
    if (currQuestion - 1 > 0) {
      setText("");
      setCurrQuestion(currQuestion - 1);
      // need this variable becasue currQ dosen;y fully update until function is over
      let prevQ = currQuestion - 1;
      setImg(initial);
      setPopup(false);
      setIsDisabled(false);
      if (prevQ === 1) {
        setAns("ls");
      }
      if (prevQ === 2) {
        setAns("ls -la");
      }
      if (prevQ === 3) {
        setAns("cd virtualDesktop");
      }
      if (prevQ === 4) {
        setAns("pwd");
      }
      if (prevQ === 5) {
        setAns("touch filename.txt");
      }
      if (prevQ === 6) {
        setAns("echo 'aloha' >filename.txt");
      }
      if (prevQ === 7) {
        setAns("cat filename.txt");
      }
      if (prevQ === 8) {
        setAns("cd ..; touch test.txt");
      }
      if (prevQ === 9) {
        setAns(
          "cp test.txt virtualDesktop; ls; cd virtualDeskop; echo 'this line should be merged' > test.txt; cat 'filename.txt' 'test.txt' > 'merged_fn.txt'  "
        );
      }
      if (prevQ === 10) {
        setAns("cat merged_fn");
      }
      if (prevQ === 11) {
        setAns("ls");
      }
      if (prevQ === 12) {
        setAns("mv merged_fn ../");
      }
      if (prevQ === 13) {
        setAns("cd ..; ls");
      }
      if (prevQ === 14) {
        setAns("rm virtualDesktop");
      }
      if (prevQ === 15) {
        setAns("rm -r virtualDesktop");
      }
      if (prevQ === 16) {
        setAns("ls");
      }
      if (prevQ === 17) {
        setAns("rm test.txt merged_fn.txt; ls");
      }
    }
  }

  function nextQuestion() {
    if (currQuestion + 1 <= 17) {
      setImg(initial);
      setPopup(false);
      setText("");
      setIsDisabled(false);
      if (currQuestion === 1) {
        setAns("ls -la");
      }
      if (currQuestion === 2) {
        setAns("cd virtualDesktop");
      }
      if (currQuestion === 3) {
        setAns("pwd");
      }
      if (currQuestion === 4) {
        setAns("touch filename.txt");
      }
      if (currQuestion === 5) {
        setAns("echo 'aloha' >filename.txt");
      }
      if (currQuestion === 6) {
        setAns("cat filename.txt");
      }
      if (currQuestion === 7) {
        setAns("cd ..; touch test.txt");
      }
      if (currQuestion === 8) {
        setAns(
          "cp test.txt virtualDesktop; ls; cd virtualDeskop; echo 'this line should be merged' > test.txt; cat 'filename.txt' 'test.txt' > 'merged_fn.txt'  "
        );
      }
      if (currQuestion === 9) {
        setAns("cat merged_fn");
      }
      if (currQuestion === 10) {
        setAns("ls");
      }
      if (currQuestion === 11) {
        setAns("mv merged_fn ../");
      }
      if (currQuestion === 12) {
        setAns("cd ..; ls");
      }
      if (currQuestion === 13) {
        setAns("rm virtualDesktop");
      }
      if (currQuestion === 14) {
        setAns("rm -r virtualDesktop");
      }
      if (currQuestion === 15) {
        setAns("ls");
      }
      if (currQuestion === 16) {
        setAns("rm test.txt merged_fn.txt; ls");
      }
      // if (currQuestion === 17) {
      //   setAns("whoami");
      // }
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
        setImg(ls);
        setIsDisabled(true);
      } else if (pattern2.test(text) === true && currQuestion === 2) {
        setImg(lswithla);
        setIsDisabled(true);
      } else if (pattern3.test(text) === true && currQuestion === 3) {
        setImg(cdvirtualdesktop);
        setIsDisabled(true);
      } else if (pattern4.test(text) === true && currQuestion === 4) {
        setImg(pwd);
        setIsDisabled(true);
      } else if (pattern5.test(text) === true && currQuestion === 5) {
        setImg(touch);
        setIsDisabled(true);
      } else if (pattern6.test(text) === true && currQuestion === 6) {
        setImg(echo);
        setIsDisabled(true);
      } else if (pattern7.test(text) === true && currQuestion === 7) {
        setImg(appendcontentwithecho);
        setIsDisabled(true);
      } else if (pattern8.test(text) === true && currQuestion === 8) {
        setImg(cdandtouch);
        setIsDisabled(true);
      } else if (pattern9.test(text) === true && currQuestion === 9) {
        setImg(catmerge);
        setIsDisabled(true);
      } else if (pattern10.test(text) === true && currQuestion === 10) {
        setImg(catseethecontent);
        setIsDisabled(true);
      } else if (pattern11.test(text) === true && currQuestion === 11) {
        setImg(ls_after_merge);
        setIsDisabled(true);
      } else if (pattern12.test(text) === true && currQuestion === 12) {
        setImg(mv);
        setIsDisabled(true);
      } else if (pattern13.test(text) === true && currQuestion === 13) {
        setImg(cdparentandls);
        setIsDisabled(true);
      } else if (pattern14.test(text) === true && currQuestion === 14) {
        setImg(rmfail);
        setIsDisabled(true);
      } else if (pattern15.test(text) === true && currQuestion === 15) {
        setImg(rmwithr);
        setIsDisabled(true);
      } else if (pattern16.test(text) === true && currQuestion === 16) {
        setImg(lsafterrm);
        setIsDisabled(true);
      } else if (pattern17.test(text) === true && currQuestion === 17) {
        setImg(rmandls);
        setIsDisabled(true);
      } else {
        setPopup(true);
      }

      setText("");
    }
  };

  return (
    <>
      <Nav />

      <div className="FMPractice">
        <div className="grid_left">
          <h5 className="question_number">Question {currQuestion} out of 17</h5>
          <div className="question_text">{qt[currQuestion - 1]}</div>
          <p>
            {`->`} Click the terminal to enter your answer!
            <br />
            {`->`} Once you done writting your command. Hit Enter! <br />
            {`->`} If you command is right, you would see the executed terminal.{" "}
            <br />
            {`->`} Once you done, click next button for moving to the next
            practice{" "}
          </p>
          <p>Have fun!!</p>
        </div>
        <div
          className="grid_right"
          onClick={(e) => {
            textRef.current.focus();
          }}
        >
          <Popup
            className="wrong_ans"
            trigger={popup}
            setTrigger={setPopup}
            text={`Wrong command! Expected to input: ${ans}`}
          />

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
            <img src={img} alt="terminal"></img>
          </div>
          <div className="btn_container">
            <button
              className="dm_prev"
              onClick={prevQuestion}
              style={{
                color: currQuestion === 1 ? "grey" : "rgba(124, 255, 124)",
              }}
            >
              Prev
            </button>
            <button
              className="fm_next"
              onClick={nextQuestion}
              style={{
                color: currQuestion === 17 ? "grey" : "rgba(124, 255, 124)",
              }}
            >
              Next
            </button>
            <button className="fm_restart" onClick={restart}>
              Restart
            </button>
            <Link className="fm_exit" to="/fileManage">
              Exit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FMPractice;
