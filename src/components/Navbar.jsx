
// import { Link } from 'react-router-dom'

function Navbar () {

        return(
            <div className='h-1/10 flex justify-between p-4 '>
                <a  className = 'font-bold text-2xl ml-10' href='#'>Neson</a>
                <div className='flex text-xl gap-4 mr-10'> 
                    <a className='hover:underline' href='#'>Home</a>
                    <a className='hover:underline'href='#'>About</a>
                    <a className='hover:underline'href='#'>Projects</a>
                </div>

            </div>
        );
}

export default Navbar