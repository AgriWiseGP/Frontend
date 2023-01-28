import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import eg from "../../images/eg1.jpeg"
import logo from '../../images/DOC.svg'
import united from '../../images/united-states.png'
import Toggler from '../Toggler'
const Header = (props) => {
  let Links = [
    { name: props.t("home.1") , section:"home"},
    { name: props.t("feature.1"), section:"features"},
    { name: props.t("about.1"), section:"home" },
    { name: props.t("contact.1"), section:"home"},
  ]
  const [open, setOpen] = useState(false)
  const onLogoutSuccess = () => {
    console.log('you have signed out successfully')
    window.localStorage.setItem('token',false);
    window.location.reload(true);}
    useEffect(() => {
        if( document.querySelectorAll(".active").length===0){
        document.querySelectorAll("li")[0].classList.add("active")}
    })
    const handleActive=(e)=>{
        document.querySelectorAll("li").forEach(link =>{
            document.querySelectorAll(".active").forEach(ele=>{
                ele.classList.remove('active')
            })
            e.target.classList.add('active')
    })}
  return (
    <div className="shadow-md sticky w-full top-0 left-0 z-[999]">
      <div className="px-4 py-2 flex items-center justify-between rtl:flex-row-reverse bg-[#F7F2EC] dark:bg-gray-800 w-full">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-black dark:text-white">
          <img src={logo} className="md:h-13 h-14 flex-none" alt="" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl cursor-pointer md:hidden "
        >
           <FontAwesomeIcon
                  icon={open ? faXmark : faBars}
                  className="text-green-950"
                />
        </div>
        <ul
          className={`items-start bg-[#F7F2EC] dark:bg-gray-800 w-full md:w-auto left-0 top-16 md:top-0 absolute md:relative justify-between gap-2 flex-col md:flex-row md:items-center ${
            open? 'flex' : 'hidden'
          } md:flex`} 
        >
          {Links.map((link) => (
            <li key={link.name} className='text-[20px] p-2 w-full md:w-auto text-black dark:text-white cursor-pointer hover:bg-green-950 transition-all duration-500' onClick={(e)=>{e.preventDefault();
             document.getElementById(link.section).scrollIntoView({
                behavior:'smooth',
            }) ;setOpen(!open);handleActive(e)}}>
              
                {link.name}
            </li>
          ))}
          <li className="flex items-center dark:text-white gap-1 p-2 ltr:flex-row-reverse cursor-pointer" onClick={() => {
          props.lang === 'ar' ? props.handleClick('en') : props.handleClick('ar')
        }}>
            <span className="text-xl inline-block">{props.t("lang.1")}</span>
            <img
              src={props.lang === 'ar'? eg : united}
              className="w-[27px] h-[27px] rounded-full inline-block"
              alt=""
            />
          </li>
          <li className="p-2">
            <div className="duration-500  h-[21px]">
                <Toggler/>
            </div>
          </li>
          <button onClick={onLogoutSuccess} className="bg-[#17A267] m-2 rtl:mr-2 md:rtl:mr-0 md:m-0 w-24 h-11 text-[15px] text-white duration-500 px-6 py-2 rtl:p-0 hover:bg-green-400 rounded ">
          {props.t("logout.1")}
          </button>
        </ul>
      </div>
    </div>
  )
}
export default Header