import React from "react";
import { useThemeActions } from "./actions";

const ThemeButton = () => {
  const { handleLightTheme, handleDarkTheme } = useThemeActions();

  return (
    <div className="bg-slate-900">
      <button onClick={handleLightTheme}>Light</button>
      <button onClick={handleDarkTheme}>Dark</button>
    </div>
  );
};

export default ThemeButton;
