import React from 'react'
import imag from '../../images/wavy.png'
import img from '../../images/Farmer-image.svg'
import { useNavigate } from 'react-router-dom'
import Googlelogin from './Google-Login'
import Facebooklogin from './Facebook-Login'

const LoginOrRegister = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <img
        src={imag}
        className=" fixed hidden lg:block h-screen top-0 left-0 -z-50"
        style={{ width: '570px' }}
        alt=""
      />
      <div className="w-full h-screen flex justify-around items-center rtl:flex-row-reverse">
        <div className="hidden md:block w-50 text-center lg:ml-20">
          <img
            src={img}
            className="mx-auto"
            style={{ width: '500px' }}
            alt=""
          />
        </div>
        <div className="w-full text-center p-10 lg:p-0 md:w-500">
          {/* <img src="Assets/avatar.svg" className="w-32" /> */}
          <h2 className="my-8 font-display font-bold text-3xl dark:text-white text-center">
            AgriWise
          </h2>
          <div
            className="shadow-lg cursor-pointer py-3 px-20 rounded-full text-white font-bold w-full text-center mt-10 transform transition-all duration-500 bg-green-950 text-xl xl:text-3xl dark:text-gray-700"
            onClick={() => navigate('/Login', { replace: true })}
          >
            {props.t('login.1')}
          </div>
          <div
            className="shadow-lg cursor-pointer py-3 px-20 rounded-full text-green-950 font-bold w-full text-center mt-5 transform transition-all duration-500 bg-gray-100 text-xl xl:text-3xl dark:bg-gray-700"
            onClick={() => navigate('/Register', { replace: true })}
          >
            {props.t('signup.1')}
          </div>
          <div className="flex justify-between items-center">
            <hr className="flex-1"/>
            <div className="p-4 dark:text-white">{props.t("or.1")}</div>
            <hr className="flex-1"/>
          </div>
          <div className="flex justify-around items-center w-full">
            <span className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-100 flex items-center justify-center cursor-pointer">
              <Googlelogin t={props.t}/>
            </span>
            <span className="h-10 w-10 rounded-full bg-facebook-100 text-white font-bold flex items-center justify-center text-xl cursor-pointer">
              <Facebooklogin t={props.t}/>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
export default LoginOrRegister
