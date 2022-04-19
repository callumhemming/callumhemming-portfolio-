import React,{useState} from 'react'
import style from "./AboutMe.module.css";
import classListify from "../../utils/classListify.js";
import NavBar from "../NavBar";

export default function AboutMe() {

 
  
  return (
<>

    <div id="aboutme" className={style.aboutMeContainer}>

    <div className={style.sideBar}></div>
    <div className={style.aboutMeContentContainer}>
      <style jsx>
        {
          `
          .aboutMeTitleRes{
            font-size: ${2}em

        }
        `
        }
      </style>
      <h1 className={style.aboutMeTitle + " " + "aboutMeTitleRes"}>About me</h1>
      <hr></hr>
      <p className={style.Text}>Hi, I’m Callum Hemming, I’m a full Stack Web Developer who has just completed a 16 week intensive bootcamp with the School of Code. Before the bootcamp, I studied Film at the University of Brighton, and I’m now interested in taking my passion of telling stories to web development and joining your team to help build incredible apps and websites. My interests lie across the entire spectrum of web development, and I am a keen an passionate learner. </p>
    </div>

    </div>
</>
  );
}
