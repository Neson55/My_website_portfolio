import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Error ({isDarkMode, toggleDarkMode}) {
       
        console.log('404 Page Not Found')
        return(<div>
                        <div className="h-screen flex-col dark:bg-gray-950 m:h-full m:min-h-screen">
                        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                            <div className="h-7/10 flex flex-col items-center justify-center mb-24">
                            <p className="text-3xl font-medium dark:text-white">404 Page Not Found </p> 
                            <p className="mt-10"> <Link className="hover:underline px-12 py-3 rounded shadow bg-gray-50 active:bg-gray-500 active:text-slate-50 focus:outline-none focus:ring cursor-pointer"  to ="/" >Go home </Link></p>                                     
                            </div>
                            <Footer color={isDarkMode?'white':''}/>
                </div>  
                
           </div>
        );
}

export default Error