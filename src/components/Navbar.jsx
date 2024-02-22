
// import { Link } from 'react-router-dom'

function Navbar () {

        return(
            <div className='flex justify-between items-center p-4 '>
                <a  className = 'font-bold text-2xl ml-10' href='#'>Neson</a>
                <div className='flex text-xl gap-4 mr-10'> 
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Projects</a>
                </div>

            </div>
        );
}

export default Navbar