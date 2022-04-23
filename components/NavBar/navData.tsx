import Link from "next/link"
import style from "./NavBar.module.css"
import {uuid} from "uuidv4"

interface NavItem{
    name:string;
    link:string;
}

const navigation: NavItem[] = [
    {name:"CV", link:"/callumhemmingcv.pdf"},
    {name:"About Me", link:"/#aboutMe"},
    {name:"Projects", link:"/#projects"},
    {name:"Get in touch!", link:"/contact"}
    // {name:"Blog", link:"/"}
]


const navArray = navigation.map(v=>{
    return(
    <Link key={uuid()} href={v.link}>
    <button className={style.button}>{v.name}</button>
    </Link>
    ) 
})


export default navArray