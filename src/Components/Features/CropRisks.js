import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import GoBack from '../GoBack'
import croprisksimg from '../../image/nursery.webp'
import imgfeature4 from '../../image/Mask Group 7.webp'
import treat from '../../image/treat.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlantWilt } from '@fortawesome/free-solid-svg-icons'
import  Modal  from "./Modal"
const CropSafety = (props) => {
    const [cropname, setCropname]=useState("")
return (
    <>
      <GoBack />
      <div className="bg-[#F7F2EC] dark:bg-[#111827]">
        <img
          src={croprisksimg}
          className="absolute w-full h-[270px] sm:h-[400px]"
          alt=""
        />
        <div className="relative h-[270px] sm:h-[400px]">
          <div className="absolute z-30 text-white text-center bg-opacity-50 w-full h-full bg-gray-900 flex justify-center items-center ">
            <h1 className="text-2xl sm:text-4xl text-white font-bold">
              {props.t('risks.title')}
            </h1>
          </div>
        </div>
        <img
          src={imgfeature4}
          alt=""
          className="relative h-48 w-48 sm:w-56 sm:h-56 rounded-full shadow-lg mx-auto -translate-y-1/2 top-1/2 z-50 border-[5px] border-[#F7F2EC] dark:border-[#111827]"
        />
        <div className="flex justify-around items-center text-center md:text-left md:rtl:text-right mt-[-40px] pb-[30px]">
          <div>
            <h1 className="md:text-2xl text-xl text-black text-[#17A267] font-bold ">
              {props.t('risks.title')}
            </h1>
            <p className="w-full sm:w-[350px] text-lg text-black dark:text-white p-4 md:px-0">
              {props.t('risks.text')}
            </p>
            <div className="flex justify-center md:justify-start flex-col">
            <div className="p-3 mt-5 w-3/4 mx-auto md:mx-0 bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
            <FontAwesomeIcon
                    icon={faPlantWilt}
                    className="text-xl w-100 text-green-950"
                  />
                  <input
                    type="text"
                    required
                    id="cropname"
                    name='crop name'
                    value={cropname}
                    className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={props.t('crop-name.1')}
                    onChange={(e)=>setCropname(e.target.value)}
                  />
                </div>
                <label htmlFor="cropname" className="block mt-2 text-sm text-[#17A267]">{props.t("crop-hint.1")}</label>
                <button
                  data-modal-target="defaultModal"
                  data-modal-toggle="defaultModal"
                  className="bg-[#17A267] w-32 text-[18px] text-white duration-500 hover:bg-green-400 mt-5 mx-auto md:mx-0 px-4 py-2 rounded block transform hover:translate-y-1 transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  type="submit"
                  disabled={cropname === ''? true : false}
                  id="submit"
                  name='submit'
                >
                  {props.t('go.1')}
                </button>
            </div>
            <Modal title={props.t("risks.title")}/>
          </div>
          <img
            src={treat}
            alt=""
            className="w-[300px] hidden md:block"
          />
        </div>
      </div>
      <Footer t={props.t} lang={props.lang} />
    </>
  )
}

export default CropSafety
