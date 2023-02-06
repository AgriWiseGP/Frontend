import React, { useState ,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import sun from '../image/01d.webp'

const Toggler = () => {
    const [dark, setDark]= useState(JSON.parse(window.localStorage.getItem("dark") || false))

    useEffect(()=>{
      window.localStorage.setItem("dark", JSON.stringify(dark))
      let ourTheme = dark ? "dark"  : "light"
      let themeToggler = ourTheme === 'light' ? 'dark' : 'light'
      document.body.style.backgroundColor= dark ? "#111827" : "white";
      document.documentElement.classList.remove(themeToggler)
      document.documentElement.classList.add(ourTheme)
    },[dark])

    return (
    <>
      <FontAwesomeIcon icon={dark ? faMoon : faSun} className="text-yellow-400 dark:text-gray-400 text-2xl cursor-pointer" onClick={()=>setDark(!dark)}/>
    </>
  )
}

export default Toggler