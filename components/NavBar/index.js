import { GiHamburgerMenu } from "react-icons/gi";
import style from "./NavBar.module.css";
import React, { useState } from "react";
import classListify from "../../utils/classListify.js";
import navigationList from "./navData.tsx";
import Link from "next/link"
import {uuid} from "uuidv4"



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


        <div className={style.menu +" "+ "menuOpen"}>
          {navigationList.map(({link, name})=>{
            return(
              
          <Link key={uuid()} href={link}>
          <button 
          onClick={()=>{setIsOpen(!isOpen)}} 
          className={style.button}>
            {name}
          </button>
          </Link>
            )
          })
          
          } </div>

       
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
