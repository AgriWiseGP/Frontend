import React from 'react'
import imgfeature1 from '../images/Mask Group 1.png'
import imgfeature2 from '../images/Mask Group 5.png'
import imgfeature3 from '../images/Mask Group 6.png'
import imgfeature4 from '../images/Mask Group 7.png'
import imgfeature5 from '../images/Mask Group 8.png'
import imgfeature6 from '../images/Mask Group 9.png'
import imgfeature7 from '../images/Mask Group 13.png'

export const Features = () => {
  return (
    <div className="Features bg-[#F7F2EC] mt-10">
    <h1 className="text-center mx-auto text-3xl w-[288px] h-[50px] mt-10 font-bold">
      Our Features
    </h1>
    <div className="bg-white flex flex-col md:flex-row w-[300px] md:w-[900px] h-[550px] md:h-[250px] mt-10 mx-auto rounded-2xl p-10">
      <img
        src={imgfeature1}
        className="w-[200px] mt-0 mr-20 md:mt-[-15px] h-[200px] rounded-full"
        alt=""
      />
      <div>
        <h1 className="text-2xl font-bold mt-5 ml-4 md:ml-0 md:mt-0 w-[214px] h[53px]">
          Crop Safety
        </h1>
        <p className="text-xl font-[roboto] mt-4 ml-4 md:ml-0 w-[200px] md:w-[450px]">
          Enter a picture of your crop to help you identify the type of
          disease and suggest a treatment for it.
        </p>
        <button className="bg-[#17A267] ml-4 md:ml-0 w-24 h-8 hover:bg-green-400 duration-300 md:mt-5 mt-7 rounded-lg text-white">
          Go
        </button>
      </div>
    </div>
    <div className="bg-white flex flex-col md:flex-row w-[300px] md:w-[900px] h-[550px] md:h-[250px] mt-10 mx-auto rounded-2xl p-10">
      <div>
        <h1 className="text-xl ml-4 md:ml-0 font-bold">
          Crop Recommendation
        </h1>
        <p className="text-xl font-[roboto] ml-4 md:ml-0 mt-4 w-[200px] md:w-[450px]">
          We suggest some crops that suit you by knowing your
          location,soil type,and air temperature.
        </p>
        <button className="bg-[#17A267] ml-4 md:ml-0 w-24 h-8 hover:bg-green-400 duration-300 md:mt-5 mt-7 rounded-lg text-white">
          Go
        </button>
      </div>
      <img
        src={imgfeature2}
        className="w-[200px] mt-10 md:ml-20 ml-0 md:mt-[-15px] h-[200px] rounded-full"
        alt=""
      />
    </div>
    <div className="bg-white flex flex-col md:flex-row w-[300px] md:w-[900px] h-[550px] md:h-[250px] mt-10 mx-auto rounded-2xl p-10">
      <img
        src={imgfeature3}
        className="w-[200px] mt-0 mr-20 md:mt-[-15px] h-[200px] rounded-full"
        alt=""
      />
      <div id='ff'>
        <h1 className="text-2xl font-bold mt-5 ml-4 md:ml-0 md:mt-0 w-[214px] h[53px]">
          Soil Quality
        </h1>
        <p className="text-xl font-[roboto] mt-4 ml-4 md:ml-0 w-[200px] md:w-[450px]">
          We help you judge whether the soil is suitable for cultivation
          or not by analyzing it.
        </p>
        <button className="bg-[#17A267] ml-4 md:ml-0 w-24 h-8 hover:bg-green-400 duration-300 md:mt-5 mt-9 rounded-lg text-white">
          Go
        </button>
      </div>
    </div>
    <div className="bg-white flex flex-col-reverse md:flex-row w-[300px] md:w-[900px] h-[550px] md:h-[250px] mt-10 mx-auto rounded-2xl p-10">
      <div>
        <h1 className="text-xl ml-4 md:ml-0 font-bold">
          Crop risks and treats
        </h1>
        <p className="text-xl font-[roboto] ml-4 md:ml-0 mt-4 w-[200px] md:w-[450px]">
          We display information about your cultivated crop,common diseases and methods of treatment
        </p>
        <button className="bg-[#17A267] ml-4 md:ml-0 w-24 h-8 hover:bg-green-400 duration-300 md:mt-5 mt-7 rounded-lg text-white">
          Go
        </button>
      </div>
      <img
        src={imgfeature4}
        className="w-[200px] mt-10 md:ml-20 ml-0 md:mt-[-15px] h-[200px] rounded-full"
        alt=""
      />
    </div>
    <div className="bg-white flex flex-col-reverse md:flex-row w-[300px] md:w-[900px] h-[550px] md:h-[250px] mt-10 mx-auto rounded-2xl p-10">
      <img
        src={imgfeature5}
        className="w-[200px] mt-3 mr-20 md:mt-[-15px] h-[200px] rounded-full"
        alt=""
      />
      <div>
        <h1 className="text-2xl font-bold mt-6 ml-4 md:ml-0 md:mt-0 w-[250px] h[53px]">
          The nearest nursery
        </h1>
        <p className="text-xl font-[roboto] mt-5 ml-4 md:ml-0 w-[200px] md:w-[450px]">
          We suggest the nearest nursery to you to get the crops you need.
        </p>
        <button className="bg-[#17A267] ml-4 md:ml-0 w-24 h-8 hover:bg-green-400 duration-300 md:mt-5 mt-10 rounded-lg text-white">
          Go
        </button>
      </div>
    </div>
    <div className="bg-white flex flex-col md:flex-row w-[300px] md:w-[900px] h-[550px] md:h-[250px] mt-10 mx-auto rounded-2xl p-10">
      <div>
        <h1 className="text-xl ml-4 md:ml-0 font-bold">
          The nearest laboratory
        </h1>
        <p className="text-xl font-[roboto] ml-4 md:ml-0 mt-4 w-[200px] md:w-[450px]">
          We suggest the nearest analysis laboratory to your location in
          order to conduct analzyes of your soil.
        </p>
        <button className="bg-[#17A267] ml-4 md:ml-0 w-24 h-8 hover:bg-green-400 duration-300 md:mt-5 mt-7 rounded-lg text-white">
          Go
        </button>
      </div>
      <img
        src={imgfeature6}
        className="w-[200px] mt-6 md:ml-20 ml-0 md:mt-[-15px] h-[200px] rounded-full"
        alt=""
      />
    </div>
    <div className="bg-white flex flex-col md:flex-row w-[300px] md:w-[900px] h-[550px] md:h-[250px] mt-10 mx-auto rounded-2xl p-10">
      <img
        src={imgfeature7}
        className="w-[200px] mt-0 mr-20 md:mt-[-15px] h-[200px] rounded-full"
        alt=""
      />
      <div>
        <h1 className="text-2xl font-bold mt-5 md:ml-0 md:mt-0 w-[230px] md:w-[270px] h[53px]">
          Fertilizer and treatment
        </h1>
        <p className="text-xl font-[roboto] mt-4 ml-4 md:ml-0 w-[200px] md:w-[450px]">
          We suggest the nearest nursery to buy fertilizers and treatment
          for your crop.
        </p>
        <button className="bg-[#17A267] ml-4 md:ml-0 w-24 h-8 hover:bg-green-400 duration-300 md:mt-5 mt-7 rounded-lg text-white">
          Go
        </button>
      </div>
    </div>
  </div>  )
}
