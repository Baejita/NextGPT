"use client";

import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
const themes = {
  garden: "garden",
  coffee: "coffee",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.garden);

  const toggleTheme = () => {
    const newTheme = theme === themes.garden ? themes.coffee : themes.garden;
    document.documentElement.setAttribute("data-theme", newTheme);

    setTheme(newTheme);
  };

  return (
    <button
      className="btn btn-primary btn-outline btn-sm "
      onClick={toggleTheme}
    >
      {theme === "garden" ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
