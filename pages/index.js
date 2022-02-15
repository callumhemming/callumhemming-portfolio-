import React,{useState, useEffect} from "react"
import Splash from "../components/Splash";

import Profile from "../components/Profile";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'



export default function Home({name}) {
console.log(name)

  return (
    <>

    {/* <Splash /> */}
    <h1>{name.results[0].name.first}</h1>
    <button>Click me :D</button>
    <Profile />
    {/* <Github /> */}
    {/* <Blog /> */}
    
    </>

  )
}

export async function getStaticProps(){
  const res = await fetch("https://randomuser.me/api")
  const name = await res.json()

  return {
      props:{
          name
      }
  }

}
