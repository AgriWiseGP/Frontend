import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import eg from '../../image/eg1.webp'
import logo from '../../image/DOC0.webp'
import united from '../../image/united-states.webp'
import Toggler from '../Toggler'
import { auth } from '../Login_Register/PrivateRoutes'
import { useNavigate, Link } from 'react-router-dom'

const Header = (props) => {
  let Links = [
    { name: props.t('home.1'), section: '/#home' },
    { name: props.t('feature.1'), section: '/#features' },
    { name: props.t('about.1'), section: '/#about' },
    { name: props.t('contact.1'), section: '/#contact' },
  ]
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const onLogoutSuccess = () => {
    auth.token
      ? window.localStorage.setItem('token', false)
      : navigate('/login-register', { replace: true })
    window.location.reload(true)
  }
  useEffect(() => {
    document.getElementsByClassName(props.ac)[0].classList.add('active')
    if (document.querySelectorAll('.active').length === 0) {
      document.querySelectorAll('li')[0].classList.add('active')
    } else if (document.querySelectorAll('.active').length > 1) {
      document.querySelectorAll('li')[0].classList.remove('active')
    }
  })
  const handleActive = (e) => {
    document.querySelectorAll('li').forEach((link) => {
      document.querySelectorAll('.active').forEach((ele) => {
        ele.classList.remove('active')
      })
      e.target.parentElement.classList.add('active')
    })
  }
  return (
    <div className="shadow-md sticky w-full top-0 left-0 z-[999]">
      <div className="px-4 py-2 flex items-center justify-between rtl:flex-row-reverse bg-[#F7F2EC] dark:bg-gray-800 w-full">
        <div className="font-bold text-2xl flex items-center text-black dark:text-white">
          <img src={logo} className="h-10 flex-none" alt="" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl cursor-pointer md:hidden h-[24px]"
        >
          <FontAwesomeIcon
            icon={open ? faXmark : faBars}
            className="text-green-950"
          />
        </div>
        <ul
          className={`items-start bg-[#F7F2EC] dark:bg-gray-800 w-full md:w-auto left-0 top-[55px] md:top-0 absolute md:relative justify-between gap-2 flex-col md:flex-row md:items-center ${
            open ? 'flex' : 'hidden'
          } md:flex`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className={`${link.section.slice(
                2,
              )} text-[20px] w-full md:w-auto rounded-sm cursor-pointer hover:bg-green-950 transition-all duration-500`}
              onClick={(e) => {
                e.preventDefault()
                setOpen(!open)
                handleActive(e)
              }}
            >
              <Link to={link.section} className="link text-gray-800 dark:text-white w-full inline-block p-2 hover:px-4 transition-all duration-500">
                {link.name}
              </Link>
            </li>
          ))}
          <li
            className="flex items-center text-gray-800 dark:text-white gap-1 p-2 ltr:flex-row-reverse cursor-pointer"
            onClick={() => {
              props.lang === 'ar'
                ? props.handleClick('en')
                : props.handleClick('ar')
            }}
          >
            <span className="text-xl inline-block">{props.t('lang.1')}</span>
            <img
              src={props.lang === 'ar' ? eg : united}
              className="w-[27px] h-[27px] rounded-full inline-block"
              alt=""
            />
          </li>
          <li className="p-2">
            <div className="duration-500  h-[21px]">
              <Toggler />
            </div>
          </li>
          <button
            onClick={onLogoutSuccess}
            className="bg-[#17A267] m-2 rtl:mr-2 md:rtl:mr-0 md:m-0 w-24 h-11 text-[15px] text-white duration-500 px-6 py-2 rtl:p-0 hover:bg-green-400 rounded "
          >
            {auth.token ? props.t('logout.1') : props.t('login.1')}
          </button>
        </ul>
      </div>
    </div>
  )
}
export default Header
