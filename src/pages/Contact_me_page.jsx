
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact_me from "../components/Contact_me";

function Projects ({isDarkMode, toggleDarkMode}) {

        return(
            <div className="h-screen flex-col  dark:bg-gray-950">
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Contact_me/>
            <Footer color={isDarkMode?'white':''}/>
          </div>
        );
}

export default Projects