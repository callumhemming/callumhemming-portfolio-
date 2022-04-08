import React from "react";
import style from "./splash.module.css";
import { Avatar } from "antd";
import { Typography } from "antd";

export default function Splash({children}) {
  const { Title } = Typography;
  return (
    <>
      
        <div className={style.SplashContainer + " pattern"}>

            <div className={style.banner}>
        <Avatar className={style.avatar} size={500} src="/me.jpg" />
          <h1 className={style.heading}>Hi! I'm Callum Hemming</h1>
            </div>
         

     {children}
      </div>
    </>
  );
}
