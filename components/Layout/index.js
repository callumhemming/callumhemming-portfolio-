import NavBar from "../NavBar"
import Splash from "../Splash"
import TechStack from "../TechStack"
export default function Layout({children}){



    return(
<>
<NavBar/>
<Splash/>

{children}
</>
    )
}