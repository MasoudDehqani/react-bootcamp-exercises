import React, { useState } from "react";
import LanguageContext from "../contexts/index"
import {languages} from "../contexts/index"

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(languages.English)

  function changeToPersian() {
    setLanguage(languages.Persian)
  }

  function changeToEnglish() {
    setLanguage(languages.English)
  }
  
  return <LanguageContext.Provider value={{language, changeToPersian, changeToEnglish}}>{children}</LanguageContext.Provider>;
}

export default LanguageProvider;