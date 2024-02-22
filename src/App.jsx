import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (<div> 
    <Navbar />
    <div className="h-300 flex justify-center items-center bg-gray-100 ">
      <div className=" text-center mx-auto" >
        <h1>
          Hello
        </h1>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default App
