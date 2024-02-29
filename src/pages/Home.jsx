import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Main_screen from "../components/Main_screen"

export const Home = ()=> {

        return(
            <div className="h-screen flex-col ">
            <Navbar />
            <Main_screen/>
            <Footer />
          </div>
        );
}

export default Home