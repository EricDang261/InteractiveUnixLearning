import React from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import Footer from '../components/Footer'


const Home = () => {

  return (
    <div>
        <Nav/>
        <h1 className="home_title">Unix With Us</h1>
        <div className='card_wrapper'>
          <Card img="https://th.bing.com/th/id/R.107af3c9c17acaa9eb1148b92a14b068?rik=e4yQlYiHiI3L0Q&pid=ImgRaw&r=0" 
                title="Unix Introduction"
                descr = "funny description"
                path = "/intro"/>
          <Card img="https://th.bing.com/th/id/OIP.S9ZfCoAJNaJlC3B13jfjrAHaEW?pid=ImgDet&rs=1" 
                title="File Management"
                descr="Cool description"
                path="fileManage"/>
          <Card img="https://th.bing.com/th/id/R.107af3c9c17acaa9eb1148b92a14b068?rik=e4yQlYiHiI3L0Q&pid=ImgRaw&r=0" 
                title="File Security"
                descr = "description"
                path ="/security"/>
          <Card img="https://th.bing.com/th/id/R.107af3c9c17acaa9eb1148b92a14b068?rik=e4yQlYiHiI3L0Q&pid=ImgRaw&r=0" 
                title="Basic Information/ Environment"
                descr = "funny description"
                path ="/basic"/>
          <Card img="https://th.bing.com/th/id/OIP.S9ZfCoAJNaJlC3B13jfjrAHaEW?pid=ImgDet&rs=1" 
                title="Advanced Commands (optional)"
                descr="Cool description"
                path="advanced"/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home