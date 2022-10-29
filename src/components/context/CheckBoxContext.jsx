import {useState, createContext} from 'react'

const CheckBoxContext = createContext()

function CheckBoxProvider( {children} ){
    const[completion, setCompletion] = useState(0)
    
    const checkboxObject = {
        completion,
        setCompletion
    }

    return(
        <CheckBoxContext.Provider value={checkboxObject}>
            {children}
        </CheckBoxContext.Provider>
    )
}

export {CheckBoxProvider, CheckBoxContext}