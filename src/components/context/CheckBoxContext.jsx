import {useState, createContext} from 'react'

const CheckBoxContext = createContext()

function CheckBoxProvider( {children} ){
    const[checked, setChecked] = useState(false);
    const[completion, setCompletion] = useState(0)
    const[text, setText] = useState(" Mark to complete the lesson! ")

    function handleChange(){
        setChecked(!checked)
        if(checked == false){
            setCompletion(completion + 20)
            setText("Completed!")
        }
        
        if(checked == true){
            setCompletion(completion -20)
            setText("Mark to complete the lesson!!")
        }

     

    };

    const checkboxObject = {
        checked,
        completion,
        text,
        handleChange
    }

    return(
        <CheckBoxContext.Provider value={checkboxObject}>
            {children}
        </CheckBoxContext.Provider>
    )
}

export {CheckBoxProvider, CheckBoxContext}