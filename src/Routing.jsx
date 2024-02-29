import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Error from "./pages/Error";



export const Routing = () => {
   
    return (
        <BrowserRouter>
            <Routes>
            <Route path="*" element={<Error />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />

            </Routes>
        </BrowserRouter>
    )
}