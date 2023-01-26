import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Features  from '../Features/Features'
import Carasoul from '../Carasoul'
const Home = (props) => { 
  return (
    <div>
      <div className="bg-[#F7F2EC]">
        <Header  t={props.t} lang={props.lang} handleClick={props.handleClick}/>
       <Carasoul t={props.t} lang={props.lang}/>
        <Features t={props.t} lang={props.lang}/>
        <Footer t={props.t} lang={props.lang}/>
      </div>
    </div>
  )
}

export default Home
