import style from "./socials.module.css"
import Link from 'next/link'
import {BsLinkedin, BsGithub} from "react-icons/bs"


export default function Socials():JSX.Element{

    return(<>
    <div className={style.container}>
        <Link href={"https://www.linkedin.com/in/callum-hemming-12b234182/"}>
        <BsLinkedin size={100}/>
        </Link>

        <Link href="https://github.com/callumhemming">
            <BsGithub size={100}/>
        </Link>

    </div>
    </>)
}