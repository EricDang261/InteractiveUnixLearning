import React from "react";
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
          DMPractice,
          EPractice
        }from "./routes";

import{ FlashcardComp,
      } from './components'


function App() {
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
        <Route path='/flashcard' element={ <FlashcardComp/>}> </Route>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path="/environ" element={<Environ/>}></Route>
        <Route path="/dmPractice" element={<DMPractice/>}></Route>
        <Route path="/ePractice" element={<EPractice/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
