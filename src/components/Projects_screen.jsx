
function Projects_screen () {

        return(
            <div className="h-4/5 flex justify-center items-center sm:flex-col sm:h-full  sm:mr-10 sm:gap-5 ">
                <div className="flex-col  w-1/4 h-2/3 ml-10 p-4 rounded-lg justify  shadow-2xl hover:scale-105 sm:w-4/5 sm:h-4/5 dark:border-2 dark:shadow-white dark:shadow-lg" onClick={()=> window.open("https://github.com/Neson55/Post_Js")}>
                   <img src="./project_images/Post_Js.png" alt="post_js" className="flex w-full h-2/3 m:h-60 "/>
                   <p className="text-center mt-4 text-2xl font-bold m:text-lg dark:text-white">Post Js</p>
                   <br/>
                   <p className="dark:text-white m:text-sm">In this project i am used: HTML, CSS, React, axios, react-router-dom, react-transition-group.</p>
                </div>
                <div className="flex-col   w-1/4 h-2/3 ml-10 p-4 rounded-lg justify  shadow-2xl hover:scale-105 sm:w-4/5 sm:h-4/5 dark:border-2 dark:shadow-white dark:shadow-lg" onClick={()=> window.open("https://github.com/Neson55/bootstrap-5")}>
                   <img src="./project_images/Bs.png" alt="bs" className="flex w-full h-2/3 m:h-60 "/>
                   <p className="text-center mt-4 text-2xl font-bold m:text-lg dark:text-white">Botstrap 5</p>
                   <br/>
                   <p className="dark:text-white m:text-sm">In this project i am used: HTML, CSS, React, axios, react-router-dom, react-transition-group.</p>
                </div>
                 <div className="flex-col  w-1/4 h-2/3 ml-10 p-4 rounded-lg justify  shadow-2xl hover:scale-105 sm:w-4/5 sm:h-4/5  dark:border-2 dark:shadow-white dark:shadow-lg" onClick={()=> window.open("#")}>
                   <img src="./project_images/Cat (1).gif" alt="#" className="flex  w-full h-2/3 sm:h-2/3 m:h-60"/>
                   <p className="text-center mt-4 text-2xl font-bold m:text-lg dark:text-white">Coming soon</p>
                </div>
            </div>
        );
}
// src='./project_images/Post_Js.png'
export default Projects_screen