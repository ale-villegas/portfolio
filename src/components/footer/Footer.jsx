import  { useContext } from 'react'
import { LenguageContext } from '../../context/LenguageContext'
import "./styles.css"
const Footer = () => {
    const {text} = useContext(LenguageContext)
  return (
    <footer>
    <p>
{text.footerText}
    </p>
    </footer>
  )
}

export default Footer