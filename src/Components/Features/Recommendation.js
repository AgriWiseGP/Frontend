import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import GoBack from '../GoBack'
import s3 from '../../image/s3.webp'
import imgfeature2 from '../../image/Mask Group 5.webp'
import imgphone from '../../image/location.webp'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal'

const CropRecommendation = (props) => {
  const [weatherData, setWeatherdata] = useState({
    ready: false,
    temperature: '0',
  })
  const [city, setCity] = useState("")
  const [type, setType] = useState('')
  let apiKey = 'de455523b6c7d57f7708f7dcd5dfa29d'

  function handleResponse(response) {
    return setWeatherdata({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      pressure: response.data.main.pressure,
    },
    setCity(response.data.name))
  }
  function handleSubmit(e) {
    e.preventDefault()
    getWeather()
  }

  function getWeather() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    axios.get(apiUrl).then(handleResponse)
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
    <>
      <GoBack />
      <div className="bg-[#F7F2EC] dark:bg-[#111827]">
        <img
          src={s3}
          className="absolute w-full h-[270px] sm:h-[400px]"
          alt=""
        />
        <div className="relative h-[270px] sm:h-[400px]">
          <div className="absolute z-30 text-white text-center bg-opacity-50 w-full h-full bg-gray-900 flex justify-center items-center ">
            <h1 className="text-2xl md:text-4xl text-white font-bold">
              {props.t('recommendation.title')}
            </h1>
          </div>
        </div>
        <img
          src={imgfeature2}
          alt=""
          className="relative h-48 w-48 sm:w-56 sm:h-56 rounded-full shadow-lg mx-auto -translate-y-1/2 top-1/2 z-50 border-[5px] border-[#F7F2EC] dark:border-[#111827]"
        />
        <div className="flex justify-around items-center text-center md:text-left md:rtl:text-right mt-[-40px] pb-[30px] px-4">
          <div>
            <h1 className="md:text-2xl text-xl text-black text-[#17A267] font-bold ">
              {props.t('recommendation.title')}
            </h1>
            <p className="w-full sm:w-[350px] text-lg mx-auto md:mx-0 text-black dark:text-white p-4 md:px-0">
              {props.t('recommendation.text')}
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
                    required
                    name="soil-type"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t('type.1')}
                  />
                </div>
                <button
                  data-modal-target="defaultModal"
                  data-modal-toggle="defaultModal"
                  className="bg-[#17A267] w-32 text-[18px] text-white duration-500 hover:bg-green-400 mt-5 mx-auto md:mx-0 px-4 py-2 rounded block transform hover:translate-y-1 transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  type="submit"
                  name="submit"
                  id="submit"
                  disabled={type === '' || city === '' ? true : false}
                  onClick={handleSubmit}
                >
                  {props.t('go.1')}
                </button>
              </div>
            </div>
            <Modal title={props.t('recommendation.title')}/>
          </div>
          <img src={imgphone} alt="" className="w-[300px] hidden md:block" />
        </div>
      </div>
      <Footer t={props.t} lang={props.lang} />
    </>
  )
}

export default CropRecommendation
