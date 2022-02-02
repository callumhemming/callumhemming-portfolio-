import { useState , useEffect} from "react"

import Cursor from "../components/Cursor"


export default function Header(){

    const [cursor, setCursor] = useState("|")


    

        const flicker = setInterval(()=>{

            setCursor(cursor === "|"? "" : "|") 

        },500)

   


    return <h1>Working <Cursor cursorState={cursor} /></h1>
}