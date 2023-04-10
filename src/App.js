import { useTranslation } from 'react-i18next'
import { useEffect, useState} from 'react'
import {Route, Routes, useLocation } from 'react-router-dom'
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
import SoilQuality from './Components/Features/SoilQuality'
import CropRisks from './Components/Features/CropRisks'
import NearestLab from './Components/Features/NearestLab'
import Nursery from './Components/Features/Nursery'
import Fertilizers from './Components/Features/Fertilizers'
import axios from 'axios'

const App = () => {
  const location = useLocation();
  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({behavior: "smooth"})
        }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
}, [location,])
  // Language
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
  // location
  const [locationData, setLocationdata] = useState({
    city: ""  })
  const [city, setCity] = useState("")
  let apiKey = 'de455523b6c7d57f7708f7dcd5dfa29d'

  function handleResponse(response) {
    return setLocationdata({
      city: response.data.name,
    },
    setCity(response.data.name)
    )
  }

  function showPos(pos) {
    let lat = pos.coords.latitude
    let lon = pos.coords.longitude
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    axios.get(apiUrl).then(handleResponse)
  }
  function getLiveLocation() {
    navigator.geolocation.getCurrentPosition(showPos)
  }

  return (
    <div className="App rtl:font-noto ltr:font-[Poppins]">
      <div className='hidden'>
      <Toggler/>
      </div>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/crop-safety" element={<CropSafety  t={t} lang={myLang} />} exact/>
            <Route path="/crop-recommendation" element={<CropRecommendation  t={t} lang={myLang} />} exact/>         
            <Route path="/soil-quality" element={<SoilQuality  t={t} lang={myLang} />} exact/>         
            <Route path="/crop-risks" element={<CropRisks  t={t} lang={myLang} />} exact/>         
            <Route path="/nearest-lab" element={<NearestLab  t={t} lang={myLang} getLiveLocation={getLiveLocation} city={city} setCity={setCity} locationData={locationData}/>} exact/>         
            <Route path="/nearest-nursery" element={<Nursery  t={t} lang={myLang} getLiveLocation={getLiveLocation} city={city} setCity={setCity} locationData={locationData}/>} exact/>         
            <Route path="/fertiizers" element={<Fertilizers  t={t} lang={myLang} getLiveLocation={getLiveLocation} city={city} setCity={setCity} locationData={locationData}/>} exact/>         
          </Route>
          <Route path="/" element={<Home  t={t} lang={myLang} handleClick={handleClick}/>} exact />
          <Route element={<PrivateRouteLog/>}>
            <Route
              path="/login-register"
              element={<LoginOrRegister  t={t} lang={myLang} />}
            />
            <Route path="register" element={<Register  t={t} lang={myLang} />} />
            <Route path="login" element={<Login  t={t} lang={myLang} />} />
            <Route path="reset-password" element={<ResetPass  t={t} lang={myLang} />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
  )
}
export default App
