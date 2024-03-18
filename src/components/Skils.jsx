import React from 'react'
import { FaReact } from "react-icons/fa";

function Skils () {

        return(
            <div className='flex gap-10'>
                <div className='flex-col'>
                <FaReact  size={75}/>
                <p className='text-xl bg-red-500'>React</p>
                </div>

                <div className='flex-col'>
                <FaReact  size={75}/>
                <p className='text-xl bg-red-500'>React</p>
                </div>

            </div>
        );
}

export default Skils