
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact_me from "../components/Contact_me";

function Projects ({isDarkMode, toggleDarkMode}) {

        return(
            <div className="h-screen flex-col sm:h-full dark:bg-gray-950  m:h-full m:min-h-screen sm:min-h-screen s:min-h-screen s:h-full">
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Contact_me/>
            <Footer color={isDarkMode?'white':''}/>
          </div>
        );
}

export default Projects