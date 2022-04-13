import React from "react"
import Splash from "../components/Splash"
import AboutMe from "../components/AboutMe"
import TechStack from "../components/TechStack"
import { useMediaQuery } from "react-responsive"
import classListify from "../utils/classListify.js"

import style from "../styles/homepage.module.css"


export default function Home() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <>
    <div className={  classListify([style.row],[isTabletOrMobile? style.rowMobile : ""]) }>
    <TechStack classList={[style.left]}/>
    <AboutMe classList={[style.center]}/>
    </div>
    
    </>


  )
}
