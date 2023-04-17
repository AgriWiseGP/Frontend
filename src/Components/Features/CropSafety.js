import React from 'react'
import Footer from '../Footer/Footer'
import s1 from '../../image/s1.webp'
import imgfeature1 from '../../image/Mask Group 1.webp'
import imgphone from '../../image/Group 66.webp'
import Modal from './Modal'
import Header from '../Header/Header'
const CropSafety = (props) => {
  const handleChange = (e) => {
    const [file] = e.target.files
    console.log(file)
    const { name, size } = file
    const fileSize = (size / 1024).toFixed(2)
    const fileNameSize = `${name} - ${fileSize} KB`
    if (name !==""){
        document.getElementById('info').innerText = fileNameSize
        document.getElementById('submit').style.display = "block"
    }
  }
  return (
    <>
    <Header t={props.t} lang={props.lang} ac="features" handleClick={props.handleClick}/>
      <div className="bg-[#F7F2EC] dark:bg-[#111827]">
        <img
          src={s1}
          className="absolute w-full h-[270px] sm:h-[400px]"
          alt=""
        />
        <div className="relative h-[270px] sm:h-[400px]">
          <div className="absolute z-30 text-white text-center bg-opacity-50 w-full h-full bg-gray-900 flex justify-center items-center ">
            <h1 className="text-2xl sm:text-4xl text-white font-bold">
              {props.t('safety.title')}
            </h1>
          </div>
        </div>
        <img
          src={imgfeature1}
          alt=""
          className="relative h-48 w-48 sm:w-56 sm:h-56 rounded-full shadow-lg mx-auto -translate-y-1/2 top-1/2 z-50 border-[5px] border-[#F7F2EC] dark:border-[#111827]"
        />
        <div className="flex justify-around items-center text-center md:text-left md:rtl:text-right mt-[-40px] pb-[30px]">
          <div>
            <h1 className="md:text-2xl text-xl text-black text-[#17A267] font-bold ">
              {props.t('safety.title')}
            </h1>
            <p className="w-full sm:w-[350px] text-lg text-black dark:text-white p-4 md:px-0">
              {props.t('safety.text')}
            </p>
            <div className="flex justify-center md:justify-start">
              <div>
              <label
                htmlFor="file"
                className="bg-[#17A267] text-[18px] text-white duration-500 px-4 py-2 w-[200px] h-[43px] inline-block text-center cursor-pointer hover:bg-green-400 rounded"
              >
                {props.t('photo.1')}
              </label>
              <input
                type="file"
                accept="image/*"
                id="file"
                className="hidden"
                required
                onChange={(e) => handleChange(e)}
              />
              <div
                className="m-2 text-gray-500 text-ellipsis overflow-hidden w-[200px]"
                id="info"
              >{props.t("noPhoto.1")}<span className='text-red-700'>*</span></div>
              </div>
              <button
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                className="hidden duration-300 text-black dark:text-white focus:outline-none font-medium rounded-lg text-lg h-[43px] hover:dark:text-green-950 hover:text-green-950 text-center"
                type="button"
                name="submit"
                id="submit"
              >
                {props.t("submit.1")}
              </button>
            </div>
            <Modal title={props.t("safety.title")} content="" t={props.t} lang={props.lang}/>
          </div>
          <img
            src={imgphone}
            alt=""
            className="w-[200px] h-[200px] hidden md:block"
          />
        </div>
      </div>
      <Footer t={props.t} lang={props.lang} />
    </>
  )
}

export default CropSafety
