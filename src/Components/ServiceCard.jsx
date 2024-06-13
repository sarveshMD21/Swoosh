import React from 'react'
import { truckFast } from '../assets/icons' 
import { shoe4 } from '../assets/images'

const ServiceCard = ({imgURL,label,subtext}) => {
    //console.log(imgURL);
  return (
    <div className='flex flex-col rounded-md p-4 shadow-3xl hover:translate-y-3 '>
        
        <img src={imgURL} alt={label} className='w-10 h-10'/>
        <div className='flex'>
            <p className='font-bold text-xl'>{label}</p>
        </div>
        <div className='w-3/4 mt-3 leading-5'>
            <p className='text-slate-gray'>{subtext}</p>
        </div>
    </div>
  )
}

export default ServiceCard