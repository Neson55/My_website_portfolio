import useDarkMode from "../hooks/useDarkMode"
import About_screen from "../components/About_screen";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function About () {

  const [isDarkMode, toggleDarkMode] = useDarkMode(false)

        return(<div  className={isDarkMode ? 'dark' : 'white'} >
            <div className="h-screen flex-col dark:bg-slate-900" >
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <About_screen color={isDarkMode?'white':''}/>
            <Footer color={isDarkMode?'white':''}/>
          </div>
          </div>
        );
}

export default About