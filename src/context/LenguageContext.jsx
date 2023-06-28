import { createContext, useState } from "react";
import translations from "../../i18n";

export const LenguageContext = createContext()

export const LenguageProvider = ({children}) => {
    const [text] = useState(translations.es)
   
    return (
        <LenguageContext.Provider value={{
text
        }}>
            {children}
        </LenguageContext.Provider>
    )
}