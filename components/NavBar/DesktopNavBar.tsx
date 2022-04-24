import { ReactElement } from "react"
import navData from "./navData"
import Link from "next/link"
import style from "./desktop.module.css"
import BurgerStyle from "./NavBar.module.css"

export default function DesktopNavBar(){


return(
    <div className={style.navBarContainer}>
        {navData.map(({link,name})=>{
            return(
                <Link href={link}>
                <button className={BurgerStyle.button + " " + style.deskButton}>{name}</button>
                </Link>
            )
        })}
    </div>
)

}