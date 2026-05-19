import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    document.documentElement.style.scrollBehavior = "smooth";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = systemPrefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return <Home toggleTheme={toggleTheme} theme={theme} />;
}

export default App;