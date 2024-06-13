import React from 'react'
import Button from './Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'


const SuperQuality = () => {
  return (
    <section id="Custom">
      <div className='flex justify-between max-lg:flex-col items-center'>
      <div className='flex justify-center items-center mr-2'>
        <img src={shoe8} className='w-3/4 h-3/4'/>
      </div>
        <div className='flex flex-col'>
          <div>
            <h1 className='font-bold text-4xl'><span className='text-coral-red'>Customize</span> Your <span className='text-coral-red'>own</span> Shoe</h1>
          </div>
          <div className='mt-3'>
            <p className='text-slate-gray text-lg'>Here in Swoosh we believe everybody is unique. Show the world what you are with your own custom shoe.</p>
          </div>
          <div>
            <Button label="Check out" iconUrl={arrowRight}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuperQuality