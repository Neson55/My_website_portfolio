import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Main_screen from "../components/Main_screen"

export const Home = ({ isDarkMode, toggleDarkMode })=> {
  
        return(
            <div className="h-screen flex-col dark:bg-gray-950 m:h-full m:min-h-screen">
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
            <Main_screen variant='home'/>
            
        <Footer color={isDarkMode ? 'white' : ''} />
      </div>
    
        );
}

export default Home