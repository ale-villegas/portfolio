import { useContext } from "react"
import { LenguageContext } from "../context/LenguageContext"


const NavBar = () => {

    const {text} = useContext(LenguageContext)
  return (

    <nav>
    <span>
        Alejandro Villegas
    </span>  

    <ul>
        <li>
            {text.projects}
        </li>
        <li>
            {text.contact}
        </li>
    </ul>

    </nav>

  )
}

export default NavBar