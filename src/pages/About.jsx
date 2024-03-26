
import About_screen from "../components/About_screen";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function About ({isDarkMode, toggleDarkMode}) {
        return(
            <div className="h-screen flex-col dark:bg-gray-950" >
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <About_screen color={isDarkMode?'white':''}/>
            <Footer color={isDarkMode?'white':''}/>
          </div>
          
        );
}

export default About