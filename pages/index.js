import Splash from "../components/Splash";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import { useMediaQuery } from "react-responsive";
import Projects from "../components/Projects";
import style from "../styles/homepage.module.css";
import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar"


export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [mobileRow, setMobileRow] = useState("");

  useEffect(() => {
    setMobileRow(() =>
      isTabletOrMobile
        ? `flex-direction: column;`
        : `flex-direction: row-reverse;
    align-items:center;
    `
    );
  }, [isTabletOrMobile]);

  return (
    <>
      <Splash />

      <style jsx>
        {`
          .rowMobile {
            ${mobileRow}
          }
        `}
      </style>
      <NavBar/>
      <Banner id={"aboutMe"} title={"About Me"} />
      <div className={style.aboutMeTechLayout + " " + "rowMobile"}>
        <AboutMe />
        <div className={style.techStackContainer}>
          <TechStack />
        </div>
      </div>

      <Banner id={"projects"} title={"Projects"} />
      <Projects />

    </>
  );
}
