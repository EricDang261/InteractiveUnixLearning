import React, { useEffect, useState, useContext } from "react";
import {Routes, Route} from 'react-router-dom'
import'./App.css'

import {  Login, 
          SignUpForm,
          Home, 
          Introduction, 
          FileManagement,  
          Advanced,
          Feedback,
          FMPractice,
          FMQuiz,
          DirectoryManagement,
          Environ,
          DMPractice
        }from "./routes";

import {
  FlashcardList,
  FlashcardData,
  ValueContext,
  Progressbar
} from "./components";


function App() {
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
        <Route path='/' element={<Home/>} > </Route> 
        <Route path='/login' element= { <Login /> } > </Route> 
        <Route path='/signup' element={ <SignUpForm /> }></Route>
        <Route path='/intro' element={<Introduction/>}></Route>
        <Route path="/dirManage" element={<DirectoryManagement/>}></Route>
        <Route path='/fileManage' element={<FileManagement/>}></Route>
        <Route path='/fmQuiz' element={<FMQuiz/>}></Route>
        <Route path='/fileManagePractice' element={<FMPractice/>}></Route>
        <Route path='/advanced' element={<Advanced/>}></Route>
        <Route path='/flashcard' element={ <FlashcardList flashcards={flashcards}/>}> </Route>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/progressbar' element={<Progressbar/>}></Route>
        <Route path="/environ" element={<Environ/>}></Route>
        <Route path="/dmPractice" element={<DMPractice/>}></Route>
        {/* <Route path='/progressbar' element={<Progressbar/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
