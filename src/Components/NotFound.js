import React from 'react'
import img from '../images/404.svg'
const NotFound =()=>{
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <img className="w-500" src={img} alt=""/>
        </div>
    )
}
export default NotFound;