import React, {useState, useEffect, useContext} from 'react'

import {
    FlashcardList,
    FlashcardData,
    ValueContext,
  } from "../";

const FlashcardComp = () => {
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
    <FlashcardList flashcards={flashcards}/>
  )
}

export default FlashcardComp