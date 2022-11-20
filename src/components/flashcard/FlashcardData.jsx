export const FlashcardData = [
  {
    id: 1,
    question: "pwd",
    ans: "Print out the current working directory",
  },

  {
    id: 2,
    question: "mkdir <directory>",
    ans: "Creates a new empty directory",
  },
  {
    id: 3,
    question: "cd",
    ans: "change directory” allows you to navigate the filesystem",
  },
  {
    id: 4,
    question: "cd <directory>",
    ans: "will make your path longer by one directory, moving you into the directory represented by <directory>.",
  },
  {
    id: 5,
    question: "cd <path>/<dir>",
    ans: "This is a relative path. Moving you into the directory represented by <dir> at the end of the path",
  },
  {
    id: 6,
    question: "cd /<path>/<dir>",
    ans: "This is the absolute path. Moving you into the directory represented by <dir> at the end of the path",
  },
  {
    id: 7,
    question: "cd ..",
    ans: "Move you to the close slash directory",
  },
  {
    id: 8,
    question: "du -sh ~",
    ans: "Disk usage. This command tell you how much space you are using in your home directory.",
  },
  {
    id: 9,
    question: "ls",
    ans: "lists all “visible” files in current directory.",
  },
  {
    id: 10,
    question: "ls -la",
    ans: "Lists all files in current directory and presents them in a long list format.",
  },
  {
    id: 11,
    question: "cp <filename1> <filename2>",
    ans: "copy existing filename1 into new filename2.",
  },

  {
    id: 12,
    question: "cp -r <dir1> <dir2>",
    ans: "“copy”, recursively. copy existing contents of directory1 into directory2.",
  },

  {
    id: 13,
    question: "rm <filename1> <filename2>",
    ans: "remove filename1 and filename2. * Not reversible!",
  },

  {
    id: 14,
    question: "rm -r <directory1>",
    ans: "remove recursively directory1 and all its contents. * Not reversible!",
  },

  {
    id: 15,
    question: "mv <file1> <directory1>",
    ans: " move file1 into directory1. * Not reversible!",
  },

  {
    id: 16,
    question: "cat <filename>",
    ans: "“catalogue”. Display file contents.",
  },

  {
    id: 17,
    question: "cat <file1> > <file2>",
    ans: "Overwite the contents of file2 with the contents of file1.",
  },

  {
    id: 18,
    question: "cat <file1> >> <file2>",
    ans: " Write the contents of file1 to the end of file2.",
  },
  {
    id: 19,
    question: "cat <file1> 2>> <file2>",
    ans: " Write the contents of file1 to standard output, and any errors (like “permission denied”) to the end of file2",
  },
  {
    id: 20,
    question: "cat *.txt",
    ans: "Show the content of all text files present in the folder",
  },
  {
    id: 21,
    question: "What is tar commands?",
    ans: "stands for tape archive, to create archive or extract archive files",
  },
  {
    id: 22,
    question: "tar -cvf dir_1.tar dir_1",
    ans: "To bundle all the content of dir_1 into a single file called dir_1.tar",
  },
  {
    id: 23,
    question: "tar xvf file.tar",
    ans: "To extract files for archive file",
  },
  {
    id: 24,
    question: "What is touch cmd do?",
    ans: "used to create, change, and modify timestamps of the file",
  },
  {
    id: 25,
    question: "what is more cmd do?",
    ans: "display content, one screen at the time",
  },
  {
    id: 26,
    question: "man",
    ans: "stand for manual, give you more information about the command",
  },
  {
    id: 27,
    question: "uname",
    ans: "display information about the system",
  },
  {
    id: 28,
    question: "whoami",
    ans: "show current active user",
  },
  {
    id: 29,
    question: "who",
    ans: "gives information on current logged in users. It tells of the login name and time.",
  },
  {
    id: 30,
    question: "su",
    ans: "stand for subtitute user ( often mistaken as super use)",
  },
  {
    id: 31,
    question: "passwd",
    ans: "this command changes your password",
  },
  {
    id: 32,
    question: "whereis",
    ans: "this command is used to find where a command exists",
  },
  {
    id: 33,
    question: "whatis",
    ans: "quickly see an single line description on what a command does",
  },
  {
    id: 34,
    question: "ps",
    ans: "display all the current processes owned by the current user",
  },
  {
    id: 35,
    question: "ctrl-c",
    ans: "terminate a process",
  },
  {
    id: 36,
    question: "ctrl-d",
    ans: "terminate an external preocess",
  },
  {
    id: 37,
    question: "ctrl-z",
    ans: "suspends a job",
  },
  {
    id: 38,
    question: "bg",
    ans: "resume the suspended jobs in the background",
  },
  {
    id: 39,
    question: "fg",
    ans: "resume the suspended jobs in the foreground",
  },
  {
    id: 40,
    question: "top",
    ans: " gives you real time resource usage by job for the machine. Terminates with ctrl-c",
  },
  {
    id: 41,
    question: "ssh",
    ans: " a protocol that a secure connection between two hosts (remote) over an insecure network",
  },
  {
    id: 42,
    question: "scp",
    ans: " a protocol that copies a file from a local computer onto a remote host",
  },
  {
    id: 43,
    question: "ifconfig",
    ans: "view or configure a network.",
  },
  {
    id: 44,
    question: "ping",
    ans: "see if a server is available and there is a connection between two nodes",
  },
  {
    id: 45,
    question: "g++",
    ans: "used in c++ development for preprocessing, compiling, assembling, and linking source code to create an executable",
  },
  {
    id: 46,
    question: "kill",
    ans: " terminate specific processes",
  },
  {
    id: 47,
    question: "&",
    ans: "The & character is added on to a command. Allow parallel command execution",
  },
  {
    id: 48,
    question: "du -sh ~",
    ans: "tells the disk usage for your home directory.",
  },
  {
    id: 49,
    question: "what is Unix? ",
    ans: "It is an operating system which is a special software that controls the hardware of a computer system",
  },
  {
    id: 50,
    question: "Is Unix and Linux same? ",
    ans: "No, they are not. Linux is derived from Unix. Linux is used with GNU (an OS) which stands for GNU is Not Unix",
  },
  {
    id: 51,
    question: "Why Unix?",
    ans: "it provides modularity, portability, simplicity, adapility, highly secured, and Linux os is everywhere!",
  },
  {
    id: 52,
    question: "cmp",
    ans: "to compare two text files",
  },
  {
    id: 53,
    question: "what is wc?",
    ans: "to print out the number of characters, bytes, rows, or lines in a file",
  },
  {
    id: 54,
    question: "clear",
    ans: "clear all text within the terminal",
  },
  {
    id: 55,
    question: "code .",
    ans: "open the VSCode editor from within the terminal",
  },
  {
    id: 56,
    question: "curl",
    ans: "transfers data to/from a server using a sepcified URL",
  },
  {
    id: 57,
    question: "env",
    ans: "displays all of the environment variables",
  },
  {
    id: 58,
    question: "what is grep?",
    ans: "to find a matching text in a file (usually is used with regex pattern or wildcards)",
  },
  {
    id: 59,
    question: "what does this command do touch file_name?",
    ans: "to create, change, modify the file_name file",
  },
];
