import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
