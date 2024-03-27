import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeSwitch } from 'react-toggle-dark-mode';



function Navbar({isDarkMode, toggleDarkMode}) {
    const navigate = useNavigate();

    const handleRefresh = () => {
        // Visit page that doesn't exist
        navigate("/refresh");
        navigate(-1);
    };
    

    return (
       
        <div className='h-1/10 flex justify-between p-4 sm:h-1/10 sm:flex sm:justify-between '>
            <div className="size-fix ml-10 sm:ml-1" onClick={handleRefresh}>
                <Link to={"/"}><img height='45px' width='45px' src={isDarkMode ?"./logo/logoNDark.png": "./logo/logo_N.svg"  }  alt="Logo"/></Link>
            </div>
            <div className='flex text-xl gap-4 mr-20 sm:mr-2 sm:mt-1'>
                <div onClick={handleRefresh}><Link to={"/"} className='hover:underline dark:text-white'>Home</Link></div>  
                <div onClick={handleRefresh}><Link to={"/about"} className='hover:underline dark:text-white'>About</Link></div>
                <div onClick={handleRefresh}><Link to={"/projects"} className='hover:underline dark:text-white'>Projects</Link></div>
                    <DarkModeSwitch
                         style={{ marginBottom: '2rem' }}
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={25}
                    />
            </div>
        </div>
       
    );
}

export default Navbar;