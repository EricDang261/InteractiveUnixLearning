import React, {useState} from 'react'

import LoginForm from './forms/LoginForm'
import Home from './Home'

const Login = () => {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
        }
    
      const [user, setUser] = useState( { name: "" , email:"" } )
      const [error, setError] = useState("")
      
      const Login = details =>{
        if(details.email === adminUser.email && details.password === adminUser.password){
          console.log("Logged in");
          setUser({
            name: details.name,
            email:details.email
          });
        }else{
          console.log("Details does not match")
          setError("Details does not match!")
        }
      }  

  return (
    (user.email !== "") ? 
          (<Home />) : ( <LoginForm Login={Login} error={error} />)) 
  
}

export default Login