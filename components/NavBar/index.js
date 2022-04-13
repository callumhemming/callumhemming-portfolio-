import style from "./NavBar.module.css";
import Burger from "./Burger.js";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";




export default function NavBar() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <>
    {isTabletOrMobile&& <Burger />}
     {!isTabletOrMobile&&
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
     } 
    </>
  );
}
