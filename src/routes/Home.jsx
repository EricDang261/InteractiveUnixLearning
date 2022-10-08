import React from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'


const Home = () => {
  return (
    <div>
        <Nav/>
        <div className='card_wrapper'>
          <Card img="https://th.bing.com/th/id/R.107af3c9c17acaa9eb1148b92a14b068?rik=e4yQlYiHiI3L0Q&pid=ImgRaw&r=0" 
                title="yooooo"
                descr = "funny description"/>
          <Card img="https://th.bing.com/th/id/OIP.S9ZfCoAJNaJlC3B13jfjrAHaEW?pid=ImgDet&rs=1" 
                title="HiIII"
                descr="Cool description"/>
        </div>
    </div>
  )
}

export default Home