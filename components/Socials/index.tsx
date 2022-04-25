import style from "./socials.module.css"
import Link from 'next/link'
import {BsLinkedin, BsGithub} from "react-icons/bs"
import { Tooltip } from "antd"


export default function Socials():JSX.Element{

    return(<>
    <div className={style.container}>

        <Tooltip title={"Linkedin"}>
        <Link href={"https://www.linkedin.com/in/callum-hemming-12b234182/"}>
        <BsLinkedin size={100}/>
        </Link>
        </Tooltip>

        <Tooltip className={style.tooltip} title={"GitHub"}>
        <Link href="https://github.com/callumhemming">
            <BsGithub size={100}/>
        </Link>

        </Tooltip>

    </div>
    </>)
}