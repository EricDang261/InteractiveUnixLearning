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
import AnimatedRoutes from "./routes/AnimatedRoutes";



function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home/> }> </Route> 
        <Route path='/login' element= { <Login /> } > </Route> 
        <Route path='/signup' element={ <SignUp /> }></Route>
        <Route path='/intro' element={<Introduction/>}></Route>
        <Route path='/fileManagePractice' element={<FMPractice/>}></Route>    
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path="/dmPractice" element={<DMPractice/>}></Route>
        <Route path="/ePractice" element={<EPractice/>}></Route>
      </Routes>
      <AnimatedRoutes/>
    </div>
  );
}

export default App;
