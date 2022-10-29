import React, {useState, useEffect, useContext} from 'react'
import Popup from '../utility/Popup';

import {
    FlashcardList,
    FlashcardData,
    ValueContext,
  } from "../";

const FlashcardComp = () => {
    const [flashcards, setFlashcards ] = useState(FlashcardData) 
    const [categories, setCategories] = useState([])
    const [popup, setPopup] = useState(false)

    const context = useContext(ValueContext)


    useEffect(() => {
        fetch('./flashcard.json')
            .then(response => response.json() ) 
            .then(data => {
                        console.log(Object.keys(data).map(function(value) { return data[value]; })) 
                        setCategories(Object.keys(data).map(function(value) { return data[value]; })) 

                        if(context.value ==="All"){
                          setFlashcards(FlashcardData)
                        }

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
                            setFlashcards(categories[3]);
                            setPopup(true); 
                        } 
                      })
            
        }, [context.value]) 

  return (
    <>
    <Popup className="unavailable_data"
        trigger = {popup}
        setTrigger={setPopup}
        text={`This data is unvailable. We are working on it rn!`}
    />
    
    <FlashcardList flashcards={flashcards}/>
    </>
  )
}

export default FlashcardComp