import {useState, createContext} from 'react'

const CheckBoxContext = createContext()

function CheckBoxProvider( {children} ){
    const[completion, setCompletion] = useState(0)
<<<<<<< HEAD
    const[text, setText] = useState(" Mark to complete the lesson! ")
    const[score, setScore] = useState(0)

    function handleChange(){
        if(checked == false){
            setChecked(true)
            setCompletion(completion + 20)
            setScore(score + 20)
            setText("Completed!")
        }
        
        if(checked == true){
            setChecked(false)
            setCompletion(completion -20)
            setScore(score - 20)
            setText("Mark to complete the lesson!!")
        }

     

    };

=======
    
>>>>>>> cec23b29f9c6787ba7adb1010d1c17c2a46e476d
    const checkboxObject = {
        completion,
<<<<<<< HEAD
        text,
        score,
        handleChange
=======
        setCompletion
>>>>>>> cec23b29f9c6787ba7adb1010d1c17c2a46e476d
    }

    return(
        <CheckBoxContext.Provider value={checkboxObject}>
            {children}
        </CheckBoxContext.Provider>
    )
}

export {CheckBoxProvider, CheckBoxContext}