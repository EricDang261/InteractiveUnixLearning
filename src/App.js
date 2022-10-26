import React, { useEffect, useState, useContext } from "react";
import {Routes, Route} from 'react-router-dom'
import'./App.css'

import {  LoginForm, 
          SignUpForm,
          Home, 
          Introduction, 
          FileManagement,  
          Advanced,
          Quiz,
          FMPractice,
          FMQuiz,
          FSQuiz,
          DirectoryManagement
        }from "./routes";

import {
  FlashcardList,
  FlashcardData,
} from "./components";

import { ValueContext } from "./components/context/ValueContext";


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


  const [flashcards, setFlashcards ] = useState(FlashcardData) 
  const [categories, setCategories] = useState([])
  const context = useContext(ValueContext)

  useEffect(() => {
    fetch('./test.json')
        .then(response => response.json() ) 
        .then(data => {
                      console.log(Object.keys(data).map(function(value) { return data[value]; })) 
                      setCategories(Object.keys(data).map(function(value) { return data[value]; })) 
         
                    if(context.value ==="Unix-intro"){
                          setFlashcards(categories[0])
                    }
                    if(context.value ==="File-management"){
                        setFlashcards(categories[1])
                      }
                    if(context.value ==="Environment"){
                      setFlashcards(categories[2])
                    }
                    if(context.value ==="Advanced-commands"){
                      setFlashcards(categories[3])
                    } })
        
      }, [context.value]) 

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element= { (user.email !== "") ? 
          (<Home />) : ( <LoginForm Login={Login} error={error}/>)}/>
        
        <Route path='/SignUp' element={ <SignUpForm /> }></Route>
        <Route path='/intro' element={<Introduction/>}></Route>
        <Route path="/dirManage" element={<DirectoryManagement/>}></Route>
        <Route path='/fileManage' element={<FileManagement/>}></Route>
        <Route path='/fmQuiz' element={<FMQuiz/>}></Route>
        <Route path='/fileManagePractice' element={<FMPractice/>}></Route>
        <Route path='/fsQuiz' element={<FSQuiz/>}></Route>
        <Route path='/advanced' element={<Advanced/>}></Route>
        <Route path='/flashcard' element={ <FlashcardList flashcards={flashcards}/>}> </Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
