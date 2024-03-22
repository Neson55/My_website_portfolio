
function Projects_screen () {

        return(
            <div className="h-4/5 flex justify-center items-center sm:flex-col sm:h-full sm:mt-56 sm:mr-10 sm:gap-5 ">
                <div className="flex-col  w-1/4 h-2/3 ml-10 p-4 rounded-lg justify  shadow-2xl hover:scale-105 sm:w-4/5 sm:h-4/5 " onClick={()=> window.open("#")}>
                   <img src="./project_images/Post_Js.png" alt="post_js" className="flex w-full h-2/3 "/>
                   <p className="text-center mt-4 text-2xl font-bold">Post Js</p>
                   <br/>
                   <p>In this project i am used: HTML, CSS, React, axios, react-router-dom, react-transition-group.</p>
                </div>
                <div className="flex-col   w-1/4 h-2/3 ml-10 p-4 rounded-lg justify  shadow-2xl hover:scale-105 sm:w-4/5 sm:h-4/5" onClick={()=> window.open("#")}>
                   <img src="./project_images/Bs.png" alt="bs" className="flex w-full h-2/3 "/>
                   <p className="text-center mt-4 text-2xl font-bold">Botstrap 5</p>
                   <br/>
                   <p>In this project i am used: HTML, CSS, React, axios, react-router-dom, react-transition-group.</p>
                </div>
                 <div className="flex-col  w-1/4 h-2/3 ml-10 p-4 rounded-lg justify  shadow-2xl hover:scale-105 sm:w-4/5 sm:h-4/5 mb-4" onClick={()=> window.open("#")}>
                   <img src="./project_images/Cat (1).gif" alt="#" className="flex  w-full h-2/3 sm:h-2/3"/>
                   <p className="text-center mt-4 text-2xl font-bold">Coming soon</p>
                </div>
            </div>
        );
}
// src='./project_images/Post_Js.png'
export default Projects_screen