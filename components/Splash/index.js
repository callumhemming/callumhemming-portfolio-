import React from "react";
import style from "./splash.module.css";
import { Avatar } from "antd";
import { Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import classListify from "../../utils/classListify.js";

export default function Splash() {
  const { Title } = Typography;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const isDesktopAvatar = (()=>{return
  isTabletOrMobile? style.avatarMobile : style.avatarDesktop
  })()
  return (
    <>
      <div className={style.SplashContainer + " pattern"}>


        
          {/* <Avatar className={ classListify([style.avatar],[])  } size={150} src="/me.jpg" /> */}
          <h1 className={style.heading}>
            {`Hi!
           I'm Callum Hemming`}</h1>
          
       




      </div>
      
    </>
  );
}
