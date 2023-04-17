import React, {useEffect, useState, useRef} from 'react';
import img from '../../image/signUp.webp';
import imag from "../../image/wavy.webp";
// import lock from '../../images/padlock.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faLock, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons' 
import { useNavigate } from 'react-router-dom';
import GoBack from '../GoBack';
import axios from 'axios'

const REGISTER_URL = "/auth/users/";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,24}$/;
// const PWD_REGEX = /^[A-z][A-z0-9-_]{7,24}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
const Mail_REGEX = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

const Register = (props) => {
    const userRef = useRef();
    // const errRef = useRef();
    const navigate = useNavigate();
    const [username, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);
    
    const [email, setMail] = useState('');
    const [validMail, setValidMail] = useState(false);
    // const [mailFocus, setMailFocus] = useState(false);

    const [password, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    // const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    // const [matchFocus, setMatchFocus] = useState(false); 

    const [showPass, setShowPass] =useState(false);

    const [showPassTwo, setShowPassTwo] =useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidMail(Mail_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [username, email, password, matchPwd])

    const handleSubmit = async (e) => {
      e.preventDefault();
      const v1 = USER_REGEX.test(username);
      const v2 = PWD_REGEX.test(password);
      if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
      }
    
      try {
        const response = await axios.post(
          "https://5b49-41-35-222-85.ngrok-free.app/auth/users/",
          JSON.stringify({ username, email, password }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        console.log(response);
        setSuccess(true);
        setUser("");
        setPwd("");
        setMail("");
        setMatchPwd("");
        // window.localStorage.setItem('token',true);
        // window.location.reload(true);
        navigate('/email', { replace: true })
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 409) {
          setErrMsg("Username Taken");
        } else {
          setErrMsg("Registration Failed");
        }
      }
    };
    return(
  <div>
      <img
        src={imag}
        className=" fixed hidden lg:block h-full top-0 left-0 -z-50"
        style={{width: '570px'}}
        alt=''
      />
      <div className="h-screen flex flex-col">
      <GoBack/>
      <div className="grow w-full flex justify-around items-center rtl:flex-row-reverse">
        <div className="hidden md:ml-20 md:block w-50 text-center">
        <img
            src={img}
            className="mx-auto"
            style={{width: '500px'}}
            alt=""
          />
        </div>
        <div className='w-full text-center lg:w-500'>
          <form  onSubmit={handleSubmit} className="p-10 lg:p-0 lg:flex flex-col justify-center items-center mx-auto w-full lg:w-500 lg:h-600">
              <h2
                className="my-8 font-display font-bold text-3xl text-green-950 text-center"
              >
                {props.t("newAccount.1")}
              </h2>
              <div className='text-red-500'>{errMsg}</div>
              
              <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                <FontAwesomeIcon icon={faUser} className="text-xl w-100 text-green-950"/>
                <input
                  type="text"
                  placeholder={props.t("username.1")}
                  className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-11/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  ref={userRef}
                  autoComplete="off"
                  name='username'
                  onChange={(e) => setUser(e.target.value)}
                  value={username}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="userErr"
                />
              </div>
              <p  id="userErr" className={`${username && !validName ? "text-red-500" : "hidden"} mt-2 ltr:text-left rtl:text-right w-full`}>
                {props.t("usernameErr.1")}
              </p>
              <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl w-100 text-green-950"/>
                <input
                  type="email"
                  placeholder={props.t("email.1")}
                  className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-11/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  autoComplete="off"
                  onChange={(e) => setMail(e.target.value)}
                  value={email}
                  name="email"
                  required
                  aria-invalid={validMail ? "false" : "true"}
                  aria-describedby="mail"
                />
              </div>
              <p  id="mail" className={`${email && !validMail ? "text-red-500" : "hidden"} mt-2 ltr:text-left rtl:text-right w-full`}>
                {props.t("mailErr.1")}
              </p>
              <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
              <FontAwesomeIcon icon={faLock} className="text-xl w-100 text-green-950"/>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder={props.t("password.1")}
                  className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  onChange={(e) => setPwd(e.target.value)}
                  value={password}
                  name="password"
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdErr"
                />
                <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} className="text-gray-700 dark:text-white lg:ltr:ml-5 lg:rtl:mr-5 cursor-pointer" onClick={()=>setShowPass(!showPass)}/>
              </div>
              <p id="pwdErr" className={`${password && !validPwd ?  "text-red-500" : "hidden"} ltr:text-left mt-2 rtl:text-right w-full`}>
                {props.t("passErr.1")}
              </p>
              <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
              <FontAwesomeIcon icon={faLock} className="text-xl w-100 text-green-950"/>
                <input
                  type={showPassTwo ? "text" : "password"}
                  placeholder={props.t("confirmPass.1")}
                  className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  name="match password"
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmErr"
                />
                <FontAwesomeIcon icon={showPassTwo ? faEye : faEyeSlash} className="text-gray-700 dark:text-white lg:ltr:ml-5 lg:rtl:mr-5 cursor-pointer" onClick={()=>setShowPassTwo(!showPassTwo)}/>
              </div>
              <p id="confirmErr" className={`${matchPwd && !validMatch ?  "text-red-500" : "hidden"} w-full ltr:text-left rtl:text-right mt-2`}>
                  {props.t("identical.1")}
              </p>
              <button type="submit" disabled={!validName || !validMail || !validPwd || !validMatch ? true : false}
                className="py-3 px-20 rounded-full text-white font-bold w-full text-center mt-10 transform hover:translate-y-1 transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:pointer-events-none bg-green-950 text-xl xl:text-3xl">{props.t("signup.1")}
              </button>
              <div className='lg mt-5 dark:text-white' >{props.t("haveAccount.1")}&nbsp; <span className='cursor-pointer text-green-950' onClick={()=>navigate("/login",{replace:true})}>{props.t("login.1")}</span></div>
            </form>
        </div>
      </div>
      </div>
  </div>
  ) 
  }
export default Register;