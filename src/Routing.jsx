import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Contact_me_page from "./pages/Contact_me_page";
import Spiner from "./components/Spiner";
import useDarkMode from "./hooks/useDarkMode";

export const Routing = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDarkMode, toggleDarkMode] = useDarkMode(prefersDarkMode)

    return (<div className={isDarkMode || !window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'white'}>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>} loader={<Spiner/>}  />
        <Route path="/about" element={<About isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} loader={<Spiner/>}/>
        <Route path="/projects" element={<Projects isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>}loader={<Spiner/>} />
        <Route path="/contact_me_page" element={<Contact_me_page isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>}loader={<Spiner/>} />
        <Route path="*" element={<Error isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>}loader={<Spiner/>} />
        <Route path="/refresh" element={<Spiner />}loader={<Spiner/>}/>
      </Routes>
    </BrowserRouter>
    </div>)
}