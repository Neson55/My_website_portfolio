
// import { Link } from 'react-router-dom'


import { Link, useNavigate } from "react-router-dom";

function Navbar () {
    const RefreshButton= ()=>{

        const navigate = useNavigate();
        const softRefreshPage = () =>{
            // visit page that doesn't exist
            navigate("/refresh");
            navigate(-1);
        }
        return (
            softRefreshPage
        )
         
    }
        return(
            <div className='h-1/10 flex justify-between p-4 '>
              <Link onClick={RefreshButton} to={"/"} className = 'size-fix ml-10'><img height= '45px' width= '45px' src="src\assets\logo_N.jpg"/></Link>
                <div className='flex text-xl gap-4 mr-20'>
                     
                    <Link to={"/"} className='hover:underline' >Home</Link>
                    <Link to={"/about"} className='hover:underline'>About</Link>
                    <Link to={"/projects"} className='hover:underline'>Projects</Link>
                    
                </div>

            </div>
        );
}

export default Navbar