import { useContext } from "react"
import { LenguageContext } from "../../context/LenguageContext"
import foto from "../../assets/perfil.jpg"
import "./styles.css"

const Presentation = () => {
    const {text} = useContext(LenguageContext)
  return (

    <div className="presentation">
    <div className="box-text-photo">
    <p dangerouslySetInnerHTML={{ __html: text.presentation }}></p>

        <img src={foto}alt="Presentation Photo" />
   
    </div>
  
  <button className="btn-get-in-touch">{text.buttonGetInTouch}</button>
  </div>
    
  )
}

export default Presentation