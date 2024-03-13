import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Contact_me_page from "./pages/Contact_me_page";



export const Routing = () => {
   
    return (
        <BrowserRouter>
            <Routes>
            <Route path="*" element={<Error />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact_me_page" element={<Contact_me_page />} />

            </Routes>
        </BrowserRouter>
    )
}