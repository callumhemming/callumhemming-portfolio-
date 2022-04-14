import { GiHamburgerMenu } from "react-icons/gi";
import style from "./NavBar.module.css";
import Link from "next/dist/client/link";
import React, { useState } from "react";
import classListify from "../../utils/classListify.js";
import navArray from "./navData.js";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <div className={style.navBarContainer + " " + style.navBarMobile}>

        {isOpen && 
        <div className={style.navBarMobile}>{navArray}</div>}

       <h1>

          <GiHamburgerMenu
            className={classListify(
              [style.burger],
              [isOpen ? style.burgerOpen : ""]
            )}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
       </h1>
        

      </div>
       
    
  );
}
