import { useState, createContext, useEffect } from "react";

const ValueContext = createContext()

function ValueProvider({ children }){
    const [value, setValue] = useState("")

    const handleChange = (event) =>{
       setValue(event.target.value)
    }
        
    const handleSubmit = (event) =>{
        event.preventDefault()
        event.target.value = `${value}`
        setValue(event.target.value)
        console.log(event.target.value)
        alert("you choose to review: " + value )
    }

    const valueObject = {
        value,
        handleChange,
        handleSubmit
    }

    // console.log("test: " + valueObject.val)
    return(
        <ValueContext.Provider value={valueObject}>
            {children}
        </ValueContext.Provider>
    )
}

export {ValueContext, ValueProvider}