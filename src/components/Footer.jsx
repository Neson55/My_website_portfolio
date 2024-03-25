import { color } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaTelegramPlane } from "react-icons/fa"

function Footer ({color}) {
         return(
            <div className=" flex justify-center flex-shrink-0 dark:bg-slate-900">
                
                  <div className='flex shadow-gray-400 p-3 cursor-pointer hover:scale-125'>
                                            <a href='#' target='_blank' rel='noopener noreferrer'>
                                                <BsGithub size='2rem'color={color} />
                                            </a>
                                        </div>
                                        <div className='flex shadow-gray-400 p-3 cursor-pointer hover:scale-125'>
                                            <a
                                                href='#'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <BsLinkedin size='2rem'color={color} />
                                            </a>
                                        </div>
                                        <div className=' flex shadow-gray-400 p-3 cursor-pointer hover:scale-125'>
                                            <a
                                                href='#'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <FaTelegramPlane size='2rem' color={color} />
                                            </a>
                                        </div>
            </div>
        );
}

export default Footer