import Burger from "./Burger"
import DesktopNavBar from "./DesktopNavBar"

export default function NavBar({mobile}):JSX.Element{


  return(<>
  
  {mobile && <Burger/>}

  {!mobile && <DesktopNavBar/>}
  
  </>)
}