import style from "./AboutMe.module.css";
import classListify from "../../utils/classListify.js";

export default function AboutMe({classList}) {
  return (
    <div className={  classListify([style.aboutMeContainer],[classList])  }>
      <h2 className={style.title}>About me</h2>
      <hr className={style.break}/>
      <p className={style.textBlock}>
        
      Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable 
        
        
        </p>
    </div>
  );
}
