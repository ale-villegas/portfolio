import { useContext, useEffect, useState } from "react"
import { LenguageContext } from "../../context/LenguageContext"
import {FaRegMoon, FaRegSun} from "react-icons/fa"
import "./styles.css"
 

const NavBar = () => {

    const {text} = useContext(LenguageContext)
const [lightMode, setLightMode] = useState(false);


    const setDarkTheme = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        setLightMode(!lightMode)
        window.localStorage.setItem("theme-mode", "dark")
    }

    const setLightTheme = () => {
        document.querySelector("body").setAttribute("data-theme", "ligth")
        setLightMode(!lightMode)
        window.localStorage.setItem("theme-mode", "ligth")
    }


useEffect(() => {
const localStorageTheme = window.localStorage.getItem("theme-mode")
if(!localStorageTheme) return 
if(localStorageTheme === "ligth"){
    setLightTheme()
}
}, [])


  return (

    <nav>
        <div className="box-nav">
    <span className="logo-nav">
        ale-villegas.com
    </span>  

    <ul>
        <li>
            {text.portafolio}
        </li>
        <li>
            {text.contact}
        </li>
    </ul>


<div className="utils-nav">
    <div>
    <span className="hover-icon">ENG</span>
    </div>

    {
        lightMode ?    
        <div className="hover-icon" onClick={setDarkTheme}>
    <FaRegMoon size={20} className="moon"/>
       
        </div> 
        : 
     <div className="hover-icon" onClick={setLightTheme}>
     <FaRegSun size={20} className="moon"/>
        </div>
    }
 
</div>
</div>
    </nav>

  )
}

export default NavBar