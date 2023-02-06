import { useTranslation } from 'react-i18next'
import { useState} from 'react'
import {Route, Routes } from 'react-router-dom'
import LoginOrRegister from './Components/Login_Register/LoginOrRegister'
import PrivateRoutes from './Components/Login_Register/PrivateRoutes'
import PrivateRouteLog from './Components/Login_Register/PrivateRouteLog'
import Login from './Components/Login_Register/Login'
import Register from './Components/Login_Register/Register'
import ResetPass from './Components/Login_Register/ResetPass'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound'
import Toggler from './Components/Toggler'
import CropSafety from './Components/Features/CropSafety'
import CropRecommendation from './Components/Features/Recommendation'

const App = () => {
  const { t, i18n } = useTranslation()
  let myLang = window.localStorage.getItem('i18nextLng').slice(0,2)
  const [lang, setLang] = useState(myLang)
  const handleClick = (language) => {
    i18n.changeLanguage(language)
    console.log(lang === 'en')
    window.localStorage.setItem('i18nextLng', language)
    setLang(myLang)
  }
  document.documentElement.setAttribute('lang', myLang)
  if (myLang === 'en') {
    document.documentElement.setAttribute('dir', 'ltr')
  } else {
    document.documentElement.setAttribute('dir', 'rtl')
  }
  return (
    <div className="App rtl:font-noto ltr:font-[Poppins]">
      <div className='hidden'>
      <Toggler/>
      </div>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/home" element={<Home t={t} lang={myLang} handleClick={handleClick}/>} exact />
            <Route path="/crop-safety" element={<CropSafety t={t} lang={myLang} />} exact/>
            <Route path="/crop-recommendation" element={<CropRecommendation t={t} lang={myLang} />} exact/>         
          </Route>
          <Route element={<PrivateRouteLog/>}>
            <Route
              path="/"
              element={<LoginOrRegister t={t} lang={myLang} />}
            />
            <Route path="register" element={<Register t={t} lang={myLang} />} />
            <Route path="login" element={<Login t={t} lang={myLang} />} />
            <Route path="reset-password" element={<ResetPass t={t} lang={myLang} />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
  )
}
export default App
