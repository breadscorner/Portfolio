import { useTheme } from "next-themes";

export const useThemeActions = () => {
  const { setTheme } = useTheme();

  const handleLightTheme = () => {
    console.log("Setting light theme");
    setTheme("light");
  };

  const handleDarkTheme = () => {
    console.log("Setting dark theme");
    setTheme("dark");
  };

  return { handleLightTheme, handleDarkTheme };
};

