import { useTranslation } from 'react-i18next'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginOrRegister from './Components/Login_Register/LoginOrRegister'
import PrivateRoutes from './Components/Login_Register/PrivateRoutes'
import PrivateRouteLog from './Components/Login_Register/PrivateRouteLog'
import Login from './Components/Login_Register/Login'
import Register from './Components/Login_Register/Register'
import ResetPass from './Components/Login_Register/ResetPass'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons' 
// import Languages from './Components/Languages';
import eg from './images/eg.svg'
import us from './images/us.svg'
import Toggler from './Components/Toggler'
const App = () => {
  const { t, i18n } = useTranslation()
  let myLang = window.localStorage.getItem('language')

  const [lang, setLang] = useState(myLang)
  const handleClick = (language) => {
    i18n.changeLanguage(language)
    console.log(lang === 'en')
    window.localStorage.setItem('language', language)
    setLang(myLang)
  }
  document.documentElement.setAttribute('lang', myLang)
  if (myLang === 'en') {
    document.documentElement.setAttribute('dir', 'ltr')
  } else {
    document.documentElement.setAttribute('dir', 'rtl')
  }
  const navigate= useNavigate();

  return (
    <div className="App rtl:font-noto">
      <img
        src={myLang === 'ar' ? eg : us}
        alt=""
        className="absolute left-2 top-2 inline-block w-7 cursor-pointer"
        onClick={() => {
          myLang === 'ar' ? handleClick('en') : handleClick('ar')
        }}
      />
      
      {/* <Languages handleClick={handleClick} lang={myLang}/> */}
      <Toggler/>
      <div  className="ml-5 text-green-950 lg:text-white text-2xl flex justify-space-between items-center rtl:flex-row-reverse mt-10">
        <FontAwesomeIcon icon={faAngleLeft} className="mr-2 cursor-pointer" onClick={()=>navigate(-1)}/>
        <span>عودة</span>
      </div>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home t={t} lang={myLang} />} exact />
          </Route>
          <Route element={<PrivateRouteLog />}>
            <Route
              path="LoginOrRegister"
              element={<LoginOrRegister t={t} lang={myLang} />}
            />
            <Route path="Register" element={<Register t={t} lang={myLang} />} />
            <Route path="Login" element={<Login t={t} lang={myLang} />} />
            <Route path="ResetPass" element={<ResetPass t={t} lang={myLang} />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
  )
}
export default App
