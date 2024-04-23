import { useState } from "react";

function useDarkMode() {
  // Retrieve the theme preference from localStorage
  const storedTheme = localStorage.getItem("theme");
  
  // Initialize the state based on the stored theme preference
  const [isDarkMode, setDarkMode] = useState(storedTheme === "dark");

  // Define a function to toggle the theme
  const toggleDarkMode = () => {
    // Toggle the state
    setDarkMode(prevState => {
      const newTheme = !prevState ? "dark" : "light";
      // Store the new theme preference in localStorage
      localStorage.setItem("theme", newTheme);
      return !prevState;
    });
  };

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
