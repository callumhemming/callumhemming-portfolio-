import React from "react";
import style from "./splash.module.css";
import { Avatar } from "antd";
import { Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import classListify from "../../utils/classListify.js";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
import Image from "next/image";



export default function Splash() {
  const { Title } = Typography;
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });


  const blobSize = isTabletOrMobile? style.blobMobile : style.blobDesktop
  return (
    <>
      <div className={style.splashContainer}>
        <div className={style.backgroundFilter}></div>

        <div className={style.avatar}>
          <Avatar className={style.avatarBorder} size={250} src="/me.jpg" />
        </div>
        {console.log(isTabletOrMobile ? 250 : 400)}
        <div className={style.blobContainer}>
          <div className={style.blob}>
            <Image src="/Blob.svg" layout="fill" />
          </div>
        </div>

        <Link href="#aboutMe">
          <div className={style.progressButtonContainer}>
            {/* <div className={style.arrowLeft}>
              <Image src="/arrow.svg" layout="fill" />
            </div> */}
            <div className={style.progressButton}>LET'S GO!</div>
            {/* <div className={style.arrowRight}>
              <Image src="/arrow.svg" layout="fill" />
            </div> */}
          </div>
        </Link>

        <div className={style.text}>
          <h2 className={style.secondaryTitle}>Callum Hemming</h2>
          <h1 className={style.mainTitle}>Full Stack Web Developer</h1>
          
         
          <h3 className={style.thirdTitle}>
            Looking to jump into the world of tech!
          </h3>
        </div>
      </div>
    </>
  );
}
