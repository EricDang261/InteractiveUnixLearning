import React, { useState } from 'react'
import "./Flashcard.css"

export default function Flashcard ({flashcard}) {
    const[flip, setFlip ] = useState(false)
    return (
    <div
        className={`flashCard ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
    >
        <div className="front">
          {flashcard.question}
          <div className="flashcard-options">
            {flashcard.options.map(option => {
              return <div className="flashcard-option">{option}</div>
            })}
          </div>
        </div>
        <div className="back">{flashcard.ans}</div>
    </div>
    )
  }
  