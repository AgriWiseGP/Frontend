import React from 'react'
import { Link } from 'react-router-dom'
import googleplay from '../../image/play.webp'
import img from '../../image/DOC.webp'
const Footer = (props) => {
  const links = [
    {
      title: props.t("links.1"),
      links: [
        {
          Name: props.t("home.1"),
          link: '/',
        },
        {
          Name: props.t("feature.1"),
          link: '/features',
        },
        {
          Name: props.t("about.1"),
          link: '/about-us',
        },
        {
          Name: props.t("contact.1"),
          link: '/contact-us',
        },
      ],
    },
    {
      title: props.t("about.1"),
      links: [
        {
          Name: props.t("team.1"),
          link: '/',
        },
      ],
    },
  ]
  return (
    <div>
      <div className="bg-[#EFE7DF] dark:bg-gray-800 p-4 border-black " id="footer">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between ">
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <Link to="/">
                <img
                  src={img}
                  alt=""
                  className="w-100 object-contain h-16"
                />
              </Link>
              <p className="leading-2 w-full sm:w-[200px]  text-border mt-3 dark:text-white text-black font-semibold">
                {props.t("agriwise.1")}
              </p>
              <img
                src={googleplay}
                className="w-32 h-12 mt-3 hover:cursor-pointer"
                alt=""
              />
            </div>
            {links.map((link, i) => (
              <div
                key={i}
                className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0 "
              >
                <h3 className="text-xl lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6  pb-.5 text-black dark:text-white">
                  {link.title}
                </h3>
                <ul className="flex flex-col space-y-2 text-black dark:text-white">
                  {link.links.map((li, i) => (
                    <li key={i} className="flex ">
                      <Link
                        to={li.link}
                        className="text-border inline-block w-full hover:text-green-950"
                      >
                        {li.Name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0">
              <h3 className="text-xl lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6 pb-.5 text-black dark:text-white">
                {props.t("contact.1")}
              </h3>
              <ul className=" flex flex-col space-y-2 text-black dark:text-white rtl:font-sans">
                <li className="flex ">
                  <span className="text-border inline-block w-full">
                    01010101010
                  </span>
                </li>
                <li className="flex ">
                  <span className="text-border inline-block w-full">
                    Agriwise@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-16 bg-[#F7F2EC] dark:bg-[#111827] rtl:hidden">
        <div className="text-center text-black dark:text-white pt-4 font-bold">
          Copyright © 2023 <span className="text-green-950">AgriWise</span>
          <div className='font-normal'>
          <a href="https://storyset.com/people">People illustrations by Storyset</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer