import style from "./AboutMe.module.css";
import classListify from "../../utils/classListify.js";
import NavBar from "../NavBar";

export default function AboutMe() {

  const size = 100;
  return (
<>

    <div id="aboutme" className={style.aboutMeContainer}>

    <div className={style.sideBar}></div>
    <div className={style.aboutMeContentContainer}>
      <style jsx>
        {
          `
          .aboutMeTitle{
            font-size: ${size}em

        }
        `
        }
      </style>
      <h1 className="aboutMeTitle">About me</h1>
      <hr></hr>
      <p className={style.Text}>About me text here!</p>
    </div>

    </div>
</>
  );
}
