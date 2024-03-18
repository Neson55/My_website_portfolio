import Contact_me from "./Contact_me";
import { motion } from 'framer-motion';
import Skils from "./Skils";


function About_screen() {

    return (
        <div className="h-4/5 flex-col  bg-red-100 ">
            <div className="flex h-1/2 justify-center bg-green-500">
                <div className="flex w-2/3 justify-center items-center bg-red-100">
                <motion.div
      
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: "easeIn"
      }}
    className=" box flex-col w-1/2 bg-blue-300">
                        <p className="text-2xl"> Hello, I'm Neson</p>
                        <br />
                        <p className="text-2xl">I am Web Developer</p>
                    </motion.div>
                    <motion.div
      
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: "easeIn"
      }}
    className=" box flex-col w-1/2 bg-yellow-300 mt-3">
                        <p className="text-xs">I work for a large automotive company. Most of my experience is related to web development,
                            which I got from YouTube tutorial videos, reading documentation and of course solving problems. </p>
                        <br/>
                        <p className="text-xs"> I like to understand new technologies in my free time. 
                        In addition to programming, I enjoy traveling, reading manga and playing sports.</p>
                    </motion.div>
                </div>
            </div>
            <div className="flex h-1/2 justify-center bg-gray-500">
                <div className="flex-col w-2/3 justify-center items-center bg-slate-100">
                <motion.div
      
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1.5,
        ease: "easeIn"
      }}
    className=" box flex justify-center text-3xl  bg-red-800 ">Skils</motion.div>
                
                <Skils/>
                  
                </div>
            </div>
        </div>
    );
}

export default About_screen