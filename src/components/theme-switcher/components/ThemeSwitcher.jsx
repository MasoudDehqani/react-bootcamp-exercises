import React, { useContext, useState } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { THEME_TYPE } from "../constants";

const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on context
  const themeMode = THEME_TYPE.LIGHT;

  const themContext = useContext(ThemeContext)
  const [checked, setChecked] = useState(false)
  
  const handleThemeChange = (e) => {
    setChecked(!checked)
    themContext.setTheme( prev => {
      if (checked) return THEME_TYPE.LIGHT
      return THEME_TYPE.DARK
    })
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={checked}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
