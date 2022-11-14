import React from "react";
import Nav from "../components/utility/Nav";
import Card from "../components/utility/Card";
import Footer from "../components/utility/Footer";
import dir from "../assets/directory_card_image.gif";
import file from "../assets/file_card_image.gif";
import environ from "../assets/environ_card_image.gif";
import intro from "../assets/intro_card_image.gif";
import flashcardgif from "../assets/flashcard.gif";
import PageProgress from "../components/PageProgress";

import "./home.css";
import SemiCircleProgress from "../components/SemiCircleProgress";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Nav />
        <div className="home_body">
          <h1 className="home_title">Unix With Us</h1>
          <div className ="wide_progress">
            <PageProgress outer="bar_wrapper" text="progress_text" inner="bar_innerwrap"/>
            </div>  
            <div className="mobile_progress">
              <SemiCircleProgress/>
            </div>
            <h1 className="home_text">The website to teach you Unix.</h1>
          <div className="card_wrapper">
            <Card
              img={intro}
              title="Unix Introduction"
              descr="I want to know more about Unix!"
              path="/intro"
            />
            <Card
              img={dir}
              title="Directory Management"
              descr="Let's explore Directory!"
              path="/dirManage"
            />
            <Card
              img={file}
              title="File Management"
              descr="Becoming expert in file operation!"
              path="/fileManage"
            />
            <Card
              img={environ}
              title="Environment/ Development"
              descr="funny description"
              path="/environ"
            />
            <Card
              img={flashcardgif}
              title="FlashCards"
              descr="The best way to memorize"
              path="/flashcard"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
