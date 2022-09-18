import React, { useState ,useEffect} from 'react'

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
    <span className="absolute left-20 top-2">
      <label
        htmlFor="green-toggle"
        className="inline-flex relative items-center mr-5 cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="green-toggle"
          className="sr-only peer"
          onChange={()=>setDark(!dark)}
          checked = {dark}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
      </label>
    </span>
  )
}

export default Toggler
