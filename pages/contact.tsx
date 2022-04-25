import ContactMeForm from "../components/ContactMeForm";
import NavBar from "../components/NavBar";
import { useMediaQuery } from "react-responsive";

export default function Contact(){
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });



    return(
        <>
        <NavBar/>
        <ContactMeForm/>
        </>
    )
}