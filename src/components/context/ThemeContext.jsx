import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [themeBtn, setThemeBtn] = useState(false);

  let data = { theme, setTheme, themeBtn, setThemeBtn };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
