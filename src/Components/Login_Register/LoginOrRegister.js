import React from 'react'
import imag from '../../images/wavy.png'
import img from '../../images/farmer.svg'
import { useNavigate } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
const LoginOrRegister = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <img
        src={imag}
        className=" fixed hidden lg:block h-full top-0 left-0 -z-50"
        style={{ width: '570px' }}
        alt=""
      />
      <div className="w-full h-screen flex justify-around items-center rtl:flex-row-reverse">
        <div className="hidden md:block w-50 text-center">
          <img
            src={img}
            className="mx-auto"
            style={{ width: '500px' }}
            alt=""
          />
        </div>
        <div className="w-full text-center p-10 lg:p-0 lg:w-500">
          {/* <img src="Assets/avatar.svg" className="w-32" /> */}
          <h2 className="my-8 font-display font-bold text-3xl text-green-950 text-center">
            AgriWise
          </h2>
          <div
            className="shadow-lg cursor-pointer py-3 px-20 rounded-full text-white font-bold w-full text-center mt-10 transform transition-all duration-500 bg-green-950 text-xl xl:text-3xl"
            onClick={() => navigate('/Login', { replace: true })}
          >
            {props.t('login.1')}
          </div>
          <div
            className="shadow-lg cursor-pointer py-3 px-20 rounded-full text-green-950 font-bold w-full text-center mt-5 transform transition-all duration-500 bg-gray-100 text-xl xl:text-3xl"
            onClick={() => navigate('/Register', { replace: true })}
          >
            {props.t('signup.1')}
          </div>
        </div>
      </div>
    </>
  )
}
export default LoginOrRegister
