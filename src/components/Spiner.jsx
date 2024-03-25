import React from 'react'
import CircleLoader from "react-spinners/CircleLoader"
function Spiner () {

        return(
            <div className="flex justify-center items-center h-screen">          
{window.innerWidth <= 767?<CircleLoader size="50" color="#777875" />:<CircleLoader size="75px" color="#777875" />}
            </div>
        );
}

export default Spiner