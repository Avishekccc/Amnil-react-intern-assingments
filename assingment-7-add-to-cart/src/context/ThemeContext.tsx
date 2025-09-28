import { createContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark"

type themeType = {
    theme: Theme; 
    toggleTheme: ()=> void
}

export const ThemeContext = createContext<themeType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
     const saved = localStorage.getItem("theme") as Theme | null;
    
  

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

    useEffect(() => {
      if (saved) {
          setTheme(saved)
          document.documentElement.setAttribute('data-theme',saved)
      }
  }, [])

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}