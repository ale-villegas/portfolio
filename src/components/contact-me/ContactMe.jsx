import {
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillGithub,
  AiFillHtml5,
} from "react-icons/ai";
import { BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import { FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

import "./styles.css";

import { useContext } from "react";
import { LenguageContext } from "../../context/LenguageContext";
const ContactMe = () => {
  const { text } = useContext(LenguageContext);

  return (
    <>
      <a name="contact"></a>

      <h1>{text.contact}</h1>

      <div className="box-contact">
        <div className="int-box">
          <h2>{text.contactInfo}</h2>
          <ul>
            <li>
              
              <a href="https://www.linkedin.com/in/alejandro-villegas-5a970422b" className="icon-contact"   rel="noreferrer"
              target="_blank">
                <AiOutlineLinkedin size={30} />
                Linkedin
              </a>
            </li>
            <li>
              <a
              rel="noreferrer"
              target="_blank"
                href="https://api.whatsapp.com/send/?phone=34642625329&text&type=phone_number&app_absent=0"
                className="icon-contact"
              >
               
                <AiOutlineWhatsApp size={30} />
                Whatsapp
              </a>
            </li>
            <li>
              
              <a
                rel="noreferrer"
                target="_blank"
                href="mailto:alejandrocvillegas@gmail.com"
                className="icon-contact"
              >
                <AiOutlineMail size={30} />
                Email
              </a>
            </li>
            <li>
              
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/ale-villegas"
                className="icon-contact"
              >
                
                <AiFillGithub size={30} />
                Github
              </a>
            </li>
          </ul>
        </div>

        <div className="int-box">
          <h2>Stack</h2>
          <ul>
            <li className="icon-stack">
            
              <AiFillHtml5 size={30} />
              HTML/CSS
            </li>
            <li className="icon-stack">
           
              <BiLogoJavascript size={30} />
              JavaScript
            </li>
            <li className="icon-stack">
              <FaReact size={30} />
              React
            </li>

            <li className="icon-stack">
           
              <FaFigma size={30} />
              Figma
            </li>
            <li className="icon-stack">
            
              <AiFillGithub size={30} />
              Github
            </li>
            <li className="icon-stack">
             
              <FaNodeJs size={30} />
              NodeJs
            </li>
            <li className="icon-stack">
             
              <BiLogoMongodb size={30} />
              MongoDB
            </li>
          </ul>
        </div>

     
      </div>
    </>
  );
};

export default ContactMe;
