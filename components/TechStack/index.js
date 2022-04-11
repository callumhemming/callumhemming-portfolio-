import style from "./TechStack.module.css"

import {DiReact, DiHtml5} from "react-icons/di"
import {SiNextdotjs, SiJavascript, SiCsswizardry, SiExpress, SiPostgresql} from "react-icons/si"
import {IoLogoNodejs} from "react-icons/io"
import {BsGithub} from "react-icons/bs"
import {FaGitSquare} from "react-icons/fa"

export default function TechStack({position}){



    return(
    <div className={style.techStackContainer + " " + position}>
            <h4> Toolbox</h4>
            <DiReact className={style.react}/>
            <SiNextdotjs className={style.next}/>
            <SiJavascript className={style.javascript}/>
            <IoLogoNodejs className={style.node}/>
            <DiHtml5 className={style.html}/>
            <SiCsswizardry className={style.css}/>
            <SiExpress className={style.express}/>
            <BsGithub className={style.github}/>
            <FaGitSquare className={style.git}/>
            <SiPostgresql className={style.postgres}/>
        </div>
    )
}