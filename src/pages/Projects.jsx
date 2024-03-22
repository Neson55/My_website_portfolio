// import React from 'react'
import Projects_screen from "../components/Projects_screen";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Projects () {

        return(
            <div className="h-screen flex-col ">
            <Navbar />
            <Projects_screen/>
            <div className="sm:mt-52"><Footer/></div>
          </div>
        );
}

export default Projects