import style from "./TechStack.module.css"

import {DiReact, DiHtml5} from "react-icons/di"
import {SiNextdotjs, SiJavascript, SiCsswizardry, SiExpress, SiPostgresql} from "react-icons/si"
import {IoLogoNodejs} from "react-icons/io"
import {BsGithub} from "react-icons/bs"
import {FaGitSquare} from "react-icons/fa"
import classListify from "../../utils/classListify.js"
import { Tooltip } from "antd"

export default function TechStack({classList}){



    return(
    <div className={classListify( [style.techStackContainer], [ classList]     )}>
            <h4> Toolbox</h4>
            <Tooltip title="React">
            <DiReact className={style.react}/>
            </Tooltip>
            <Tooltip title="Next.js">
            <SiNextdotjs className={style.next}/>
            </Tooltip>
            <Tooltip title="Javascript">
            <SiJavascript className={style.javascript}/>
            </Tooltip>
            <Tooltip title="Nodejs">
            <IoLogoNodejs className={style.node}/>
            </Tooltip>
            <Tooltip title="HTML">
            <DiHtml5 className={style.html}/>
            </Tooltip>
            <Tooltip title="CSS">
            <SiCsswizardry className={style.css}/>
            </Tooltip>
            <Tooltip title="Express">
            <SiExpress className={style.express}/>
            </Tooltip>
            <Tooltip title="GitHub">
            <BsGithub className={style.github}/>
            </Tooltip>
            <Tooltip title="Git">
            <FaGitSquare className={style.git}/>
            </Tooltip>
            <Tooltip title="PostgreSQL">
            <SiPostgresql className={style.postgres}/>
            </Tooltip>
        </div>
    )
}