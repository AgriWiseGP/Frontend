import React from 'react'
import imgfeature1 from '../../image/Mask Group 1.webp'
import imgfeature2 from '../../image/Mask Group 5.webp'
import imgfeature3 from '../../image/Mask Group 6.webp'
import imgfeature4 from '../../image/Mask Group 7.webp'
import imgfeature5 from '../../image/Mask Group 8.webp'
import imgfeature6 from '../../image/Mask Group 9.webp'
import imgfeature7 from '../../image/Mask Group 13.webp'
import { useNavigate } from 'react-router-dom'

const Features = (props) => {
  const navigate=useNavigate();
  const features=[
    {
      img:imgfeature1,title:props.t("safety.title"),text:props.t("safety.text"),link:"/crop-safety"
    },
    {
      img:imgfeature2,title:props.t("recommendation.title"),text:props.t("recommendation.text"),link:"/crop-recommendation"
    },
    {
      img:imgfeature3,title:props.t("quality.title"),text:props.t("quality.text"),link:""
    },
    {
      img:imgfeature4,title:props.t("risks.title"),text:props.t("risks.text"),link:"/"
    }, 
    {
      img:imgfeature5,title:props.t("nursery.title"),text:props.t("nursery.text"),link:"/"
    },
    {
      img: imgfeature6,title:props.t("lab.title"),text:props.t("lab.text"),link:"/"
    },
    {
      img: imgfeature7,title:props.t("fertilizer.title"),text:props.t("fertilizer.text"),link:"/"
    },
  ]
  return (
    <div className='bg-[#F7F2EC] dark:bg-[#111827] mt-10 flex justify-center items-center text-center flex-col' id="features">
      <h1 className='font-bold text-4xl dark:text-white lg:text-4xl'>{props.t('features.1')}</h1>
      {
        features.map((feature,index)=>(
        <div className={`flex flex-col ${index%2 === 0?"md:flex-row":"md:flex-row-reverse"} justify-center dark:text-white md:justify-between shadow-lg items-center rounded-lg m-5 p-7 bg-white dark:bg-gray-800 sm:w-[400px] md:w-[700px]`} key={index}>
        <img src={feature.img} alt='' className='w-[200px]'/>
        <div className='md:text-start'>
          <h2 className='font-bold text-xl md:text-2xl my-4'>{feature.title}</h2>
          <p className='text-lg leading-6 w-full md:w-[400px] p-2 md:p-0 font-medium'>{feature.text}</p>
          <button className="bg-[#17A267] md:ml-0 w-24 h-8 hover:bg-green-400 duration-300 md:mt-5 mt-7 rounded-lg text-white"
          onClick={()=>navigate(feature.link,{replace:true})}>
          {props.t("go.1")}
        </button>
        </div>
      </div>))
      }
    </div>
  )
}

export default Features