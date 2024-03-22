import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Main_screen({ variant }) {
    const [asyncResult, setAsyncResult] = useState(null);
    const [isTyping, setIsTyping] = useState(true);

    const asyncFunction = async () => {
        await new Promise(resolve => setTimeout(resolve));  
        return (
            <motion.div
                className="flex-fixed justify-between mx-auto mt-10"
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
                    },
                }}
            >
                <Link
                    to="/contact_me_page"
                    className='sm:mr-5 mr-10 px-12 py-3 text-sm font-medium rounded shadow bg-gray-50 active:bg-gray-500 active:text-slate-50 focus:outline-none focus:ring cursor-pointer hover:bg-gray-100'
                >
                    Contact Me
                </Link>
                <a
                    className='px-12 py-3 text-sm font-medium rounded shadow bg-gray-50 active:bg-gray-500 active:text-slate-50 focus:outline-none focus:ring cursor-pointer hover:bg-gray-100'
                >
                    My resume
                </a>
            </motion.div>
        );
    };

    useEffect(() => {
        asyncFunction().then(result => {
            setAsyncResult(result);
        });

        // Add event listener to stop typing animation when user clicks anywhere on the screen
        document.addEventListener('click', stopTyping);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            document.removeEventListener('click', stopTyping);
        };
    }, []);

    const stopTyping = () => {
        setIsTyping(false);
    };

    return (
        <div className="h-4/5 flex justify-center items-center ">
            <div className="text-3xl text-center mx-auto my-auto pb-10">
                <div className='flex-fixed'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Neson')
                                .pauseFor(1000)
                                .typeString('<br/>')
                                .typeString("I'm Professional Web Developer")
                                .pauseFor(1000)
                                .changeDeleteSpeed(20)
                                .deleteChars(26)
                                .pauseFor(1000)
                                .typeString("Junior Web Developer")
                                .callFunction(() => {
                                    setIsTyping(false);
                                })
                                .start()
                        }}
                    />
                </div>
                <div>{!isTyping && asyncResult}</div>
                {console.log(isTyping)}
            </div>
        </div>
    );
}

export default Main_screen;
