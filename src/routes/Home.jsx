import React from 'react'
import Nav from '../components/utility/Nav'
import Card from '../components/utility/Card'
import Footer from '../components/utility/Footer'
import dir from "../assets/directory_card_image.gif"
import file from "../assets/file_card_image.gif"
import environ from "../assets/environ_card_image.gif"
import intro from "../assets/intro_card_image.gif"


const Home = () => {

  return (
    <div className="home">
      {console.log("width: ",window.screen.availWidth)}
        {console.log("height: ",window.screen.availHeight)}
        <Nav/>
        <div className="home_body">
            <h1 className="home_title">Unix With Us</h1>
            <div className='card_wrapper'>
                  <Card img={intro} 
                        title="Unix Introduction"
                        descr = "funny description"
                        path = "/intro"/>
                  <Card img={dir} 
                        title="Directory Management"
                        descr="Cool description"
                        path="/dirManage"/>
                  <Card img={file}
                        title="File Management"
                        descr = "description"
                        path ="/fileManage"/>
                  <Card img={environ} 
                        title="Environment/ Development"
                        descr = "funny description"
                        path ="/environ"/>
                  <Card 
                        title="Advanced Commands (optional)"
                        descr="Cool description"
                        path="advanced"/>
            </div>
            <Footer/>
        </div>
     
    </div>
  )
}

export default Home