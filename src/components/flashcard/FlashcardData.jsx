export const FlashcardData = [
    {
        id : 1,
        question: 'pwd',
        ans: "Print out the current working directory" ,
    },

    {
        id: 2,
        question: 'mkdir <directory>',
        ans: "Creates a new empty directory",
    },
    {
        id: 3,
        question: 'cd',
        ans: "change directory” allows you to navigate the filesystem"
    },
    {
        id: 4,
        question: 'cd <directory>',
        ans: "will make your path longer by one directory, moving you into the directory represented by <directory>."
    },
    {
        id: 5,
        question: 'cd <path>/<dir>',
        ans: "This is a relative path. Moving you into the directory represented by <dir> at the end of the path"
    },
    {
        id: 6,
        question: 'cd /<path>/<dir>',
        ans: "This is the absolute path. Moving you into the directory represented by <dir> at the end of the path"
    },
    {
        id: 7,
        question: 'cd ..',
        ans: "Move you to the close slash directory",
    },
    {
        id: 8,
        question: 'du -sh ~',
        ans: "Disk usage. This command tell you how much space you are using in your home directory.",
    },
    {
        id: 9,
        question: 'ls',
        ans: "“list”. Lists all “visible” files in current directory. An “invisible” file begins with a dot.",
    },
    {
        id: 10,
        question: 'ls -la',
        ans: "“list”, long, all. Lists all files in current directory and presents them in a long list format." 
    },
    {
        id: 11,
        question: 'cp <filename1> <filename2>',
        ans: "“copy”. copy existing filename1 into new filename2." 
    },

    {
        id: 12,
        question: 'cp -r <dir1> <dir2>',
        ans: "“copy”, recursively. copy existing contents of directory1 into directory2." 
    },

    {
        id: 13,
        question: 'rm <filename1> <filename2>',
        ans: "“remove”. delete filename1 and filename2. * Not reversible!" 
    },

    {
        id: 14,
        question: 'rm -r <directory1>',
        ans: "“remove”, recursively. delete directory1 and all its contents. * Not reversible!" 
    },

    {
        id: 15,
        question: 'mv <file1> <directory1>',
        ans: "“move”. move file1 into directory1. * Not reversible! Be careful with mv, cp is safer." 
    },

    {
        id: 16,
        question: 'cat <filename>',
        ans: "“catalogue”. Display file contents."
    },

    {
        id: 17,
        question: 'cat <file1> > <file2>',
        ans: "Overwite the contents of file2 with the contents of file1."
    },

    {
        id: 18,
        question: 'cat <file1> >> <file2>',
        ans: " Write the contents of file1 to the end of file2."
    },

    {
        id: 19,
        question: 'cat <file1> 2> <file2>',
        ans: "“list”, long, all. Lists all files in current directory and presents them in a long list format." 
    },

    {
        id: 20,
        question: 'cat <file1> 2> <file2>',
        ans: " Write the contents of file1 to standard output, and any errors to file2."
    },

    {
        id: 21,
        question: 'cat <file1> 2>> <file2>',
        ans: " Write the contents of file1 to standard output, and any errors (like “permission denied”) to the end of file2"
    },

]
