// import React from 'react'
import Projects_screen from "../components/Projects_screen";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useDarkMode from "../hooks/useDarkMode"

function Projects({ isDarkMode, toggleDarkMode }) {


  return (

    <div className="h-screen flex-col dark:bg-gray-950 ">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Projects_screen />
      <div className="sm:mt-52"><Footer color={isDarkMode ? 'white' : ''} /></div>
    </div>

  );
}

export default Projects