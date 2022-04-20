import { GiHamburgerMenu } from "react-icons/gi";
import style from "./NavBar.module.css";
import Link from "next/dist/client/link";
import React, { useState } from "react";
import classListify from "../../utils/classListify.js";
import navArray from "./navData.js";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);


  const navPos = isOpen?
  `transform: translate(0%);
  ` :
  `transform: translate(-100%);
 
  `
  return (
     <div className={style.navBarContainer}>

    
       
        <style jsx>
          {`
          
            .menuOpen{
              ${navPos}
            
          }
          `}
        </style>
        <div className={style.menu +" "+ "menuOpen"}>{navArray} </div>

       
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
       
        

      </div>
       
    
  );
}
