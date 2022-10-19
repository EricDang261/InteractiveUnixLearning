import React, {useState} from 'react'
import Jungle from "../assets/jungle.jpg"
import "./Story.css"

const Story = () => {
  const[text, setText] = useState("")
  const[img, setImg] = useState(Jungle)
  const[currQ, setQ] = useState=(0)
  return (
    <div className="jungle_story">
        <div className="story_text"><p>Helloooooooooooooooooo</p></div>
        <div className="story_image">
        <img className="s_img" src={img}></img>
        </div>
    </div>
  )
}

export default Story