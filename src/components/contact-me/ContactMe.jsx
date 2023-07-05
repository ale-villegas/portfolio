import {AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail} from "react-icons/ai"
import "./styles.css"
import cv from "../../assets/cv.jpg"
const ContactMe = () => {
  return (
   <> <h1>Contact me</h1>
    <div className="box-contact">

      <div className="contact-links">
   <div className="available">Available</div>
        <ul>
            <li><AiOutlineLinkedin size={30}/>Linkedin</li>
            <li> <AiOutlineWhatsApp size={30}/>Whatsapp</li>
            <li> <AiOutlineMail size={30}/>Email</li>
            
        </ul>
        </div>

        <div className="cv-box">
          <img src={cv} alt="" />
        <strong>Download my CV</strong>
        </div>
       
    </div>
    </>
  )
}

export default ContactMe