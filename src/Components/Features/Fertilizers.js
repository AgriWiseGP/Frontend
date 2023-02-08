import React from 'react'
import fertilizer from '../../image/lab2.webp'
import imgfeature7 from '../../image/Mask Group 13.webp'
import Footer from '../Footer/Footer'
import GoBack from '../GoBack'
import imgphone from '../../image/Location tracking.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal'

const Fertilizers = (props) => {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <>
      <GoBack />
      <div className="bg-[#F7F2EC] dark:bg-[#111827]">
        <img
          src={fertilizer}
          className="absolute w-full h-[270px] sm:h-[400px]"
          alt=""
        />
        <div className="relative h-[270px] sm:h-[400px]">
          <div className="absolute z-30 text-white text-center bg-opacity-50 w-full h-full bg-gray-900 flex justify-center items-center ">
            <h1 className="text-2xl md:text-4xl text-white font-bold">
              {props.t('fertilizer.title')}
            </h1>
          </div>
        </div>
        <img
          src={imgfeature7}
          alt=""
          className="relative h-48 w-48 sm:w-56 sm:h-56 rounded-full mx-auto -translate-y-1/2 top-1/2 z-50 border-[5px] shadow-lg border-[#F7F2EC] dark:border-[#111827]"
        />
        <div className="flex justify-around items-center text-center md:text-left md:rtl:text-right mt-[-40px] pb-[30px] px-4">
          <div>
            <h1 className="md:text-2xl text-xl text-black text-[#17A267] font-bold ">
              {props.t('fertilizer.title')}
            </h1>
            <p className="w-full sm:w-[350px] text-lg mx-auto md:mx-0 text-black dark:text-white p-4 md:px-0">
              {props.t('fertilizer.text')}
            </p>
            <div className="flex justify-center md:justify-start">
              <div>
                <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-xl w-100 text-green-950 cursor-pointer hover:text-green-400"
                    id="locationButton"
                    onClick={props.getLiveLocation}
                  />
                  <input
                    type="text"
                    id="location"
                    required
                    onChange={(e) => props.setCity(e.target.value)}
                    value={props.locationData.city || props.city}
                    className="ltr:pl-5 rtl:pr-5 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t('cur-location.1')}
                  />
                </div>
                <button
                  data-modal-target="defaultModal"
                  data-modal-toggle="defaultModal"
                  className="bg-[#17A267] w-32 text-[18px] text-white duration-500 hover:bg-green-400 mt-5 mx-auto md:mx-0 px-4 py-2 rounded block transform hover:translate-y-1 transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  type="submit"
                  name="submit"
                  id="submit"
                  disabled={props.city === '' ? true : false}
                  onClick={handleSubmit}
                >
                  {props.t('go.1')}
                </button>
              </div>
            </div>
            <Modal title={props.t("fertilizer.title")}/>
          </div>
          <img src={imgphone} alt="" className="w-[300px] hidden md:block" />
        </div>
      </div>
      <Footer t={props.t} lang={props.lang} />
    </>
  )
}

export default Fertilizers
