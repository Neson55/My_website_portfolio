// import React from 'react'
import Projects_screen from "../components/Projects_screen";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useDarkMode from "../hooks/useDarkMode"

function Projects({ isDarkMode, toggleDarkMode }) {


  return (

    <div className="h-screen flex-col dark:bg-gray-950 sm:h-full tall:h-full m:h-full m:min-h-screen">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Projects_screen />
      
        <Footer color={isDarkMode ? 'white' : ''} />
    
      
    </div>

  );
}

export default Projects