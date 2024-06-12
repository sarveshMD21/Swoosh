import React from 'react'
import Button from './Button'
import { arrowRight } from '../assets/icons'
import { shoes,statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from './ShoeCard'

const Hero = () => {
  return (
    <section
    id="home"
    className='w-full flex xl:flex-row flex-col  justify-center min-h-screen max-container p-3 bg-pale-blue '
    >
      <div
      className='relative max-xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding  pt-28'
      >
        <p className='text-xl font-montserrat text-coral-red'>New swoosh collections</p>
        <h1 className='font-bold font-palanquin mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] flex flex-col'>
          <span className='xl:whitespace-nowrap relative z-10 pr-10'>Premium Arrivals</span>
          <span className='mt-3 text-coral-red'>Swoosh shoes</span>
        </h1>
        <p className='text-slate-gray font-montserrat text-lg mt-14 mb-14 leading-8'>Discover our latest innovations has everything from style, comfort and durability</p>
        <Button label="shop now" iconUrl={arrowRight}/>
        <div className="flex justify-starts items-start flex-wrap w-full gap-16 mt-20"
        > 
        {statistics.map((item)=>{
          return <div key={item.label}>
            <p className='text-4xl font-palanquin font-bold'>{item.value}</p>
            <p className='text-sm text-slate-gray font-montserrat leading-7'>{item.label}</p>
          </div>
        })}
        </div>
      </div>
      <div className='flex flex-col justify-between items-center xl:min-h-screen max-xl:py-40  border-2 border-coral-red '>
        <img src={bigShoe1}    className='object-contain h-5/6'/>
        <div className='flex flex-row gap-4 border-2 border-coral-red'>
          {shoes.map((shoe)=>{
            return <div>
              <ShoeCard/>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero