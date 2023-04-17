import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import s4 from '../../image/s4.webp'
import imgfeature3 from '../../image/lamp.webp'
import axiosInstance from '../axios'
import imgphone from '../../image/Environmental study-amico.webp'
import Modal from './Modal'
import Header from '../Header/Header'
const CropSafety = (props) => {
  const [n, setN] = useState('')
  const [p, setP] = useState('')
  const [k, setK] = useState('')
  const [ph, setPH] = useState('')
  const [ec, setEC] = useState('')
  const [oc, setOC] = useState('')
  const [s, setS] = useState('')
  const [zn, setzn] = useState('')
  const [fe, setFe] = useState('')
  const [cu, setCu] = useState('')
  const [mn, setMn] = useState('')
  const [b, setB] = useState('')

  const [res, setRes] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axiosInstance
      .post('soil-quality/soil/', {
        n,
        p,
        k,
        ph,
        ec,
        oc,
        s,
        zn,
        fe,
        cu,
        mn,
        b,
      })
      .then((response) => {
        setRes(response.data.data.quality)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <Header
        t={props.t}
        lang={props.lang}
        ac="features"
        handleClick={props.handleClick}
      />
      <div className="bg-[#F7F2EC] dark:bg-[#111827]">
        <img
          src={s4}
          className="absolute w-full h-[270px] sm:h-[400px]"
          alt=""
        />
        <div className="relative h-[270px] sm:h-[400px]">
          <div className="absolute z-30 text-white text-center bg-opacity-50 w-full h-full bg-gray-900 flex justify-center items-center ">
            <h1 className="text-2xl sm:text-4xl text-white font-bold">
              {props.t('quality.title')}
            </h1>
          </div>
        </div>
        <img
          src={imgfeature3}
          alt=""
          className="relative h-48 w-48 sm:w-56 sm:h-56 rounded-full shadow-lg mx-auto -translate-y-1/2 top-1/2 z-50 border-[5px] border-[#F7F2EC] dark:border-[#111827]"
        />
          <div className="flex justify-around items-center text-center md:text-left md:rtl:text-right mt-[-40px] pb-[30px]">
            <div>
              <h1 className="md:text-2xl text-xl text-black text-[#17A267] font-bold ">
                {props.t('quality.title')}
              </h1>
              <p className="w-full sm:w-[350px] text-lg text-black dark:text-white p-4 md:px-0">
                {props.t('quality.text')}
              </p>
              <div className="flex justify-center md:justify-start">
                <div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="n"
                      onChange={(e) => setN(e.target.value)}
                      value={n}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="N"
                    />
                  </div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="p"
                      onChange={(e) => setP(e.target.value)}
                      value={p}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="P"
                    />
                  </div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="k"
                      onChange={(e) => setK(e.target.value)}
                      value={k}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="K"
                    />
                  </div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="ph"
                      onChange={(e) => setPH(e.target.value)}
                      value={ph}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="PH"
                    />
                  </div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="ec"
                      onChange={(e) => setEC(e.target.value)}
                      value={ec}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="ec"
                    />
                  </div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="oc"
                      onChange={(e) => setOC(e.target.value)}
                      value={oc}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="oc"
                    />
                  </div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="s"
                      onChange={(e) => setS(e.target.value)}
                      value={s}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="s"
                    />
                  </div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="zn"
                      onChange={(e) => setzn(e.target.value)}
                      value={zn}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="zn"
                    />
                  </div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="fe"
                      onChange={(e) => setFe(e.target.value)}
                      value={fe}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="fe"
                    />
                  </div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="cu"
                      onChange={(e) => setCu(e.target.value)}
                      value={cu}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="cu"
                    />
                  </div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="mn"
                      onChange={(e) => setMn(e.target.value)}
                      value={mn}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="mn"
                    />
                  </div>
                  <div className="p-3 mt-5 w-full bg-gray-100 align-left rounded-lg ltr:text-left lg:w-500 rtl:text-right shadow-lg dark:bg-gray-700">
                    <input
                      type="number"
                      required
                      name="b"
                      onChange={(e) => setB(e.target.value)}
                      value={b}
                      className="ltr:pl-8 rtl:pr-8 font-display focus:outline-none text-lg bg-gray-100 h-[28px] w-10/12 caret-green-950 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="b"
                    />
                  </div>
                  <button
                    data-modal-target="defaultModal"
                    data-modal-toggle="defaultModal"
                    className="bg-[#17A267] w-32 text-[18px] text-white duration-500 hover:bg-green-400 mt-5 mx-auto md:mx-0 px-4 py-2 rounded block transform hover:translate-y-1 transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                    type="submit"
                    name="submit"
                    id="submit"
                    disabled={
                      n === '' ||
                      p === '' ||
                      k === '' ||
                      ph === '' ||
                      ec === '' ||
                      oc === '' ||
                      s === '' ||
                      zn === '' ||
                      fe === '' ||
                      cu === '' ||
                      mn === '' ||
                      b === ''
                        ? true
                        : false
                    }
                    onClick={handleSubmit}
                  >
                    {props.t('go.1')}
                  </button>
                </div>
              </div>
              <Modal title={props.t('quality.title')} content={`${res}`} t={props.t} lang={props.lang}/>
            </div>
            <img src={imgphone} alt="" className="w-[300px] hidden md:block" />
          </div>
      </div>
      <Footer t={props.t} lang={props.lang} />
    </>
  )
}

export default CropSafety
