import React, {useState, useEffect} from "react";

function getSavedVal(key, val){
    // console.log("WHats going on here? ", key, " ", val)
    const savedVal = JSON.parse(localStorage.getItem(key))
    // console.log("type? ", savedVal)
    if(savedVal){
        // console.log("saved? ", savedVal)
        return savedVal
    }
    else{
        return val
    }
}

export default function useLocalStorage(key, val){
    // console.log("localstorage ", val)
    let [checked, setChecked] = useState(() =>{
        // console.log("checking????")
        return getSavedVal(key, val)
    })

    useEffect(() => {
        // console.log("before? ", typeof(checked))
        localStorage.setItem(key, JSON.stringify(checked))
        // console.log("after ", typeof(JSON.stringify(checked)))
    }, [checked, key])

    // console.log("returned? ", checked)

    return [checked, setChecked]

}