import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPagelines} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = (props) => {
  return (
    <div className="bg-[#F7F2EC] dark:bg-[#111827] text-center" id="contact">
      <h2 className="font-bold text-3xl sm:text-4xl my-10 dark:text-white lg:text-4xl">
        <FontAwesomeIcon
          icon={faPagelines}
          className="text-3xl sm:text-4xl mx-2 w-100 text-green-950 -scale-x-100 rtl:scale-x-100"
        />
        <span className="hover:mx-4 duration-500">{props.t('contact.1')}</span>
        <FontAwesomeIcon
          icon={faPagelines}
          className="text-3xl sm:text-4xl mx-2 w-100 text-green-950 rtl:-scale-x-100"
        />
      </h2>
      <div className='flex flex-col justify-center items-center'>
      <div className='shadow-xl w-3/4  md:w-[480px] h-[128px]'>
      <textarea
        type="text"
        placeholder={props.t('msg.1')}
        className="font-display focus:outline-none text-lg bg-[#EFE7DF] ltr:text-left w-full md:w-500 rtl:text-right rounded-md caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
        required
        rows="4"
        cols="50"
        name="message"
      />
      </div>
      <button
        type="submit"
        className="py-3 px-20 text-lg rounded-lg text-white font-bold text-center my-10 mx-2 transform hover:translate-y-1 transition-all duration-500 cursor-pointer bg-green-950 hover:bg-green-400 xl:text-2xl dark:text-gray-800"
      >
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="text-xl w-100 text-white ltr:mr-2 rtl:ml-2 cursor-pointer dark:text-gray-800"
        />
        {props.t("send.1")}
      </button>
      </div>
    </div>
  )
}

export default Contact
