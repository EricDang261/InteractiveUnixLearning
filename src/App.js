import React, { useState } from "react";

import {Routes, Route} from 'react-router-dom';

import LoginForm from "./routes/LoginForm";
import Home from './routes/Home';

function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState( { name: "" , email:"" } )
  const [error, setError] = useState("")
  
  {/* for debuging purpose */} 
  
  const Login = details =>{
    console.log(details);
  }

  const Logout = () =>{
    console.log("log out");
  }


  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element= {
          (user.email !== "") ? 
          (
            <div className="Welcome">
              <h2>Welcome, <span>{user.name}</span> </h2>
              <button>Logout </button>
            </div>
          ) :
    
          (
            <LoginForm Login={Login} error={error}/>
          )
        } />

      </Routes>
    </div>
  );
}

export default App;
