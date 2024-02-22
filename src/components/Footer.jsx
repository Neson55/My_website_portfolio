import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaTelegramPlane } from "react-icons/fa"

function Footer () {
         return(
            <div className="flex all-center justify-center mx-auto ">
                
                  <div className=' shadow-gray-400 p-3 cursor-pointer'>
                                            <a href='#' target='_blank' rel='noopener noreferrer'>
                                                <BsGithub size='2rem' />
                                            </a>
                                        </div>
                                        <div className='shadow-gray-400 p-3 cursor-pointer'>
                                            <a
                                                href='#'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <BsLinkedin size='2rem' />
                                            </a>
                                        </div>
                                        <div className='shadow-gray-400 p-3 cursor-pointer'>
                                            <a
                                                href='#'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <FaTelegramPlane size='2rem' />
                                            </a>
                                        </div>
            </div>
        );
}

export default Footer