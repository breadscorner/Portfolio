'use'

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeButton = () => {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

// After mounting, we have access to the theme
useEffect(() => {
 setMounted(true);
}, []);

// Avoid showing the button until we know the current theme to prevent flickering
if (!mounted) {
 return null;
}

// Function to toggle theme, which checks if the theme is dark or light
// and then sets the theme to the opposite state.
const toggleTheme = () => {
 const nextTheme = theme === 'dark' ? 'light' : 'dark';
 setTheme(nextTheme);
 console.log(`Switched to ${nextTheme} mode`);
};

return (
 <button onClick={toggleTheme} aria-label="Toggle Theme">
   {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
 </button>
);
};

export default ThemeButton;