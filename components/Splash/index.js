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
          <Avatar className={style.avatarBorder} size={230} src="/me.jpg" />
        </div>

        <div className={style.blobContainer}>
          <div className={style.blob + " " + style.blobMobile}>
            <Image src="/Blob.svg" layout="fill" />
          </div>
        </div>

        <Link href="#aboutme">
          <div className={style.progressButtonContainer}>
            <div className={style.arrowLeft}>
              <Image src="/arrow.svg" layout="fill" />
            </div>
            <div className={style.progressButton}>Let's Go!</div>
            <div className={style.arrowRight}>
              <Image src="/arrow.svg" layout="fill" />
            </div>
          </div>
        </Link>

        <div className={style.text}>
          <h2 className={style.secondaryTitle + " " + style.widthHundred}>Callum Hemming</h2>
          <h1 className={style.mainTitle + " " + style.widthHundred   }>Full Stack Web Developer</h1>
          
          {console.log(classListify([style.mainTitle],[isTabletOrMobile? style.widthHundred : null]))}
          <h3 className={style.thirdTitle}>
            Looking to jump into the world of tech!
          </h3>
        </div>
      </div>
    </>
  );
}
