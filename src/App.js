import React from "react";
import {Routes, Route} from 'react-router-dom'
import'./index.css'

import {  Login, 
          SignUp,
          Home, 
          Introduction, 
          FileManagement,  
          Feedback,
          DirectoryManagement,
          Environ,
        }from "./routes";

import {
  DMPractice,
  EPractice,
  FMPractice
} from "./routes/practices"

import{ FlashcardComp,
      } from './components'

import Logout from "./routes/Logout"


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home/> }> </Route> 
        <Route path='/login' element= { <Login /> } > </Route> 
        <Route path='/signup' element={ <SignUp /> }></Route>
        <Route path='/logout' element={ <Logout /> }></Route>
        <Route path='/intro' element={<Introduction/>}></Route>
        <Route path="/dirManage" element={<DirectoryManagement/>}></Route>
        <Route path='/fileManage' element={<FileManagement/>}></Route>
        <Route path='/fileManagePractice' element={<FMPractice/>}></Route>
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
