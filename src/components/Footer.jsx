import { color } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaTelegramPlane } from "react-icons/fa"

function Footer ({color}) {
         return(
            <div className=" flex justify-center flex-shrink-0 sm:mt-4 m:items-center m:mt-[200px] ">
                
                  <div className='flex shadow-gray-400 p-3 cursor-pointer hover:scale-125'>
                                            <a href='https://github.com/Neson55' target='_blank' rel='noopener noreferrer'>
                                                <BsGithub size='2rem'color={color} />
                                            </a>
                                        </div>
                                        <div className='flex shadow-gray-400 p-3 cursor-pointer hover:scale-125'>
                                            <a
                                                href='https://www.linkedin.com/in/neson'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <BsLinkedin size='2rem'color={color} />
                                            </a>
                                        </div>
                                        <div className=' flex shadow-gray-400 p-3 cursor-pointer hover:scale-125'>
                                            <a
                                                href='https://t.me/Neson55'
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