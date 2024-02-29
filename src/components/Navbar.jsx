
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
              <Link onClick={RefreshButton} to={"/"} className = 'hover:underline font-medium text-2xl ml-10'>Neson</Link>
                <div className='flex text-xl gap-4 mr-20'>
                     
                    <Link onClick={RefreshButton} to={"/"} className='hover:underline' >Home</Link>
                    <Link onClick={RefreshButton} to={"/about"} className='hover:underline'>About</Link>
                    <Link onClick={RefreshButton} to={"/projects"} className='hover:underline'>Projects</Link>
                    
                </div>

            </div>
        );
}

export default Navbar