import React, { createContext, useState } from "react";
import { THEME_TYPE } from "../constants/index";
import Styles from "../data/Styles"

export const ThemeContext = createContext({theme: "LIGHT", setTheme: () => {}})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME_TYPE.LIGHT)

  return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
