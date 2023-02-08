import React from 'react'
import vid from '../../image/videos.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'
const About = (props) => {
  return (
    <div className="bg-[#F7F2EC] dark:bg-[#111827] text-center" id="about">
      <h2 className="font-bold text-3xl sm:text-4xl my-10 dark:text-white lg:text-4xl">
        <FontAwesomeIcon
          icon={faPagelines}
          className="text-3xl sm:text-4xl mx-2 w-100 text-green-950 -scale-x-100 rtl:scale-x-100"
        />
        <span className="hover:mx-4 duration-500">{props.t("who.1")}</span>
        <FontAwesomeIcon
          icon={faPagelines}
          className="text-3xl sm:text-4xl mx-2 w-100 text-green-950 rtl:-scale-x-100"
        />
      </h2>
      <video
        autoPlay
        muted
        loop
        className="absolute object-cover w-full h-[270px] sm:h-[400px]"
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div className="relative h-[270px] sm:h-[400px]">
        <div className="absolute z-30 p-4 text-white text-center bg-opacity-40 w-full h-full bg-gray-800 flex flex-col justify-center items-center ">
          <h2 className="text-2xl sm:text-4xl pt-4 text-white font-bold">
            AgriWise
          </h2>
          <p className="w-full sm:w-[350px] text-lg text-white p-4 md:px-0">
            {props.t('agriwise.1')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
