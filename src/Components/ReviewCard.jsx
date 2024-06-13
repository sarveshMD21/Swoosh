import React from 'react'
import { star } from '../assets/icons'
const ReviewCard = ({imgURL,feedback,customerName,rating}) => {
  return (
    <div className='w-2/3 flex flex-col p-2 justify-center rounded-md bg-pale-blue '>
        <div className='flex p-2 justify-center '>
            <img src={imgURL} className='rounded-full w-20'/>
        </div>
        <div className="flex flex-col justify-center mt-3">
             <div className='mt-2 flex justify-center '>
                <p className='w-1/3'>{feedback}</p>
             </div>
             <div className='mt-2 flex justify-center '>
                <img src={star} className='mr-2'/>
                <p>{rating}</p>
             </div>
             <div className='mt-2 flex justify-center'>
                <p className='font-bold font-montserrat text-2xl'>{customerName}</p>
             </div>
        </div>
    </div>
  )
}

export default ReviewCard