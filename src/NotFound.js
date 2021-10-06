import React from 'react'
import { Link } from 'react-router-dom';

const Notfound = () => {
    document.title = "NOT FOUND";
    return (
        <>
            <div className="flex items-center justify-center m-10 font-bold font-sans text-gray-600	text-4xl">
                <h1>NOT FOUND 404</h1>
                
            </div>
            <Link className="flex items-center justify-center m-10 font-bold font-sans text-gray-600	text-2xl" to='/'>HOME</Link>
        </>
        
    )
}
export default Notfound;