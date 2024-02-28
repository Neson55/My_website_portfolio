import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

function Main_screen() {

    return (
        <div className="h-4/5 flex justify-center items-center ">
            <div className=" text-3xl text-center mx-auto" >
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Neson')
                            .pauseFor(1000)
                            .typeString('<br/>')                            
                            .typeString("I'm Professional Web Developer")                            
                            .deleteChars(26)
                            .pauseFor(1000)
                            .typeString("Junior Web Developer")
                            .start();
                    }}
                // options={{
                //     autoStart: true,
                //     loop: true,
                // }}
                />
                <motion.div className="flex justify-between mx-auto mt-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            scale: 0.8,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: 15,
                            },
                        },
                    }}
                >
                    <a
                        className='px-12 py-3 text-sm font-medium rounded shadow bg-gray-50 active:bg-gray-900 active:text-slate-50 focus:outline-none focus:ring'
                    >
                        Contact Me
                    </a>
                    <a
                        className='px-12 py-3 text-sm font-medium rounded shadow bg-gray-50 active:bg-gray-900 active:text-slate-50 focus:outline-none focus:ring'
                    >
                        My resume
                    </a>
                </motion.div>

            </div>
        </div>
    );
}

export default Main_screen