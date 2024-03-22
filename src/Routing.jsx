import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Contact_me_page from "./pages/Contact_me_page";
import Spiner from "./components/Spiner";

export const Routing = () => {
   
    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} loader={<Spiner/>}  />
        <Route path="/about" element={<About />} loader={<Spiner/>}/>
        <Route path="/projects" element={<Projects />}loader={<Spiner/>} />
        <Route path="/contact_me_page" element={<Contact_me_page />}loader={<Spiner/>} />
        <Route path="*" element={<Error />}loader={<Spiner/>} />
        <Route path="/refresh" element={<Spiner />}loader={<Spiner/>}/>
      </Routes>
    </BrowserRouter>
    )
}