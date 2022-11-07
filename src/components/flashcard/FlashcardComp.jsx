import React, {useState, useEffect, useContext} from 'react'
import { FaHome } from 'react-icons/fa'
import { Link  } from 'react-router-dom';

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
                        if(context.value ==="Directory Management"){
                            setFlashcards(categories[3]); 
                        } 
                      })
            
        }, [context.value]) 

  return (
    <>
     <Link to="/">
                <FaHome className="home_link"/>
      </Link>
    <FlashcardList flashcards={flashcards}/>
    </>
  )
}

export default FlashcardComp