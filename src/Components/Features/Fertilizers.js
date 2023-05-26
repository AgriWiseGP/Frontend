import React, { useState, useEffect } from 'react'
import fertilizer from '../../image/lab2.webp'
import imgfeature7 from '../../image/Mask Group 13.webp'
import Footer from '../Footer/Footer'
import imgphone from '../../image/Location tracking.webp'
import Modal from './Modal'
import Header from '../Header/Header'
import axios from '../axios'
import Map from './Map'
const Fertilizers = (props) => {

    const [places, setPlaces] = useState([]);
    const [nearestPlaces, setNearestPlaces] = useState([]);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(`Latitude: ${position.coords.latitude}`);
      },
      error => console.log(error)
    );
  }, []);

  const handleClick = () => {
    if (latitude && longitude) {
      axios
      .post('nearest/supplier/', {})
      .then((response) => {
        setPlaces(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (latitude && longitude && places.length > 0) {
      const distances = places.map(place => {
        const distance = getDistance(latitude, longitude, place.lat, place.long);
        return { ...place, distance };
      });
      console.log(distances);
      distances.sort((a, b) => a.distance - b.distance);
      setNearestPlaces(distances.slice(0, 3));
    }
    console.log(nearestPlaces);
  }, [latitude, longitude, places]);

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; // Distance in km
    return d;
  };

  const toRadians = (degrees) => {
    return degrees * Math.PI / 180;
  };

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
          src={fertilizer}
          className="absolute w-full h-[270px] sm:h-[400px]"
          alt=""
        />
        <div className="relative h-[270px] sm:h-[400px]">
          <div className="absolute z-30 text-white text-center bg-opacity-50 w-full h-full bg-gray-900 flex justify-center items-center ">
            <h1 className="text-2xl md:text-4xl text-white font-bold">
              {props.t('fertilizer.title')}
            </h1>
          </div>
        </div>
        <img
          src={imgfeature7}
          alt=""
          className="relative h-48 w-48 sm:w-56 sm:h-56 rounded-full mx-auto -translate-y-1/2 top-1/2 z-50 border-[5px] shadow-lg border-[#F7F2EC] dark:border-[#111827]"
        />
        <div className="flex justify-around items-center text-center md:text-left md:rtl:text-right mt-[-40px] pb-[30px] px-4">
          <div>
            <h1 className="md:text-2xl text-xl text-black text-[#17A267] font-bold ">
              {props.t('fertilizer.title')}
            </h1>
            <p className="w-full sm:w-[350px] text-lg mx-auto md:mx-0 text-black dark:text-white p-4 md:px-0">
              {props.t('fertilizer.text')}
            </p>
            <div className="flex justify-center md:justify-start">
              <div>
                <button
                  data-modal-target="defaultModal"
                  data-modal-toggle="defaultModal"
                  className="bg-[#17A267] w-32 text-[18px] text-white duration-500 hover:bg-green-400 mt-5 mx-auto md:mx-0 px-4 py-2 rounded block transform hover:translate-y-1 transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  type="submit"
                  name="submit"
                  id="submit"
                  disabled={latitude && longitude ? false : true}
                  onClick={handleClick}
                >
                  {props.t('go.1')}
                </button>
              </div>
            </div>
            <Modal
              title={props.t('fertilizer.title')}
              content={
                nearestPlaces.length !== 0 ?
                <span>
                  <Map places={nearestPlaces} latitude={latitude} longitude={longitude}/>
                <ul className='marker:text-green-950 ml-8 list-disc text-black dark:text-white'>
                  {nearestPlaces.map((place) => (
                    <li key={place.id}>
                      {place.name}
                    </li>
                  ))}
                </ul>
                </span> : ""

              }
              t={props.t}
              lang={props.lang}
            />
          </div>
          <img src={imgphone} alt="" className="w-[300px] hidden md:block" />
        </div>
      </div>
      <Footer t={props.t} lang={props.lang} />
    </>
  )
}
export default Fertilizers
