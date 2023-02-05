import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GoBack from '../GoBack'
import s1 from '../../images/s1.jpg'
import imgfeature1 from '../../images/Mask Group 1.png'
import imgphone from '../../images/Group 66.png'
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
      <GoBack />
      <div className="bg-[#F7F2EC] dark:bg-[#111827]">
        <img
          src={s1}
          className="absolute w-full h-[270px] sm:h-[400px]"
          alt=""
        />
        <div className="relative h-[270px] sm:h-[400px]">
          <div className="absolute z-30 text-white text-center bg-opacity-50 w-full h-full bg-gray-900 flex justify-center items-center ">
            <h1 className="text-4xl text-black dark:text-white font-bold">
              {props.t('safety.title')}
            </h1>
          </div>
        </div>
        <img
          src={imgfeature1}
          alt=""
          className="relative h-48 w-48 sm:w-56 sm:h-56 rounded-full mx-auto -translate-y-1/2 top-1/2 z-50 border-[5px] border-[#F7F2EC] dark:border-[#111827]"
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
                id="submit"
              >
                Submit
              </button>
            </div>
            <div
              id="defaultModal"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
              <div className="relative w-full max-w-2xl md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {props.t("safety.title")}
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="defaultModal"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-left">
                      your plant has disease ...
                    </p>
                  </div>
                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="defaultModal"
                      type="button"
                      className="bg-[#17A267] hover:bg-green-400 text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
