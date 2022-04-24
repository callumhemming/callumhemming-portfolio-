import { ReactElement } from "react"
import navData from "./navData"
import Link from "next/link"
import style from "./desktop.module.css"
import BurgerStyle from "./NavBar.module.css"
import { uuid } from "uuidv4"

export default function DesktopNavBar(){


return(
    <div className={style.navBarContainer}>
        {navData.map(({link,name})=>{
            return(
                <Link key={uuid()} href={link}>
                <button className={BurgerStyle.button + " " + style.deskButton}>{name}</button>
                </Link>
            )
        })}
    </div>
)

}