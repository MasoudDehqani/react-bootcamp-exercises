import {createContext} from "react";

export const languages = {
  Persian: {
    language: "Persian",
    words: {
      home: "خانه",
      events: "رویداد ها",
      aboutUs: "درباره ما",
      contactUs: "تماس با ما",
      language: "زبان"
    }
  },
  English: {
    language: "English",
    words: {
      home: "Home",
      events: "Events",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      language: "Language"
    }
  }
}

const LanguageContext = createContext({language: languages.English, changeToPersian: () => {}, changeToEnglish: () => {}})


export default LanguageContext