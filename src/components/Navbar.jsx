import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleRefresh = () => {
        // Visit page that doesn't exist
        navigate("/refresh");
        navigate(-1);
    };

    return (
        <div className='h-1/10 flex justify-between p-4'>
            <div className="size-fix ml-10" onClick={handleRefresh}>
                <Link to={"/"}><img height='45px' width='45px' src="src\assets\logo_N.jpg" alt="Logo"/></Link>
            </div>
            <div className='flex text-xl gap-4 mr-20'>
            <div onClick={handleRefresh}>
                <Link to={"/"} className='hover:underline'>Home</Link>
                </div>
                <div onClick={handleRefresh}>     
                <Link to={"/about"} className='hover:underline'>About</Link></div>
                <div onClick={handleRefresh}><Link to={"/projects"} className='hover:underline'>Projects</Link></div>
            </div>
        </div>
    );
}

export default Navbar;