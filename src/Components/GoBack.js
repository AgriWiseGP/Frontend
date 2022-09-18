import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons' 
import { useNavigate } from 'react-router-dom'

const GoBack = (props) => {
  const navigate= useNavigate();

  return (
    <div  className="fixed top-8 left-8 text-green-950 lg:text-white text-2xl flex justify-space-between items-center rtl:flex-row-reverse">
        <FontAwesomeIcon icon={faAngleLeft} className="mr-2 cursor-pointer" onClick={()=>navigate(-1)}/>
        <span>{props.t("back.1")}</span>
    </div>
    
  )
}

export default GoBack