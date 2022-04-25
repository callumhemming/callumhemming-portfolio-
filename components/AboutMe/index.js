import React,{useState, useEffect} from 'react'
import style from "./AboutMe.module.css";
import { useMediaQuery } from 'react-responsive';
import Link from "next/link"

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
      <p className={style.Text}>
      Welcome to my portfolio page, here you will find my projects and links to contact me. 
<p>
  
  My name is Callum Hemming, I am a full-stack web developer, proficient in React, Next.js, Typescript, Javascript and PostgreSQL.
  </p>
  <p>
  
    I have just completed an intense bootcamp with the School of Code and I am looking for full time employment anywhere on the stack; my greatest tool is my ability to learn independently and quickly. 
    </p>
<p>
  Please feel me to contact me <Link href={"/contact"}>here.</Link> 
  </p>
  

        
         </p>
    </div>

    </div>
</>
  );
}
