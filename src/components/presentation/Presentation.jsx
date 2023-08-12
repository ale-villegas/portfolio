import { useContext } from "react"
import { LenguageContext } from "../../context/LenguageContext"
import foto from "../../assets/perfil.jpg"
import comic from "../../assets/comic.png"
import "./styles.css"

const Presentation = () => {
    const {text} = useContext(LenguageContext)
  return (

    <div className="presentation">
    <div className="box-text-photo">
    <p dangerouslySetInnerHTML={{ __html: text.presentation }}></p>

        <img src={foto}alt="Presentation Photo" />
   
    </div>
  
<a href="#contact"><button className="btn-get-in-touch">{text.buttonGetInTouch}</button></a>  
  </div>
    
  )
}

export default Presentation