import React from "react"
import Splash from "../components/Splash"
import AboutMe from "../components/AboutMe"
import TechStack from "../components/TechStack"

import style from "../styles/homepage.module.css"

export default function Home() {
  return (
    <>
    <div className={style.row}>
    <TechStack position={style.left}/>
    <AboutMe position={style.center}/>
    </div>
    
    </>


  )
}
