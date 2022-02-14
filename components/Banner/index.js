import React,{useState} from "react";
import ProfilePicture from "./ProfilePicture";
import { Typography } from "antd";

import style from "./banner.module.css"


export default function Banner(){

    const [test, setTest] = useState(0)

    const globals = {
        test,
        setTest
    }

    const {Title} = Typography

    return(
    
    <div className={style.bannerContainer}>
        <Title>{test}</Title>
        
            <ProfilePicture globals={globals} />
            <Title>Hi! I'm Callum Hemming</Title>
        </div>
    )
}