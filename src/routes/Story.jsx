import React, {useState, useRef} from 'react'
import Jungle from "../assets/jungle.jpg"
import Jungle2 from "../assets/jungle-2.jpg"
import Knife from "../assets/knife.jpg"
import onGround from "../assets/note_drop.jfif"
import Note from "../assets/note.jpg"
import Canteen from "../assets/canteen.jpg"
import River from "../assets/river.jfif"
import River2 from "../assets/river2.jfif"
import Backpack from "../assets/backpack.jpg"
import Torch from "../assets/torch.JPG"
import Cave from "../assets/cave.jpg"
import Spear from "../assets/spear.jpg"
import Bed from "../assets/bed.jfif"
import "./Story.css"

const Story = () => {
  let story =[
    "You are lost in a jungle. Go ahead and take a look around.",
    "To the NORTH all you see and hear is more jungle and oppressing silence. To your EAST lies a NOTE. To your SOUTH lies a KNIFE. To your WEST you hear rishing water. You pick up the KNIFE and put it in your POCKET. (*hint you need to put the knife to your POCKET which is on your PERSON, don’t forget about directory paths! )",
    "Your POCKET is now full. You pick up the NOTE. (hint: you’re only carrying the note on your PERSON so it's only moving places)",
    "You read the Note.",
    "Journal page: They are all gone. We started as a party of 20 researchers and now the only one alive is me… for now. I am sure I will not be alive for long. If anyone should find this, that means you have entered this jungle as well and I am sorry that you have fallen prey to this place. There is a beast that roams these lands and the only traces he leaves of his victims are the sprays of blood that explode when he bites into them. \n I wish you all the best, \n J.K. \n The page sends shivers down your spine. You listen closely for any sign of a beast but find none. You discard the note as it seems like bad luck.",
    "You decide to head towards the rushing water and hope you can follow it out into the ocean.",
    "You go west and on the way find remnants of previous people. A dirty, cross body beat up canteen catches your eyes. You decide to take it in order to hold fresh water. (Hint: you place it on your PERSON)",
    "As you continue West, you finally come across a flowing river. Scattered along its bank are pieces of clothing, cord, and scissors. A metal glints in the river. You decide to go towards it and check to see what it is and fill your canteen.",
    "You fill your canteen then stick your hands into the cool flowing water to pull out a safety pin. You stare at it before you get an idea. You pick up a t-shirt,  the cord, and the scissors and decide to make a backpack to hold more items. (HINT: a backpack stores things (kinda like a cough cough folder…?)",
    "You have acquired a small backpack. You now decide to finally properly look around.",
    "In both directions, the river seems to just disappear into more jungle. The sun is now starting to set and you must find shelter. Doing a game of heads or tails with a small rock, you go right.",
    "The sun slowly begins to set as you walk along with the river to the right. You feel a chill as you hear a howl split the silence and pick up your pace. You come across a small clearing. The entrance to a cave looms before you. In the clearing you find minerals like FLINT, a ROPE, and STICKS. You pick up the FLINT, ROPE, and a STICK and decide to make a TORCH with them.",
    "You light the torch and venture into the cave to take shelter.",
    "The cave is deep and for a long while you hear nothing. Suddenly you come across a large cavernous space where some sort of animal lays sleeping. On a closer expectation, you see that the head of the animal is some sort of hog while the rest of the body is that of a man. You realize it's the man beast the journal page talked about! You slowly start to move backwards quietly so that you don’t alert the beast that you are there. But you accidentally kick a rock and the beast twitches and rises. It spots you and its hand darts for a nearby spear. You must stop the beast from using it!! (Hint: you must stop man beast from using cough cough executing the spear that he owns)",
    "The man beast's hand missed the spear and you took the time to flee. You hear an agitated howl from behind and can see as you run that the man beast has come following you without its spear. You retrace your steps and go get back to the clearing you entered the cave from.",
    "You hear the man beast catching up to you as you exit the cave into the clearing. You know that there is no way to outrun him. And as you feel him grow closer and closer, just about to reach you… \n You jolt out of your bed and fall onto the floor."

  ]




  const[text, setText] = useState()
  const[currQ, setQ] = useState(0)
  const[input, setInput] = useState("")
  const[image, setImg] = useState(Jungle)
  const inputRef = useRef()


  const handleEnter = (e) =>{
    if(e.key == "Enter" && currQ + 1 <= 15){
      if(input === "ls" && currQ === 0){
        setImg(Jungle2)
        setQ(currQ + 1)
      }
      else if(input === "mv knife person/pocket" && currQ === 1){
        setImg(Knife)
        setQ(currQ + 1)
      }
      else if(input === "mv note person" && currQ === 2){
        setImg(onGround)
        setQ(currQ + 1)
      }
      else if(input === "cat note" && currQ === 3){
        setImg(Note)
        setQ(currQ + 1)
      }
      else if(input === "rm note" && currQ === 4){
        setImg(onGround)
        setQ(currQ + 1)
     }
      else if(input === "cd west" && currQ === 5){
         setImg(Canteen)
         setQ(currQ + 1)
      }
      else if(input === "cat canteen >> person" && currQ === 6){
         setImg(River)
         setQ(currQ + 1)
      }
      else if(input === "cd river" && currQ === 7){
         setImg(River2)
         setQ(currQ + 1)
      }
      else if(input === "mkdir backpack" && currQ === 8){
        setImg(Backpack)
        setQ(currQ + 1)
      }
      else if(input === "ls" && currQ === 9){
        setImg(Jungle2)
        setQ(currQ + 1)
      }
      else if(input === "cd right" && currQ === 10){
        setImg(Jungle)
        setQ(currQ + 1)
      }
      else if(input === "cat flint rope stick > torch" && currQ === 11){
        setImg(Torch)
        setQ(currQ + 1)
     }    
      else if(input === "cd cave" && currQ === 12){
        setImg(Cave)
        setQ(currQ + 1)
      }
      else if(input === "chmod o=rw-" && currQ === 13){
        setImg(Spear)
        setQ(currQ + 1)
      }
      else if(input === "cd ../" && currQ === 13){
        setImg(Cave)
        setQ(currQ + 1)
      }
      else if(input === "cd ../" && currQ === 14){
        setImg(Bed)
        setQ(currQ + 1)
      }             
      else{
        alert("Wrong command!");
      }

      setInput("")
    }

  }

  const handleChange = (event)=>{
    setInput(event.target.value)
        inputRef.current.value = input
  }

  return (
    <div className="jungle_story">
        <div className="story_text">
          <input name="cmd_input" 
                className="s_input"
                ref={inputRef}
                value={input}
                onChange={handleChange}
                onKeyDown={handleEnter}/>
          <p>{story[currQ]}</p>
        </div>
        <div className="story_image">
        <img className="s_img" src={image}></img>
        </div>
        <div className='clearFix'></div>
    </div>
  )
}

export default Story