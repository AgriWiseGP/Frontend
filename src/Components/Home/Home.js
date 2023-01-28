import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Features  from '../Features/Features'
import Carousel from '../Carousel'
const Home = (props) => { 
  return (
    <div>
      <div className={`bg-[#F7F2EC] dark:bg-[#111827]`} id="home">
        <Header  t={props.t} lang={props.lang} handleClick={props.handleClick}/>
        <Carousel t={props.t} lang={props.lang}/>
        <Features t={props.t} lang={props.lang}/>
        <Footer t={props.t} lang={props.lang}/>
      </div>
    </div>
  )
}

export default Home