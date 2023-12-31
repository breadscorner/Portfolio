'use client'

import React from "react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  // console.log('Theme:', theme);

  return (
    <div className="h-8 w-8 flex rounded-full md:p-0 ml-2 text-white bg-gray-800">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <p>Light</p> : <p>Dark</p>}
      </button>
    </div>
  );
};

export default ThemeButton;
