import React from 'react'
import Flashcard from './Flashcard'
import Category from './Category'
import "./Flashcard.css"

export default function FlashcardList({ flashcards }) {

  return (
    <div>
      <Category />
      <div className="flashcard-container">
        <div className="card-grid">
          {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
          })}
        </div>
      </div>
    </div>
  )
}