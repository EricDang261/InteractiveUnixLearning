import React, { useState, useEffect } from "react";
import { SideNav, Footer, fmData, Checkbox } from "../components";
import Quiz from "./Quiz";
import { Link } from "react-router-dom";

import Progress from "../components/utility/Progress";
import example from "../assets/fm/example.png";
import regexExample from "../assets/fm/regex-cheatsheet.jpeg";
import practice from "../assets/practice.jpg";
import quizImg from "../assets/quiz.png";

import { FaHandPointRight } from "react-icons/fa";
import { SiAzuredataexplorer } from "react-icons/si";
import "./page-layout.css";

const FileManagement = () => {
  const [qData, setQData] = useState();
  const [loading, SetLoading] = useState(true);
  const [quizPopup, setQuizPop] = useState(false);

  useEffect(() => {
    fetch("./fmMC.json")
      .then((res) => res.json())
      .then((data) => {
        setQData(
          Object.keys(data).map(function (value) {
            return data[value];
          })
        );
        SetLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="module">
      <SideNav className="fm_nav" page={fmData} />
      <div className="module_body">
        <h1 className="module_title">File Management</h1> <br />
        <p className="module_intro">
          In Unix OS, most of the operations are performed on files. After this
          ultimate lesson, you will become an expert. Are you ready? Let's go{" "}
          <FaHandPointRight style={{ color: "white" }} />
        </p>
        <div className="break">============</div>
        <div className="topic">
          <div className="file_type" />
          <h3 className="topic_title">File Types </h3>
          <p>
            In Unix, we will mostly see these 3 basic types of files: <br />
            <span2> Ordinary Files - </span2> contains data, text, or program
            instructions. <br />
            <span2> Special Files - </span2> provide access to hardware, or they
            could be aliases or shortcuts and enable you to access a single file
            using different names. <br />
            <span2> Directories - </span2> As you know, directories are folders
            which stores both ordinary files and special files.
          </p>
        </div>{" "}
        {/*end of file_type*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="echo_cmd" />
          <h3 className="topic_title">echo command</h3>
          <p>
            Let's start off with one of the most basic and commonS used command{" "}
            <span>echo</span>. This command in linux is used to display line of
            text or string that are passed as an argument.
          </p>
          <p className="topic_ex">
            {" "}
            <span> echo [option] [string]</span>{" "}
          </p>
          <p>
            To enable the interpretation of backslash escapes in a string. You
            will need to set -e as a flag to the command{" "}
          </p>

          <div className="example">
            <p>Let's see some examples: </p>
            <p>
              To delete all the spaces in between the text <br />
              <span>$echo -e "hello \bworld \b!"</span> &emsp; {`=>`} output:{" "}
              <span2>hellworld! </span2> <br />
              To create new line <br />
              <span>$echo -e "\nHello \nWorld \n!"</span> &emsp; {`=>`} output:{" "}
              <span2>
                <br /> hello
                <br />
                world
                <br />!<br />
              </span2>
              To have a sound alert return at the end of the string or text{" "}
              <br />
              <span>$echo -e "\aHello World</span> <br />
              Last but not least, to print all files/folders <br />
              <span>$echo * </span> <br />
              And there are so many more escapes options waiting for you to
              explore!!
            </p>
          </div>
        </div>{" "}
        {/*end of echo cmd */}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="touch_cmd" />
          <h3 className="topic_title">touch command</h3>
          <p>
            <span>touch</span> command is used to create, modify, and change the
            timestamp of the file
          </p>
          <p className="topic_ex">
            {" "}
            <span> touch filename</span>{" "}
          </p>
        </div>{" "}
        {/*end of touch cmd */}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="ls_cmd" />
          <h3 className="topic_title">ls command</h3>
          <p>
            <span>ls</span> commands (abbreviation of list) list out all of the
            files in the current location <br />
          </p>

          <p className="topic_ex">
            <span>ls [option]</span>
          </p>

          <table>
            <tbody>
              <tr>
                <th>Common Flags</th>
                <th>Description</th>
              </tr>

              <tr>
                <td>-a</td>
                <td data-label="-a">
                  {" "}
                  -all, list all files in the directory, include hidden files
                  beginning with .{" "}
                </td>
              </tr>

              <tr>
                <td> -l </td>
                <td data-label="-l">
                  {" "}
                  In addition to the file name, the file permissions, owner,
                  file size, etc. are listed in detail.
                </td>
              </tr>

              <tr>
                <td> -d </td>
                <td data-label="-d">
                  {" "}
                  -directory, displays the directory as a file instead of the
                  file in it{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>{" "}
        {/*end of ls_cmd*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="rm_cmd" />
          <h3 className="topic_title">rm command</h3>
          <p>
            <span>rm </span> command ( short for remove) deletes one or more
            files or directories in a directory. It can also delete a directory
            and all files and subdirectories under it. <br />
            For new user be careful when you use this command.This is not a
            reversale command. The entire system might be destroyed with this
            command (for example, rm * -rf under / (root directory)). Therefore,
            be sure and confirm what you want to delete and your current
            locatio.
          </p>
          <p className="topic_ex">
            {" "}
            <span>rm [options] files or directory</span>{" "}
          </p>

          <table>
            <tbody>
              <tr>
                <th> Common Flags</th>
                <th> Description </th>
              </tr>

              <tr>
                <td> -f </td>
                <td data-label="-f">
                  {" "}
                  --force Ignore nonexistent files and warning{" "}
                </td>
              </tr>

              <tr>
                <td> -i </td>
                <td data-label="-i">
                  {" "}
                  --interactive, make an interactive deleteion{" "}
                </td>
              </tr>

              <tr>
                <td> -r </td>
                <td data-label="-r">
                  {" "}
                  --recursively, delete all directories and subdirectories
                  listed in the paramemter{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>{" "}
        {/*end of rm_cmd*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="cp_cmd" />
          <h3 className="topic_title"> cp command</h3>
          <p>
            <span> cp </span> command ( short for copy) is a common used
            commands. This commands used to copy files or directories. <br />
          </p>
          <p className="topic_ex">
            <span>
              cp [options] source file directory <br />
              cp [options] -t directory source file
            </span>
          </p>

          <table>
            <tbody>
              <tr>
                <th> Common Flags</th>
                <th> Description </th>
              </tr>

              <tr>
                <td> -f </td>
                <td data-label="-f"> --force, copy files or directories </td>
              </tr>

              <tr>
                <td> -i </td>
                <td data-label="-i"> ask before overwritting the file </td>
              </tr>

              <tr>
                <td> -n </td>
                <td data-label="-n">
                  {" "}
                  Do not overwritting exisiting files ( disable -i flag){" "}
                </td>
              </tr>

              <tr>
                <td> -u </td>
                <td data-label="-u">
                  {" "}
                  --update, the file will be copied only when the modiciation
                  time of the souce file is more than the destination file (or
                  not existed)
                </td>
              </tr>
            </tbody>
          </table>
        </div>{" "}
        {/*end of cp_cmd*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="mv_cmd" />
          <h3 className="topic_title">mv command</h3>
          <p>
            <span>mv</span> command is used to move files or change file names.
            It is also used to back up files or director.
          </p>
          <p className="topic_ex">
            {" "}
            <span>
              mv [option] src file or directory target file or directory
            </span>
          </p>

          <div className="example">
            Common Examples:
            <p>
              To move file called "hacker" into directory named "room", you
              would type <br />
              <span>$ mv hacker room</span> <br />
              To rename file called "redHoddie" into "blackHoodie", you would
              type <br />
              <span>$ mv redHoddie blackHoodie</span> <br />
            </p>
          </div>
        </div>{" "}
        {/*end of mv_cmd*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="more_cmd" />
          <h3 className="topic_title"> more command</h3>
          <p>
            <span>More </span> command is to display file contents, one screen
            at at time. To display a single line more, hit {"<enter>"} key. To
            display the next screenful, hit {"<spacebar>"}. To exit, press{" "}
            {"<q>"}
          </p>

          <p className="topic_ex">
            <span> more filename </span>
          </p>
        </div>{" "}
        {/*end of more_cmd*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="tar_cmd" />
          <h3 className="topic_title">tar command</h3>
          <p>
            <span>tar</span> stands for tape archive, is used to create Archive
            and extract the Archive files. tar command in Linux is one of the
            important command which provides archiving functionality in Linux.
            We can use Linux tar command to create compressed or uncompressed
            Archive files and also maintain and modify them
          </p>{" "}
          <br />
          <p>
            <span2> Archive file</span2> is a file contains one or more than one
            file along with metadata. The benefit of archive file is that it is
            easier portability and storage, or simply to compress files to use
            less storage space.
          </p>
          <p className="topic_ex">
            {" "}
            <span>
              tar [options] [archive-file] [file or directory to be archived]
            </span>
          </p>
          <table>
            <tbody>
              <tr>
                <th> Common Flags</th>
                <th> Description </th>
              </tr>

              <tr>
                <td> -c </td>
                <td data-label="-c"> --create, create archive </td>
              </tr>

              <tr>
                <td> -x </td>
                <td data-label="-x"> --extract, extract archive </td>
              </tr>

              <tr>
                <td> -f </td>
                <td> creates archive with given filename </td>
              </tr>

              <tr>
                <td> -t </td>
                <td data-label="-x">
                  {" "}
                  displays or lists files in archived file{" "}
                </td>
              </tr>

              <tr>
                <td> -v </td>
                <td data-label="-v"> displays Verbose Information </td>
              </tr>

              <tr>
                <td> -A </td>
                <td data-label="-A"> Concatenates the archive files </td>
              </tr>

              <tr>
                <td> -z </td>
                <td data-label="-z">
                  {" "}
                  --zip, tells tar command that creates tar file using gzip{" "}
                </td>
              </tr>

              <tr>
                <td> -j </td>
                <td data-label="-j"> filter archive tar file using tbzip </td>
              </tr>

              <tr>
                <td> -W </td>
                <td data-label="-W"> Verify a archive file </td>
              </tr>

              <tr>
                <td> -r </td>
                <td data-label="-r">
                  {" "}
                  update or add file or directory in already existed .tar file{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="example">
            Common Examples: <br />
            <p>
              To create, verbose, filename. Bundle all the content of dir_1 into
              a single file called dir_1.tar <br />
              <span>$ tar -cvf dir_1.tar dir_1 </span> <br />
              To extract files from Archives use -xvf <br />
              <span>$ tar xvf file.tar </span> <br />
              To update existing tar file in Linux <br />
              <span>$ tar rvf file.tar *.c </span> <br />
              We can also apply pipe to through 'prep' commands to find what we
              are looking for <br />
              <span>$ tar tvf file.tar | grep "text to find" </span>
              (This command will list only for the mentioned text or image in
              grep from archived file)
            </p>
          </div>
        </div>{" "}
        {/*end of tar_cmd*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="cat_cmd" />
          <h3 className="topic_title">cat command</h3>
          <p>
            <span>cat </span> command ( abbreviation for catalogue/ or
            concatenate) This command is handy because it can do:
          </p>
          <ul>
            <li> Ouput a file or standard input. </li>
            <li>
              {" "}
              Display the contents of a file, or to link several files together.{" "}
            </li>
            <li> Read and display content from standard input </li>
            <li>
              {" "}
              It is also often used in conjunction with redirection symbols
            </li>
          </ul>

          <p className="topic_ex">
            {" "}
            <span> cat option </span>
          </p>

          <table>
            <tbody>
              <tr>
                <th> Common Flags</th>
                <th> Description </th>
              </tr>

              <tr>
                <td> -A </td>
                <td data-label="-A"> --show all Equivalent to -vET </td>
              </tr>

              <tr>
                <td> -n </td>
                <td data-label="-n">
                  {" "}
                  --number For all the output line numbers, starting from 1 for
                  all output line numbers
                </td>
              </tr>
            </tbody>
          </table>

          <div className="example">
            Let's go to some common used examples:
            <p>
              To show content of given filename <br />
              <span>$cat filename </span> <br />
              To show the content of file1 and file2 <br />
              <span> $cat file1 file2</span>
              <br />
              To show content with line number <br />
              <span>$cat -n filename </span>
              <br />
              To create a file named newfile
              <br />
              <span>$ cat {`>`} newfile</span>
              <br />
              To copy the content of a file to another file <br />
              <span>
                {" "}
                $cat [filename-whose-contents-is-to-be-copied] {`>`}
                [destination-filename]
              </span>{" "}
              <br />
              To append the contents of one file to the end of another file{" "}
              <br />
              <span> $cat file1 {`>`} file2</span> <br />
              To highlight the end of line <br />
              <span> $cat -E "filename"</span> <br />
              To show that much content, which could fit in terminal and will
              ask to show more <br />
              <span> $cat "filename" | more</span> <br />
              To merge the contents of file in respective order and will insert
              that content in "merged_filename" <br />
              <span>
                $cat "filename1" "filename2" "filename3" {`>`} "merged_filename"
              </span>{" "}
              <br />
              To show the content of all text files present in the folder <br />
              <span>$cat *.txt</span>
              <br />
              To append the content at the end of the file <br />
              <span>$cat {`>>`} text.txt The newly added text</span> ( this will
              append the text "The newly added text" to the end of the txt
              file.)
            </p>
          </div>
        </div>{" "}
        {/*end of cp_cmd*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="cmp_cmd" />
          <h3 className="topic_title"> cmp command </h3>
          <p>
            <span> cmp </span> command in Unix/Linux is used to compare two
            files (byte by byte). <br />
            <span>cmp </span> reports the location of the first mismatch to the
            screen if difference is found.
          </p>

          <div className="topic_ex">
            {" "}
            <span> $cmp file1.txt file2.txt </span>
          </div>
        </div>
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="wc_cmd" />
          <h3 className="topic_title"> wc command </h3>
          <p>
            <span>wc</span> (word count) is used to display the number of lines,
            word, and bytes in a file
          </p>

          <div className="topic_ex">
            {" "}
            <span> $wc [option] file </span>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Common Flags</th>
                <th>Description</th>
              </tr>

              <tr>
                <td>-c</td>
                <td data-label="-c"> shows bytes</td>
              </tr>

              <tr>
                <td> -l </td>
                <td data-label="-l"> shows rows</td>
              </tr>

              <tr>
                <td> -m </td>
                <td data-label="-m">
                  {" "}
                  The number of characters counted. This flag cannot be used
                  with the -c flag.
                </td>
              </tr>
              <tr>
                <td> -w </td>
                <td data-label="-w">
                  {" "}
                  shows word. A word is defined as a string separated by blanks,
                  tabs or newline characters.
                </td>
              </tr>
              <tr>
                <td> -L </td>
                <td data-label="-L"> shows the longest line in a file</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="grep_cmd" />
          <h3 className="topic_title"> grep command</h3>
          <p>
            <span>grep </span> command is a very powerful command for finding
            matching text in a file, accepting{" "}
            <span2>regular expressions</span2> and <span2>wildcards</span2>.{" "}
            <br />
            <span>grep </span> return one of the status values: <br />
            <span2>{"-> "}0</span2> if the template search succeeded. <br />
            <span2>{"-> "}1</span2> if the search was unsuccessful.
            <br />
            <span2>{"-> "}2</span2> if the searched file did not exist. <br />
            Therefore grep can be used for shell scripts and automated text
            processing.
          </p>
          <p className="topic_ex">
            <span> $grep [options] pattern [file]</span>
          </p>
          <table>
            <tbody>
              <tr>
                <th>Common Flags</th>
                <th>Description</th>
              </tr>

              <tr>
                <td>-c</td>
                <td data-label="-c">
                  {" "}
                  -count, count the occurences of the search string found
                </td>
              </tr>

              <tr>
                <td> -i </td>
                <td data-label="-i">--ignore, ignore case differences</td>
              </tr>

              <tr>
                <td> -n </td>
                <td data-label="-n">--number, output line number</td>
              </tr>
              <tr>
                <td> -v </td>
                <td data-label="-v">print lines, expcept matching lines</td>
              </tr>
              <tr>
                <td> -r </td>
                <td data-label="-r">--recursive, recursive search</td>
              </tr>
              <tr>
                <td> --color=auto </td>
                <td data-label="--color=auto">
                  Add a color display to the found keyword
                </td>
              </tr>
            </tbody>
          </table>
        </div>{" "}
        {/*end of grep_cmd*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="regex_cmd" />
          <h3 className="topic_title"> Regular Expression</h3>
          <p>
            <span>Regex </span> or <span>regular expression</span> is a sympolic
            representation that is used to identify text pattern. <br />
            Regular expression metacharacters (character that has special
            meaning to the os) consist of the following characters:
          </p>
          <p className="topic_ex">
            <span> ^ $ . [ ] {} - ? * + ( ) | \</span>
          </p>
          <p>
            <span>Regex</span> is usually used with grep as a pattern parameter
            to match a specific text in a file
          </p>
          <p>Basic rules for Regex: </p>
          <img
            src={regexExample}
            alt="regex example"
            width={700}
            height={500}
          ></img>
          <br />{" "}
          <h4>
            Source:
            <a href="https://tec-refresh.com/regex-for-beginners/">
              {" "}
              TecRefresh
            </a>
          </h4>
        </div>{" "}
        {/*end of regex_cmd*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="file_security_intro" />
          <h3 className="topic_title"> File Security Intro</h3>
          <p>
            You are now familiar with basic file operations in Unix OS, now
            let's cover quickly about security. Linux is a multi-user operating
            system. Therefore, prventing your credential from accessing by other
            users is very important. <br />
            For example, if you use<span> ls -l </span>
            to see the details of the fail it would be something like this{" "}
            <br />
            <img src={example} alt="ls-l example" height="300"></img>
            <h4>
              Source:
              <a href="https://linuxsurvival.com/linux-file-security-permissions-part-2/">
                {" "}
                Linux survival
              </a>
            </h4>
          </p>
          <ul>
            <li>
              The first character is a type. It can be either a file ('-') or
              directory ('d'){" "}
            </li>

            <li>
              The next nine characters <span> (rw-r--r--) </span> show the
              security, which is showned in section below{" "}
            </li>
            <li>The next columnn shows the owner of the file.</li>
            <li>The next column shows the group owner of the file. </li>
            <li>The next column shows the size of the file in bytes</li>
            <li>The next character shows the last modification of the file</li>
            <li>Finally, the last character is the name of the file. </li>
          </ul>
        </div>{" "}
        {/*end of file securtity intro*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="rw-r--r--" />
          <h3 className="topic_title">rw-r--r--</h3>
          <p>
            There are nine characters in the security<span> rw-r--r-- </span>.
            Therefore, it is splitted it into 3 parts:
            <ul>
              <li>
                1.
                <span> rw-</span> is the owner of the file. In this case, the
                owner has the right to read and write to file
              </li>

              <li>
                2.
                <span> r--</span> The second part is for the group permission.
                In this case, the member of the group just only can read the
                file.
              </li>

              <li>
                3.
                <span> r--</span> The third part is for all other users in the
                Unix system. In this case, the other users can read their
                contents, but they cannot modify the contents of the files. .
              </li>
            </ul>
            <span> Note </span> that there is one more flag for executable file
            which is <span> --x </span>. Since the above example is text file,
            it cannot be executed
          </p>
        </div>{" "}
        {/*end of rw-r--r--*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="chmod" />
          <h3 className="topic_title"> Chmod </h3>
          <p>
            The chmod stands for change mode. This command is used for changing
            securities permissions on files
          </p>

          <p className="topic_ex">
            <span> chmod o+x </span>
          </p>

          <p>
            The first argument you give to the "chmod" command is 'u', 'g', 'o',
            or a combination of them which specifies which of the three "rwx"
            sets you want to modify. '+' is to add permission to the file.
          </p>

          <div className="example">
            Examples: <br />
            <span>$chmod o+x fn </span> owner has a permision to execute file
            named "fn". <br />
            <span>$chmod ugo-rwx gorillas</span> this will take all permissions
            away from everyone.
          </div>
        </div>
        {/*end of chmod*/}
        <br />
        <div className="break">============</div>
        <div className="topic">
          <div className="wildcard" />
          <h3 className="topic_title">Wildcard</h3>
          <p>
            A wildcard in Linux means it might be a symbol or set of symbols
            representing other characters. Common wildcard characters you would
            usually see are <span> '*' </span> and <span>'?'</span>
          </p>
          <p>
            The <span> '*' </span> matches any number of characters <br />
            The <span> '?' </span> matches exactly one character <br />
            The wildcard is useful because it allows you to specify more than
            one file at the same time.
          </p>
          <p className="example">
            Examples: <br />
            <span>chmod g+w *</span> this will give a "write" permission to the
            "group" on "all files" in the current directory. <br />
            <span>ls *ing </span> list all of files which end with ing <br />
            <span>ls sp??t</span> list all files which have 4 characters long
            and named as sp_ _ t ( i.g: sport, spent, spoat, etc)
          </p>
        </div>
        {/* end of wildcard */}
      </div>
      {/*end of fm_container*/}

      <div className="break">============</div>

      <div className="practice">
        <h1 className="practice_title">Lesson Practice</h1>
        <img src={practice} alt="sticky note with word practice" />
        <Link to="/fileManagePractice" className="practice_link">
          CLICK HERE FOR PRACTICE!
        </Link>
      </div>
      <div className="break">============</div>
      <div className="topic_quiz">
        <h1 className="topic_quiz_title">End of Lesson Quiz</h1>
        <img src={quizImg} alt="pencil and test sheet" />
        <button onClick={() => setQuizPop(true)}>
          Click here to begin quiz!
        </button>
      </div>
      {/*end of practice*/}
      <Quiz data={qData} trigger={quizPopup} setTrigger={setQuizPop} />
      <Progress />
      <Checkbox id="3" />
      <Footer />
    </div>
  );
};

export default FileManagement;
