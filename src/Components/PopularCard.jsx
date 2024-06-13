import React from 'react'
import { star } from '../assets/icons'

const PopularCard = ({imgURL,name,price,rating}) => {
  return (
    <div className='flex flex-col w-full'>
        <div className='flex justify-center'>
        <img src={imgURL} alt={name} className='w-3/4 h-5/6 hover:translate-y-3'/>
        </div>
        <div className='flex flex-row justify-center'>
            <img src={star} alt="star"/>
            <div className='ml-3 flex justify-center items-center font-bold text-slate-gray'>
            <span>{rating}</span>
            </div>
        </div>
        <div className='flex justify-center mt-3'>
            <h2 className='font-bold font-palanquin'>{name}</h2>
        </div>
        <div className='flex justify-center mt-3'>
        <p className='text-slate-gray'>{price}</p>
        </div>
    </div>
  )
}

export default PopularCard