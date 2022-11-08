import React, {useState, createContext} from 'react'

const UsernameContext = createContext()

function UsernameProvider({children}){
    const [usrName, setUsrName] = useState("")

    const userNameObj = {
        usrName,
        setUsrName
    }
    return(
        <UsernameContext.Provider value={userNameObj}>
            {children}
        </UsernameContext.Provider>
    )

}

export {UsernameContext, UsernameProvider}