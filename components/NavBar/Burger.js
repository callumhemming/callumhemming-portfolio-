import { GiHamburgerMenu } from "react-icons/gi"
import style from "./NavBar.module.css"
import Link from "next/dist/client/link"
import React, { useState } from "react"
import classListify from "../../utils/classListify.js"

export default function Burger() {

    const [isOpen, setIsOpen] = useState(false)


    return (<>
        <div className={style.navBarContainer + " " + style.navBarMobile}>

            {isOpen&& 
            <>
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
            </>
            }


           
                <GiHamburgerMenu className={classListify([style.burger],[ isOpen? style.burgerOpen : "" ])  } 
                onClick={()=>{setIsOpen(!isOpen)}} />
           
                
                
        </div>
    </>)

}