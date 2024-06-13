import React from 'react'
import { reviews } from '../constants'
import ReviewCard from './ReviewCard'

const CustomerReview = () => {
  return (
    <section id="Review" className='flex flex-col'>
      <div className='flex justify-center'>
        <h1 className='font-bold text-4xl'>What do our <span className='text-coral-red'>Customers</span> say ?</h1>
      </div>
      <div className='flex justify-center mt-2'>
        <p className='font-montserrat text-slate-gray'>Reviews from few of thousands of customers worldwide </p>
      </div>
      <div className='mt-2 p-3  gap-2 grid md:grid-cols-2 grid-cols-1'>
        {reviews.map((item)=>{

          return <div className='flex justify-center p-5'><ReviewCard imgURL={item.imgURL} feedback={item.feedback} customerName={item.customerName} rating={item.rating}/></div>
        })}
      </div>
    </section>
  )
}

export default CustomerReview