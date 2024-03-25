// import React from 'react'
import Projects_screen from "../components/Projects_screen";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useDarkMode from "../hooks/useDarkMode"

function Projects () {

  const [isDarkMode, toggleDarkMode] = useDarkMode(false)
        return(
          <div  className={isDarkMode ? 'dark' : 'white'} >
            <div className="h-screen flex-col dark:bg-slate-900 ">
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}   />
            <Projects_screen/>
            <div className="sm:mt-52"><Footer color={isDarkMode?'white':''}/></div>
          </div>
          </div>
        );
}

export default Projects