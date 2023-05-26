import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../image/login.webp'
import imag from '../../image/wavy.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import GoBack from '../GoBack'
import axios from 'axios'
const Login = (props) => {
  const navigate = useNavigate()

  const userRef = useRef()
  // const errRef = useRef();

  const [hide, setHide] = useState(true)

  const [email, setMail] = useState('')

  const [password, setPwd] = useState('')

  const [showPass, setShowPass] =useState(false);

  const [errMsg, setErrMsg] = useState('')
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email, password])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://2d3d-156-203-27-183.ngrok-free.app/auth/jwt/create',
      {email, password}
    ).then((response) => {
      localStorage.setItem("access_token",response.data.access)
      window.localStorage.setItem('token',true);
      window.location.reload(true);
    })
    .catch((error) => {
      console.log(error)
      setHide(false)
    });
  }
  return (
    <div>
      <img
        src={imag}
        className=" fixed hidden lg:block h-full top-0 left-0 -z-50"
        style={{ width: '570px' }}
        alt=""
      />
      <div className="h-screen flex flex-col">
        <GoBack />
        <div className="grow w-full flex justify-around items-center rtl:flex-row-reverse">
          <div className="hidden md:ml-20 md:block w-50 text-center">
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
              className="p-10 lg:p-0 lg:flex flex-col justify-center items-center mx-auto w-full lg:w-500 lg:h-600"
            >
              <h2 className="my-8 font-display font-bold text-3xl text-green-950 text-center">
                {props.t('welcome.1')}
              </h2>
              <div
                className={`${!hide ? ' bg-red-100' : 'hidden'}  mt-2  w-full`}
              >
                <div
                  className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">
                    {props.t('loginErr.1')}
                  </span>
                  <span
                    className="absolute top-0 bottom-0 right-0 px-4 py-3"
                    onClick={() => {
                      setHide(true)
                    }}
                  >
                    <svg
                      className="fill-current h-6 w-6 text-red-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-lg w-100 text-green-950"
                />
                <input
                  type="email"
                  placeholder={props.t('email.1')}
                  className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-11/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  autoComplete="off"
                  onChange={(e) => setMail(e.target.value)}
                  value={email}
                  ref={userRef}
                  required
                  name='email'
                />
              </div>
              <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-xl w-100 text-green-950"
                />
                {/* <img src={lock} className="inline-block" alt=''/> */}
                <input
                  type={showPass ? "text" : "password"}
                  placeholder={props.t('password.1')}
                  className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  onChange={(e) => setPwd(e.target.value)}
                  value={password}
                  required
                  name='password'
                />
                <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} className="text-gray-700 dark:text-white lg:ltr:ml-5 lg:rtl:mr-5 cursor-pointer" onClick={()=>setShowPass(!showPass)}/>
              </div>
              <p
                className="mt-2 ltr:text-left rtl:text-right w-full cursor-pointer dark:text-white"
                onClick={() => navigate('/reset-password', { replace: true })}
              >
                {props.t('forgotPass.1')}
              </p>
              <button
                type="submit"
                className="py-3 px-20 text-lg rounded-full text-white font-bold w-full text-center mt-10 transform hover:translate-y-1 transition-all duration-500 cursor-pointer bg-green-950 xl:text-2xl"
              >
                {props.t('login.1')}
              </button>
              <div className="text-lg mt-5 dark:text-white">
                {props.t("don'tHaveAccount.1")}&nbsp;
                <span
                  className="cursor-pointer text-green-950"
                  onClick={() => navigate('/register', { replace: true })}
                >
                  {props.t('createAccount.1')}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
