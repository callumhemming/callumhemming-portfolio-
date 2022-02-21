import React from "react";
import style from "./splash.module.css"
import { Avatar } from "antd";
import { Typography } from "antd";


export default function Splash() {
const {Title} = Typography
    return (
        <>
                      <div className="pattern">
                
                </div>
            <Avatar className={style.avatar} size={600} src="/me.jpg"/>
            
  
                <Title>Hi! I'm Callum Hemming</Title>
                
          
        </>

    )
}