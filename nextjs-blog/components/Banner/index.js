import React from "react";
import ProfilePicture from "./ProfilePicture";
import { Typography } from "antd";

import style from "./banner.module.css"


export default function Banner(){

    const {Title} = Typography

    return(<div className={style.bannerContainer}>
            <ProfilePicture />
            <Title>Hi! I'm Callum Hemming</Title>
        </div>
    )
}