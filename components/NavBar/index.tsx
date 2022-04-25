import Burger from "./Burger"
import DesktopNavBar from "./DesktopNavBar"
import { useMediaQuery } from "react-responsive";
import React,{useState, useEffect} from "react"

export default function NavBar():JSX.Element{

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [isMobile, setIsMobile] = useState(false)


  useEffect(()=>{
    setIsMobile(isTabletOrMobile)
  },[isTabletOrMobile])

  return(<>
  
  {isMobile && <Burger/>}

  {!isMobile && <DesktopNavBar/>}
  
  </>)
}