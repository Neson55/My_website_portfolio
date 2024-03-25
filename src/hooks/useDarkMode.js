import { useState } from "react";

function useDarkMode(initialState = false) {
  const [isDarkMode, setDarkMode] = useState(initialState);

  const toggleDarkMode = () => {
    setDarkMode(prevState => !prevState);
  };

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;