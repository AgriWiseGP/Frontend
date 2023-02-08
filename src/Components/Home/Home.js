import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Features from '../Features/Features'
import Carousel from '../Carousel'
import About from '../About/About'
import Contact from '../Contact/Contact'
const Home = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const [visible, setVisible] = useState(false)

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 1000) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  return (
    <div>
      <div className={`bg-[#F7F2EC] dark:bg-[#111827]`} id="home">
        <Header t={props.t} lang={props.lang} handleClick={props.handleClick} />
        <Carousel t={props.t} lang={props.lang} />
        <Features t={props.t} lang={props.lang} />
        <About t={props.t} lang={props.lang} />
        <Contact t={props.t} lang={props.lang} />
        <Footer t={props.t} lang={props.lang} />
        <div
          className={`fixed bg-green-950 hover:bg-green-400 duration-500 rounded-full z-[999] h-[35px] w-[35px] m-3 bottom-0 right-0 flex items-center justify-center cursor-pointer ${
            visible ? 'block' : 'hidden'
          }`}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            className="text-white dark:text-gray-800"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
