import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import s3 from '../../image/soil1.jpeg'
import imgfeature7 from '../../image/soil.jpeg'
import imgphone from '../../image/location.webp'
import axios from 'axios'
import axiosInstance from '../axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
import Popup from './Modal'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'

const SoilFertilizer = (props) => {
  const [weatherData, setWeatherdata] = useState({
    ready: false,
    temperature: '0',
    humidity: 0,
  })
  const [city, setCity] = useState('')
  const [rainfall, setRainfall] = useState('')
  const [temperature, setTemp] = useState('')
  const [humidity, setHum] = useState('')
  const [Nratio, setNratio] = useState('')
  const [Pratio, setPratio] = useState('')
  const [Kratio, setKratio] = useState('')
  const [PH, setPH] = useState('')
  const [crop_name, setCrop] = useState("")
  const [soil_name, setSoil] = useState("")
  const [res, setRes] = useState("")
  const navigate = useNavigate()
  let apiKey = 'de455523b6c7d57f7708f7dcd5dfa29d'

  const handleResponse=(response)=> {
    return setWeatherdata(
      {
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        city: response.data.name,
      },
      setCity(response.data.name),
      setTemp(response.data.main.temp),
      setHum(response.data.main.humidity),
    )
  }
  function handleSubmit(e) {
    e.preventDefault()
    // setShow(true)
    // console.log(show);
    axiosInstance
      .post('soil-fertilizer/', {
        "crop_name": crop_name,
        "soil_name": soil_name,
        "soil_analysis":{
            "Pratio":Pratio, 
            "Kratio":Kratio, 
            "Nratio":Nratio, 
            "PH":PH
        },
        "weather_conditions":{
            "temperature": temperature,
            "humidity": humidity,
            "rainfall": rainfall
        }
      })
      .then((response) => {
        setRes(response.data.target)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  const getWeather=()=> {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    axios.get(apiUrl).then(handleResponse)
  }
  const showPos=(pos) =>{
    let lat = pos.coords.latitude
    let lon = pos.coords.longitude
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    axios.get(apiUrl).then(handleResponse)
  }
  const getLiveLocation=()=> {
    navigator.geolocation.getCurrentPosition(showPos)
  }
  return (
    <>
      <Header
        t={props.t}
        lang={props.lang}
        ac="features"
        handleClick={props.handleClick}
      />
      <div className="bg-[#F7F2EC] dark:bg-[#111827]">
        <img
          src={s3}
          className="absolute w-full h-[270px] sm:h-[400px]"
          alt=""
        />
        <div className="relative h-[270px] sm:h-[400px]">
          <div className="absolute z-30 text-white text-center bg-opacity-50 w-full h-full bg-gray-900 flex justify-center items-center ">
            <h1 className="text-2xl md:text-4xl text-white font-bold">
              {props.t('soil-fertilizer.title')}
            </h1>
          </div>
        </div>
        <img
          src={imgfeature7}
          alt=""
          className="relative h-48 w-48 sm:w-56 sm:h-56 rounded-full shadow-lg mx-auto -translate-y-1/2 top-1/2 z-50 border-[5px] border-[#F7F2EC] dark:border-[#111827]"
        />
        <div className="flex justify-around items-center text-center md:text-left md:rtl:text-right mt-[-40px] pb-[30px] px-4">
          <div>
            <h1 className="md:text-2xl text-xl text-black text-[#17A267] font-bold ">
              {props.t('soil-fertilizer.title')}
            </h1>
            <p className="w-full sm:w-[350px] text-lg mx-auto md:mx-0 text-black dark:text-white p-4 md:px-0">
              {props.t('soil-fertilizer.text')}
            </p>
            <div className="flex justify-center md:justify-start">
              <div>
                <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-xl w-100 text-green-950 cursor-pointer hover:text-green-400"
                    id="locationButton"
                    onClick={getLiveLocation}
                  />
                  <input
                    type="text"
                    id="location"
                    required
                    onChange={(e) => setCity(e.target.value)}
                    value={weatherData.city || city}
                    className="ltr:pl-5 rtl:pr-5 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t('cur-location.1')}
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-xl w-100 text-green-950 cursor-pointer hover:text-green-400"
                    id="locationButton"
                    onClick={getWeather}
                  />
                </div>
                <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                  <input
                    type="text"
                    readOnly
                    name="temperature"
                    className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t('temp.1')}
                    value={`${Math.ceil(weatherData.temperature)}°C`}
                  />
                </div>
                <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                  <input
                    type="text"
                    readOnly
                    name="humidity"
                    className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t('humidity.1')}
                    value={`${Math.ceil(weatherData.humidity)}`}
                  />
                </div>
                <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                  <input
                    type="number"
                    required
                    name="rainfall"
                    onChange={(e) => setRainfall(e.target.value)}
                    value={rainfall}
                    className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t('rainfall.1')}
                  />
                </div>
                <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                  <input
                    type="text"
                    required
                    name="soul-name"
                    onChange={(e) => setSoil(e.target.value)}
                    value={soil_name}
                    className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t("type.1")}
                  />
                </div>
                <span className='px-2 text-green-950 cursor-pointer mt-1 block' onClick={() => navigate('/soil-type', { replace: true })}>{props.t("soil-type.1")}</span>
                <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                  <input
                    type="text"
                    required
                    name="crop"
                    onChange={(e) => setCrop(e.target.value)}
                    value={crop_name}
                    className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t("crop-name.1")}
                  />
                </div>
                <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                  <input
                    type="number"
                    required
                    name="n"
                    onChange={(e) => setNratio(e.target.value)}
                    value={Nratio}
                    className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t("soil.n")}
                  />
                </div>
                <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                  <input
                    type="number"
                    required
                    name="P"
                    onChange={(e) => setPratio(e.target.value)}
                    value={Pratio}
                    className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t("soil.p")}
                  />
                </div>
                <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                  <input
                    type="number"
                    required
                    name="k"
                    onChange={(e) => setKratio(e.target.value)}
                    value={Kratio}
                    className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t("soil.k")}
                  />
                </div>
                <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                  <input
                    type="number"
                    required
                    name="ph"
                    onChange={(e) => setPH(e.target.value)}
                    value={PH}
                    className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t("soil.ph")}
                  />
                </div>
                <button
                  data-modal-target="defaultModal"
                  data-modal-toggle="defaultModal"
                  className="bg-[#17A267] w-32 text-[18px] text-white duration-500 hover:bg-green-400 mt-5 mx-auto md:mx-0 px-4 py-2 rounded block transform hover:translate-y-1 transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  type="submit"
                  name="submit"
                  id="submit"
                  disabled={
                    Nratio === '' || Pratio === '' || Kratio === '' || PH === '' || city === '' || rainfall === ''
                      ? true
                      : false
                  }
                  onClick={handleSubmit}
                >
                  {props.t('go.1')}
                </button>
              </div>
            </div>
            <Popup title={props.t('soil-fertilizer.title')} content={`${res}`} t={props.t} lang={props.lang}/>
          </div>
          <img src={imgphone} alt="" className="w-[300px] hidden md:block" />
        </div>
      </div>
      <Footer t={props.t} lang={props.lang} />
    </>
  )
}

export default SoilFertilizer
