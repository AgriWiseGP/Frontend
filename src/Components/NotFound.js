import React from 'react'
import img from '../images/404.svg'
import GoBack from './GoBack';
const NotFound =()=>{
    return(
        <>
            <GoBack/>
            <div className="w-screen h-screen flex justify-center items-center">
                <img className="w-500" src={img} alt=""/>
            </div>
        </>
    )
}
export default NotFound;