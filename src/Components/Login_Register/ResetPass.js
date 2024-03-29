import React, {useState, useRef, useEffect} from 'react'
import imag from '../../image/wavy.webp'
import img from '../../image/reset.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons' 
import GoBack from '../GoBack'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResetPass = (props) => {
    const navigate = useNavigate()
    const mailRef = useRef();
    
    const [email, setMail] = useState('');

    useEffect(() => {
        mailRef.current.focus();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://5b49-41-35-222-85.ngrok-free.app/auth/users/reset_password/",
        {email}).then((response) => {
          console.log(response)
          navigate('/reset-password-confirm', { replace: true })
        })
        .catch((error) => {
          console.log(error)
        })
      }
    return (
    <>
      <img
        src={imag}
        className=" fixed hidden lg:block h-full top-0 left-0 -z-50"
        style={{ width: '570px' }}
        alt=""
      />
      <div className="h-screen flex flex-col">
      <GoBack/>
      <div className="grow w-full h-600 flex justify-around items-center rtl:flex-row-reverse">
        <div className="hidden md:block w-50 text-center md:ml-20">
          <img
            src={img}
            className="mx-auto"
            style={{ width: '500px' }}
            alt=""
          />
        </div>
        <div className="w-full text-center lg:w-500">
          <form
            onSubmit={handleSubmit}
            className="p-10 lg:p-0 lg:flex flex-col justify-center items-center mx-auto w-full md:w-500 lg:h-600"
          >
            {/* <img src="Assets/avatar.svg" className="w-32" /> */}
            <h2 className="mb-8 font-display font-bold text-3xl text-green-950 text-center">
                {props.t('resetPass.1')}
            </h2>
            <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-xl w-100 text-green-950"
              />
              <input
                type="email"
                placeholder={props.t('email.1')}
                className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 w-11/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white h-[28px]"
                autoComplete="off"
                onChange={(e) => setMail(e.target.value)}
                value={email}
                ref={mailRef}
                required
              />
            </div>
            <button
              type="submit"
              className="py-3 px-20 rounded-full text-white font-bold w-full text-center mt-10 transform hover:translate-y-1 transition-all duration-500 cursor-pointer bg-green-950 text-xl xl:text-3xl"
            >
              {props.t('sendCode.1')}
            </button>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}
export default ResetPass
