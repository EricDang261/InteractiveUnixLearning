import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./page-layout.css";
import SideNav from "../components/sidenav/SideNav";
import Footer from "../components/utility/Footer";
import Progress from "../components/utility/Progress";
import { dmData } from "../components/sidenav/dmData";
import tree from "../assets/dm/Directory-Structure.png";
import Quiz from "./Quiz";
import { Checkbox } from "../components/";
import quizImg from "../assets/quiz.png";
import practice from "../assets/practice.jpg";

const DirectoryManagement = () => {
  const [qData, setQData] = useState();
  const [loading, SetLoading] = useState(true);
  const [quizPopup, setQuizPop] = useState(false);

  useEffect(() => {
    fetch("./dmMC.json")
      .then((res) => res.json())
      .then((data) => {
        setQData(
          Object.keys(data).map(function (value) {
            return data[value];
          })
        );
        //   console.log(qData)
        SetLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading</h1>;
  return (
    <div className="module">
      <SideNav className="dirM_nav" page={dmData} />
      <div className="module_body">
        <h1 className="module_title">Directory Management</h1>
        <br />
        <p className="module_intro">
          {" "}
          In this lesson, you will learn about the directory structure and the
          different commands that can be used for it.
        </p>
        <br />
        <div className="break">============</div>
        <div className="dirM_struct">
          <h3 className="topic_title">Directory Structure</h3>
          <p>
            The directory structure is a multi-level heirarchy often called a
            directory tree. All leaves(end nodes) and branches(middle nodes)
            stem from a singlular root.
          </p>
          <div className="heirarchy_wrapper">
            {" "}
            <img className="dirM_heirarchy" src={tree} alt="directory tree" />
          </div>

          <p className="tree_img_resource">
            https://www.linuxyogi.com/linux-directory-structure-file-system-hierarchy/
          </p>
          <p>
            You can think of the directory structure as a folder that holds
            files. An important thing to note is that everything in Unix is a
            file and that includes directories!
          </p>
        </div>
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="dirM_pwd" />
          <h3 className="topic_title">What is pwd?</h3>
          <p>
            The <span>pwd</span> command is used for checking what directory you
            are currently in. The command stands for "print working directory"
            and prints out the directory name onto the terminal. Simply type{" "}
            <span>pwd</span> by itself into the terminal to use this command!
          </p>
        </div>
        <div className="break">============</div>
        <div className="topic">
          <div className="dirM_cd" />
          <h3 className="topic_title">What is cd?</h3>
          <p>
            The <span>cd</span> command is used for traversing through the
            directory structure. The command stands for "change directory".
            There are a couple of arguments that the command can take that will
            navigate you to specific destinations in certain ways:
          </p>
          <br />
          <table className="table">
            <tbody>
              <tr>
                <th>Command</th>
                <th>What it does</th>
              </tr>
              <tr>
                <td>$cd</td>
                <td data-label="cd">
                  The command by itself will always take you back to your home
                  directory.
                </td>
              </tr>
              <tr>
                <td>$cd dirName</td>
                <td data-label="cd dirName">
                  This will navigate you to the specified directory as long as
                  it is one branch lower in the directory tree (listed within
                  your current directory)
                </td>
              </tr>
              <tr>
                <td>$cd path/dirName</td>
                <td data-label="cd path/dirName">
                  This type of traversing uses the relative path of the
                  directory. The relative path starts from the current directory
                  continues down the branches of the tree (other directories)
                  until the target.
                </td>
              </tr>
              <tr>
                <td>$cd fullPath/dirName</td>
                <td data-label="cd fullPath/dirName">
                  This type of traversing uses the absolute path of the
                  directory. It starts from the root directory and includes all
                  subsequent directories.
                </td>
              </tr>
              <tr>
                <td>$cd ..</td>
                <td data-label="cd ..">
                  This is like a back button. It will navigate you back to the
                  previous (parent) directory. Combining it with / and more dots
                  will navigate you back more directories.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="break">============</div>
        <div className="topic">
          <div className="dirM_mkdir" />
          <h3 className="topic_title">What is mkdir?</h3>
          <p>
            The <span>mkdir</span> command creates a seperate empty directory
            within the current directory. The command stands for "make
            directory". The command is followed by the name of the new
            directory.
          </p>
          <p className="topic_ex">
            <span>$mkdir</span> newDirName
          </p>
        </div>
        <div className="break">============</div>
        <div className="topic">
          <div className="dirM_rmdir" />
          <h3 className="topic_title">What is rmdir?</h3>
          <p>
            The <span>rmdir</span> command removes a directory only if the
            directory is empty. The command stands for "remove directory". The
            command is followed by the name directory to be remove. If the{" "}
            <span>-r</span> flag is used, then non-empty directories can be
            deleted.
          </p>
          <p className="topic_ex">
            <span>$rmdir</span> dirName
          </p>
        </div>
        <div className="break">============</div>
        <div className="topic">
          <div className="dirM_mv" />
          <h3 className="topic_title">What is mv?</h3>
          <p>
            The <span>mv</span> command can be used to rename or move a
            directory. The commands stands for "move". When the second argument
            is a path, the command interprets it as a move operation. When the
            second argument is not a path, it considers is a renaming operation.
          </p>
          <table className="table">
            <thead>
              <th>Command</th>
              <th>What is does</th>
            </thead>
            <tbody>
              <tr>
                <td>$mv dirName /path/dest</td>
                <td data-label="mv dirName /path/dest">
                  Moves the directory to the specified destination
                </td>
              </tr>
              <tr>
                <td>$mv dirName newDirName</td>
                <td data-label="mv dirName newDirName">
                  Renames the directory to the specified new name
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="break">============</div>
        <div className="topic">
          <div className="dirM_du" />
          <h3 className="topic_title">What is du -sh ~?</h3>
          <p>
            The <span>du -sh ~</span> command tells you the disk usage for your
            home directory. The ~ can also be replaced with directory or file
            names. Realtive and absolute paths can also be used. The{" "}
            <span>s</span> flag stands for "summary" and the <span>h</span> tag
            stands for "human-readable.
          </p>
        </div>
      </div>
      <div className="break">============</div>
      <div className="practice">
        <Link to="/DMPractice" className="practice_link">
          <h1 className="practice_title">Lesson Practice</h1>
        </Link>
        <img src={practice} alt="sticky note with word practice" />
      </div>
      <div className="break">============</div>
      <br/>
      <div className="topic_quiz">
      <h1 className="topic_quiz_title" onClick={() => setQuizPop(true)}>End of Lesson Quiz</h1>
        <img src={quizImg} alt="pencil and test sheet" />
      </div>
      <Quiz data={qData} trigger={quizPopup} setTrigger={setQuizPop} />
      <Progress />
      <Checkbox id="2" />
      <Footer />
    </div>
  );
};

export default DirectoryManagement;
