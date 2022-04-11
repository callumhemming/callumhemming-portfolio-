import style from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className={style.navBarContainer}>
        
          <Link href="/callumhemmingcv.pdf">
            <button className={style.button}>CV</button>
          </Link>
        
          <Link href="/">
        <button className={style.button}>About Me</button>
        </Link>
        <Link href="/projects">
        <button className={style.button}>Projects</button>
        </Link>
        
    
        <button className={style.button}>Blog</button>
    
      </div>
    </>
  );
}
