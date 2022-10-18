import React, { useEffect, useState, useContext } from "react";
import {Routes, Route} from 'react-router-dom'
import'./App.css'

import {  LoginForm, 
          SignUpForm,
          Home, 
          Introduction, 
          FileManagement, 
          FileSecurity, 
          Basic, 
          Advanced,
          Quiz,
          FMPractice
        }from "./routes";

import {
  FlashcardList,
  FlashcardData,
  ValueContext
} from "./components";


function App() {

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

  // const Logout = () =>{
  //   setUser({
  //     name: "",
  //     email:""
  //   });
  // }
  

  // this is for flash card

  const [flashcards, setFlashcards ] = useState(FlashcardData) 
  
  const [categories, setCategories] = useState([])

  const context = useContext(ValueContext)

  useEffect(() => {
    fetch('./test.json')
        .then(response => response.json() ) 
        .then(data => { console.log(data)
                        setCategories(Object.keys(data).map(function(value) { return data[value]; }))  
                        console.log(Object.keys(data).map(function(value) { return data[value]; }))
                        setFlashcards(context.value ==="Unix-intro" ? categories[0]: context.value === "File-management"? categories[1]: 
                                      context.value === "Environment"? categories[2]: categories[3]) 
                        
                      })   
      }, [context.value]) 

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element= { (user.email !== "") ? 
          (<Home />) : ( <LoginForm Login={Login} error={error}/>)}/>
        
        <Route path='/SignUp' element={ <SignUpForm /> }></Route>
        <Route path='/intro' element={<Introduction/>}></Route>
        <Route path='/fileManage' element={<FileManagement/>}></Route>
        <Route path='/fileManagePractice' element={<FMPractice/>}></Route>
        <Route path='/security' element={<FileSecurity/>}></Route>
        <Route path='/basic' element={<Basic/>}></Route>
        <Route path='/advanced' element={<Advanced/>}></Route>
        <Route path='/flashcard' element={ <FlashcardList flashcards={flashcards}/>}> </Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
