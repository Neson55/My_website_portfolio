
import { motion } from 'framer-motion';
import Skils from "./Skils";
import { SiWhitesource } from 'react-icons/si';


function About_screen({color}) {

  return (
    <div className="h-4/5 flex-col sm:mb-0 ">
      <div className="flex h-1/2 justify-center  ">
        <div className="flex w-2/3 justify-center items-center gap-10 sm:flex-row sm:w-full sm:gap-0">
          <motion.div

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeIn"
            }}
            className=" box flex-col w-1/2 sm:ml-5 ">
            <p className="text-5xl font-bold flex justify-end sm:text-3xl m:text-4xl dark:text-white"> Hello, I'm Neson</p>
            <br />
            <br />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeIn"
              }}
              className="sm:w-full sm:mt-16">
              <p className="text-5xl font-bold flex justify-end sm:text-3xl m:text-4xl dark:text-white">I am Web Developer</p>
            </motion.div>
          </motion.div>
          <motion.div

            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: "easeIn"
            }}
            className=" box flex-col w-1/2  mt-3 sm:mr-2 ">
            <p className="text-base sm:text-sm dark:text-white">I work for a large automotive company. Most of my experience is related to web development,
              which I got from YouTube tutorial videos, reading documentation and of course solving problems. </p>
            <br />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 2,
                ease: "easeIn"
              }}>
              <p className="text-base sm:text-sm dark:text-white"> I like to understand new technologies in my free time.
                In addition to programming, I enjoy traveling, reading manga and playing sports.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="flex h-1/2 justify-center ml-32 sm:flex-col sm:h-52 sm:ml-0 sm:mt-24 sm:mb-40  ">
        {window.innerWidth <= 700?<Skils sizeIcon={45} color={color}/>:window.innerWidth<=1400?<Skils sizeIcon={53} color={color}/>: <Skils sizeIcon={90} color={color}/>}
        {}
      </div>
    </div>
  );
}

export default About_screen