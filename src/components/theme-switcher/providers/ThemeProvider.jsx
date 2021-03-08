import React, { createContext } from "react";
import Styles from "../data/Styles"

export const ThemeContext = createContext(Styles)

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={Styles}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
