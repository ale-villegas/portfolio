import { useContext } from "react"
import { LenguageContext } from "../context/LenguageContext"
import foto from "../assets/perfil.jpg"

const Presentation = () => {
    const {text} = useContext(LenguageContext)
  return (
    <div className="presentation">
        <p>
            {text.presentation}
        </p> 

        <img src={foto}alt="Presentation Photo" />
    </div>
  )
}

export default Presentation