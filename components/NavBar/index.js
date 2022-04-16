import style from "./NavBar.module.css";
import Burger from "./Burger.js";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import navArray from "./navData.js"



export default function NavBar() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <>
    {/* {isTabletOrMobile&& <Burger />} */}
    
    {
     <div className={style.navBarContainer}>
        

     {navArray}
 </div>
     } 
    </>
  );
}
