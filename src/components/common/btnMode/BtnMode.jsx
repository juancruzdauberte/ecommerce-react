import { DarkModeWidget } from "../widgets/darkModeWidget/DarkModeWidget";
import { LightModeWidget } from "../widgets/lightModeWidget/LightModeWidget";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import "./btnMode.css";

export const BtnMode = () => {
  const { theme, setTheme, themeBtn, setThemeBtn } = useContext(ThemeContext);

  const handleClickTheme = () => {
    setThemeBtn(!themeBtn); //interruptor
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); //estado para indicar la clase en hoja de estilo en index.css
    console.log(theme);
  };

  return (
    <button onClick={handleClickTheme} className={`btn-mode-${theme}`}>
      {theme === "light" ? <DarkModeWidget /> : <LightModeWidget />}
      {/* Si el tema es light que muestre el icono de dark y asi viceversa */}
    </button>
  );
};
