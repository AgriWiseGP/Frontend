import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons' 
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const GoBack = () => {
  const { t } = useTranslation()
  const navigate = useNavigate();

  return (
    <div  className="mt-8 ml-8 top-8 left-8 text-green-950 lg:text-white text-2xl flex justify-space-between items-center rtl:flex-row-reverse">
        <FontAwesomeIcon icon={faAngleLeft} className="mr-2 cursor-pointer" onClick={() => navigate('/LoginOrRegister', { replace: true })}/>
        <span className="cursor-pointer" onClick={() => navigate('/', { replace: true })}>{t("back.1")}</span>
    </div>
  )
}

export default GoBack