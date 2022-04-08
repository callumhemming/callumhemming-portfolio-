import style from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className={style.navBarContainer}>
        <button className={style.button}>About Me</button>

        <button className={style.button}>CV</button>

        <button className={style.button}>Projects</button>

        <button className={style.button}>Blog</button>
      </div>
    </>
  );
}
