import React from 'react'
import { services } from '../constants'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
   <section id="Services" className='flex flex-col'>
    <div className='flex md:justify-center sm:justify-start'>
            <p className='font-bold font-palanquin text-4xl'>OUR <span className='text-coral-red'>SERVICES</span></p>
        </div>
    <div className='mt-10 grid gap-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
      {services.map((item)=>{
      //  console.log(item.imgURL)
        return <ServiceCard imgURL={item.imgURL} label={item.label} subtext={item.subtext}/>
      })}
    </div>
   </section>
  )
}

export default Services