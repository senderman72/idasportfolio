// DarkModeToggle.js

import React, { useState, useEffect } from "react";
import "./Darkmodetoggle.css";

const Darkmodetoggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
      document.documentElement.setAttribute("data-theme", savedDarkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));

    // Apply dark mode to the entire document
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
  };

  return (
    <div
      className={`dark-mode-toggle ${isDarkMode ? "dark" : "light"}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </div>
  );
};

export default Darkmodetoggle;
