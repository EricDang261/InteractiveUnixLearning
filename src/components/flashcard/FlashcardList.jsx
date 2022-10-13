import React from 'react'
import Flashcard from './Flashcard'
import Generate from './Generate'
import "./Flashcard.css"

export default function FlashcardList({ flashcards }) {
  return (
    <div>
      <Generate />
      <div className="card-grid">
        {flashcards.map(flashcard => {
          return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
      </div>
    </div>
  )
}