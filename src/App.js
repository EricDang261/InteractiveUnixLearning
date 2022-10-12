import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom';

import {  LoginForm, 
          SignUpForm,
          Home, 
          Introduction, 
          FileManagement, 
          FileSecurity, 
          Basic, 
          Advanced 
        }from "./routes";

import {
  FlashcardList,
  FlashcardData
} from "./components";

function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState( { name: "" , email:"" } )
  const [error, setError] = useState("")
  
  /* for debuging purpose */
  
  const Login = details =>{
    console.log(details);

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

  const Logout = () =>{
    setUser({
      name: "",
      email:""
    });
  }

  // this is for flash car
  const [flashcards, setFlashcards ] = useState(FlashcardData) 


  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element= {
          (user.email !== "") ? 
          (
            <div className="welcome">
              <h2>Welcome, <span>{user.name}</span> </h2>
              <button onClick={Logout}>Logout </button>
            </div>
          ) :
    
          (
            <LoginForm Login={Login} error={error}/>
          )
        } />
        
        <Route path='/SignUp' element={ <SignUpForm /> }></Route>

        <Route path='/intro' element={<Introduction/>}></Route>
        <Route path='/fileManage' element={<FileManagement/>}></Route>
        <Route path='/security' element={<FileSecurity/>}></Route>
        <Route path='/basic' element={<Basic/>}></Route>
        <Route path='/advanced' element={<Advanced/>}></Route>
        <Route path='/flashcard' element={<FlashcardList flashcards={flashcards} />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
