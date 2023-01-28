import React from 'react'
import s1 from '../images/s1.jpg'
import s2 from '../images/s4.jpg'
import s3 from '../images/s3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Carousel = (props) => {
  return (
    <div id="default-carousel" className="relative" data-carousel="slide">
    <div className="relative h-56 overflow-hidden md:h-[450px]">
      <div className="duration-900 ease-in-out" data-carousel-item="active">
        <img
          src={s1}
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
        <div className="carousel-caption text-left flex justify-center items-center flex-col absolute z-30 text-white text-center bg-opacity-50 w-full h-full bg-gray-900">
          <h5 className=" block font-bold text-xl md:text-3xl ">
            {props.t("safety.title")}
          </h5>
          <p className="w-[207px] md:w-[500px] text-lg md:text-2xl mt-5 mb-5 ">
            {props.t("safety.text")}
          </p>
        </div>
      </div>
      <div className="hidden duration-900 ease-in-out" data-carousel-item>
        <img
          src={s2}
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
         <div className="carousel-caption text-left flex justify-center items-center flex-col absolute z-30 text-white text-center bg-opacity-50 w-full h-full bg-gray-900">
          <h5 className=" block font-bold text-xl md:text-3xl">
            {props.t("quality.title")}
          </h5>
          <p className="w-[207px] md:w-[500px] text-lg md:text-2xl mt-5 mb-5 ">
            {props.t("quality.text")}
          </p>
        </div>
      </div>
      <div className="hidden duration-900 ease-in-out" data-carousel-item>
        <img
          src={s3}
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
         <div className="carousel-caption text-left flex justify-center items-center flex-col absolute z-30 text-white text-center bg-opacity-50 w-full h-full bg-gray-900">
          <h5 className=" block mx-auto font-bold text-xl md:text-3xl ">
            {props.t("recommendation.title")}
          </h5>
          <p className="w-[207px] md:w-[500px] text-lg md:text-2xl mt-5 mb-5 ">
           {props.t("recommendation.text")}
          </p>
        </div>
      </div>
    </div>
    <div className="absolute z-30 flex gap-2 bottom-[20px] -translate-x-1/2 left-1/2">
      <button
        type="button"
        className="w-3 h-3 rounded-full bg-white"
        aria-current="false"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        className="w-3 h-3 rounded-full bg-white"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        className="w-3 h-3 rounded-full bg-white"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
    </div>
    <button
      type="button"
      className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-[#17A267] group-hover:bg-white/50 dark:group-hover:bg-green-400">
      <FontAwesomeIcon
            icon={faAngleLeft}
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-[#111827]"
          />
        <span className="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-[#17A267] group-hover:bg-white/50 dark:group-hover:bg-green-400 ">
      <FontAwesomeIcon
            icon={faAngleRight}
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-[#111827]"
          />
        <span className="sr-only">Next</span>
      </span>
    </button>
  </div>  )
}

export default Carousel