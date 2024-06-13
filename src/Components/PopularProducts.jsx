import React from 'react'
import { products } from '../constants'
import PopularCard from './PopularCard'

const PopularProducts = () => {
  return (
   <section
   id="Products"
   className='max-container max-sm:mt-12'
   >
    <div className='flex flex-col justify-start gap-5'>
      <h1 className='text-4xl font-palanquin font-bold'>
        Explore our <span className='text-coral-red'>popular</span> products
      </h1>
      <p className='text-slate-gray font-montserrat leading-5'>The goto choice for millions worldwide. Explore our most popular product ranges and become part of swoosh tribe</p>
      <div className='mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14 '>
        {products.map((item)=>{
          return <PopularCard imgURL={item.imgURL} name={item.name} price={item.price} rating={item.ratings}/>
        })}
      </div>
    </div>
   </section>
  )
}

export default PopularProducts