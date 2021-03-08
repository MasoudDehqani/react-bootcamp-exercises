import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { THEME_TYPE } from "../constants";

const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on context
  const themeMode = THEME_TYPE.LIGHT;

  const themContext = useContext(ThemeContext)
  
  const handleThemeChange = (e) => {
    themContext.Styles()
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
