import React from 'react'
import imgfeature1 from '../../images/Mask Group 1.png'
import imgfeature2 from '../../images/Mask Group 5.png'
import imgfeature3 from '../../images/Mask Group 6.png'
import imgfeature4 from '../../images/Mask Group 7.png'
import imgfeature5 from '../../images/Mask Group 8.png'
import imgfeature6 from '../../images/Mask Group 9.png'
import imgfeature7 from '../../images/Mask Group 13.png'

const Features = (props) => {
  const features=[
    {
      img:imgfeature1,title:props.t("safety.title"),text:props.t("safety.text"),flex:"flex-row"
    },
    {
      img:imgfeature2,title:props.t("recommendation.title"),text:props.t("recommendation.text"),flex:"flex-row-reverse"
    },
    {
      img:imgfeature3,title:props.t("quality.title"),text:props.t("quality.text"),flex:"flex-row"
    },
    {
      img:imgfeature4,title:props.t("risks.title"),text:props.t("risks.text"),flex:"flex-row-reverse"
    }, 
    {
      img:imgfeature5,title:props.t("nursery.title"),text:props.t("nursery.text"),flex:"flex-row"
    },
    {
      img: imgfeature6,title:props.t("lab.title"),text:props.t("lab.text"),flex:"flex-row-reverse"
    },
    {
      img: imgfeature7,title:props.t("fertilizer.title"),text:props.t("fertilizer.text"),flex:"flex-row"
    },
  ]
  return (
    <div className='bg-[#F7F2EC] mt-10 flex justify-center items-center text-center flex-col'>
      <h1 className='font-bold text-3xl lg:text-4xl'>{props.t('features.1')}</h1>
      {
        features.map((feature,index)=>(
        <div className={`flex flex-col justify-center md:justify-between shadow-lg items-center rounded-lg m-5 p-7 md:${feature.flex} bg-white sm:w-[400px] md:w-[700px]`} key={index}>
        <img src={feature.img} alt='' className='w-[200px]'/>
        <div className='md:text-start'>
          <h2 className='font-bold text-xl md:text-2xl my-4'>{feature.title}</h2>
          <p className='text-lg leading-6 w-full md:w-[400px] p-2 md:p-0 font-medium'>{feature.text}</p>
          <button className="bg-[#17A267] md:ml-0 w-24 h-8 hover:bg-green-400 duration-300 md:mt-5 mt-7 rounded-lg text-white">
          {props.t("go.1")}
        </button>
        </div>
      </div>))
      }
    </div>
  )
}

export default Features