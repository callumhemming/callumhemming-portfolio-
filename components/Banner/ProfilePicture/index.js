import Banner from "..";

import React from "react";
import {Avatar} from "antd"
import 'antd/dist/antd.css';

import { Switch } from 'antd';
import style from "./ProfilePicture.module.css"

function ProfilePicture({globals}){

    const {test, setTest} = globals

    console.log(test, setTest)

    setTest(5)
    
    

    return (
         <>
        <Switch />

         <Avatar className={style.makeBig} size = {650} src="/callumhemming.jpg" />
     

         
         
         </>
         
         )
  

}

export default ProfilePicture