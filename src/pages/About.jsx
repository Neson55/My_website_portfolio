// import React from 'react'

import About_screen from "../components/About_screen";
import Footer from "../components/Footer";
import Main_screen from "../components/Main_screen";
import Navbar from "../components/Navbar";

function About () {

        return(
            <div className="h-screen flex-col ">
            <Navbar />
            <About_screen />
            <Footer />
          </div>
        );
}

export default About