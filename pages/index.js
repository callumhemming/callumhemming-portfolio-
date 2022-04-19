import React from "react"
import Splash from "../components/Splash"
import AboutMe from "../components/AboutMe"
import TechStack from "../components/TechStack"
import { useMediaQuery } from "react-responsive"
import classListify from "../utils/classListify.js"
import Avatar from "antd/lib/avatar/avatar"

import Project from "../components/Project"

import style from "../styles/homepage.module.css"
import Image from "next/image"

export default function Home() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <>
   <Splash/>
 
  
  
    {/* <AboutMe classList={[]}/>
    <hr></hr>
    <TechStack classList={[]}/>
    </div> */}

    <AboutMe/>
    <div className={style.techStackContainer}>

    <TechStack/>
    </div>
    

    {/* <Project/> */}

    </>


  )
}
