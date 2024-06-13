import React from 'react'
import { offer } from '../assets/images'

const SpecialOffer = () => {
  return (
    <section id="SpecialOffer" className='flex lg:flex-row  flex-col-reverse justify-between'>
      <div className='flex justify-center items-center '>
        <img src={offer} className='w-5/6 h-5/6'/>
      </div>
      <div className='flex flex-col  p-10 lg:w-1/3'>
        <div className='flex h-1/3 justify-center items-center'>
        <h1 className='font-bold text-4xl'><span className='text-coral-red'>Special</span> Offer</h1>
        </div>
        <div className='flex justify-start h-1/3 text-lg text-slate-gray leading-6'>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dolor laboriosam doloremque corrupti 
          cupiditate sit mollitia dolore, id asperiores in atque labore, tenetur fugit! Velit reprehenderit reiciendis 
          repellendus voluptatum! Enim?</p>
        </div>
        <div className='flex justify-center items-center mt-2'>
          <button className='bg-coral-red rounded-full p-5 text-white hover:bg-black transition ease-out duration-500'>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer