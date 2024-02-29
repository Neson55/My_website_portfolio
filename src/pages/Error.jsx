import { Link } from "react-router-dom";

function Error () {

        return(<div>
                        <div className="h-screen flex justify-center items-center  ">
                            <div className="text-center">
                            <p className="text-3xl font-medium">404 Page Not Found </p> 
                            <p className="mt-10"> <Link className="hover:underline px-12 py-3 rounded shadow bg-gray-50 active:bg-gray-500 active:text-slate-50 focus:outline-none focus:ring cursor-pointer"  to ="/" >Go home </Link></p>
                            </div>
                </div>  
            
           </div>
        );
}

export default Error