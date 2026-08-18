import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check saved local storage or default to dark
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const savedTheme = window.localStorage.getItem("portfolio_theme");
        if (savedTheme === "light" || savedTheme === "dark") {
          return savedTheme;
        }
      }
    } catch (e) {
      // ignore storage access errors
    }

    // Check system preference safely
    try {
      if (
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function"
      ) {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
        if (mediaQuery && mediaQuery.matches) {
          return "light";
        }
      }
    } catch (e) {
      // ignore matchMedia errors
    }

    return "dark";
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
      }
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem("portfolio_theme", theme);
      }
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
