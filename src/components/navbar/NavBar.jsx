import { useContext, useEffect, useState } from "react";
import { LenguageContext } from "../../context/LenguageContext";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import "./styles.css";
import translations from "../../../i18n";

const NavBar = () => {
  const { text, setText } = useContext(LenguageContext);
  const [lightMode, setLightMode] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setLightMode(!lightMode);
    window.localStorage.setItem("theme-mode", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "ligth");
    setLightMode(!lightMode);
    window.localStorage.setItem("theme-mode", "ligth");
  };

const changeLenguage = () => {
   if(text.btnLenguage === "ENG"){
    setText(translations.en)
    return
   }
   setText(translations.es)
}

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem("theme-mode");
    if (!localStorageTheme) return;
    if (localStorageTheme === "ligth") {
      setLightTheme();
    }
  }, []);

  useEffect(() => {
    if (openBurger) {
      // Deshabilitar el desplazamiento cuando el modal se abre
      document.body.style.overflow = "hidden";
    } else {
      // Habilitar el desplazamiento cuando el modal se cierra
      document.body.style.overflow = "auto";
    }
  }, [openBurger]);

  return (
    <>
    <a name="top"></a>
      <nav>
        <div className="box-nav">
         <a href="#top"><span className="logo-nav">ale-villegas.com</span></a> 

          <ul>
            <a href="#portfolio">
           
              <li className="nav-link">{text.portfolio}</li>
            </a>
            <a href="#contact">
              <li className="nav-link">{text.contact}</li>
            </a>
          </ul>

          {openBurger ? (
            <AiOutlineClose
              className="burger-menu"
              onClick={() => {
                setOpenBurger(!openBurger);
              }}
            />
          ) : (
            <RxHamburgerMenu
              className="burger-menu"
              onClick={() => {
                setOpenBurger(!openBurger);
              }}
            />
          )}

          <div className="utils-nav">
            <div>
              <span className="hover-icon" onClick={changeLenguage}>{text.btnLenguage}</span>
            </div>

            {lightMode ? (
              <div className="hover-icon" onClick={setDarkTheme}>
                <FaRegMoon size={20} className="moon" />
              </div>
            ) : (
              <div className="hover-icon" onClick={setLightTheme}>
                <FaRegSun size={20} className="moon" />
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className={`menu ${openBurger ? "show" : ""}`}>
        <div className="utils-burger-menu">
          <div>
            <span className="hover-icon"  onClick={changeLenguage}>ENG</span>
          </div>

          {lightMode ? (
            <div className="hover-icon" onClick={setDarkTheme}>
              <FaRegMoon size={20} className="moon" />
            </div>
          ) : (
            <div className="hover-icon" onClick={setLightTheme}>
              <FaRegSun size={20} className="moon" />
            </div>
          )}
        </div>
        <ul>
          <a href="#portfolio">
            {" "}
            <li className="nav-link" onClick={() => setOpenBurger(false)}>{text.portfolio}</li>
          </a>
          <a href="#contact">
            <li className="nav-link" onClick={() => setOpenBurger(false)}>{text.contact}</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
