import React from 'react'
import { footerLogo } from '../assets/images'
import { socialMedia } from '../constants'
import { footerLinks } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
          <h1 className='text-white font-palanquin font-bold text-2xl'>SWOOSH</h1>
          </a>
          <p className='text-white flex-wrap mt-4 w-2/3 leading-5'>Get you shoes now from our stores. All the images and logos mentioned in the site
            are property of swoosh any misrepresentation is liable for penalty.
          </p>
          <p className='text-white mt-4 w-3/4 leading-5'>Follow us on our socials.</p>
          <div className='flex gap-3 mt-4'>
            {socialMedia.map((item)=>{
              return <div className='bg-white rounded-full p-2 hover:bg-coral-red'>
                <img src={item.src} alt={item.alt}/>
              </div>
            })}
          </div>
        </div>
      </div>

      <div className='flex flex-1 mt-20 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>

    </footer>
  )
}

export default Footer