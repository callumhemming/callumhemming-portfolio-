import { GiHamburgerMenu } from "react-icons/gi";
import style from "./NavBar.module.css";
import Link from "next/dist/client/link";
import React, { useState } from "react";
import classListify from "../../utils/classListify.js";
import navArray from "./navData.js";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <div className={style.navBarContainer}>

       <GiHamburgerMenu
       size={60}
         className={classListify(
           [style.burger],
           [isOpen ? style.burgerOpen : ""]
         )}
         onClick={() => {
           setIsOpen(!isOpen);
         }}
       />
        {isOpen && 
        <div className={style.menu}>{navArray}</div>}

       

       
        

      </div>
       
    
  );
}
