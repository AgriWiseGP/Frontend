import React, { useEffect } from 'react'
import imag from '../../image/wavy.webp'
import img from '../../image/mail.png'
import GoBack from '../GoBack'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EmailActivation = (props) => {
    const navigate = useNavigate();
    const params = useParams()

    const uid=params.uid
    const token= params.token

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(uid, token);
        axios.post("https://5b49-41-35-222-85.ngrok-free.app/auth/users/activation/",
        {uid, token}).then((response) => {
            console.log(response)
            navigate('/login', { replace: true })
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
                {props.t('activation.1')}
            </h2>
            
            <button
              type="submit"
              className="py-3 px-20 rounded-full text-white font-bold w-full text-center mt-10 transform hover:translate-y-1 transition-all duration-500 cursor-pointer bg-green-950 text-xl xl:text-3xl"
            >
              {props.t('activate.1')}
            </button>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default EmailActivation