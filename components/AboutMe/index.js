import React,{useState, useEffect} from 'react'
import style from "./AboutMe.module.css";
import { useMediaQuery } from 'react-responsive';

export default function AboutMe() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1500px)' })
  //1224
  const [aboutMeContainerMargin, setAboutMeContainerMargin] = useState("")

  useEffect(()=>{
    setAboutMeContainerMargin(()=>isTabletOrMobile?
    `margin:0em;`:
    `margin:20em;`)
  },[isTabletOrMobile])
 
  
  return (
<>
<style jsx>
        {
          `
          .aboutMeTitleRes{
            font-size: ${2}em;
          }
            .resAboutMeContainer{
              ${aboutMeContainerMargin}
            }

        `
        }
      </style>

    <div className={style.aboutMeContainer + " " + "resAboutMeContainer"}>

    <div className={style.sideBar}></div>
    <div className={style.aboutMeContentContainer}>
     
      <h1 className={style.aboutMeTitle + " " + "aboutMeTitleRes"}>About me</h1>
      <hr></hr>
      <p className={style.Text}>Hi, I’m Callum Hemming, I’m a full Stack Web Developer who has just completed a 16 week intensive bootcamp with the School of Code. Before the bootcamp, I studied Film at the University of Brighton, and I’m now interested in taking my passion of telling stories to web development and joining your team to help build incredible apps and websites. My interests lie across the entire spectrum of web development, and I am a keen an passionate learner. </p>
    </div>

    </div>
</>
  );
}
