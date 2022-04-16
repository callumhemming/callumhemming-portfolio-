import style from "./AboutMe.module.css";
import classListify from "../../utils/classListify.js";
import NavBar from "../NavBar";

export default function AboutMe() {
  return (
<>

    <div id="aboutme" className={style.aboutMeContainer}>

    <div className={style.sideBar}><NavBar/></div>
    <div className={style.aboutMeContent}>
      <h1>About me</h1>
      <hr></hr>
      <p>About me text here!</p>
    </div>

    </div>
</>
  );
}
