import React from 'react'

const Button = ({label,iconUrl}) => {
  return (
    <button className='flex text-lg font-montserrat gap-2 mt-5 px-7 py-4 justify-center items-center leading-none bg-coral-red rounded-full text-white
     hover:bg-black transition ease-out duration-500'>
        {label}
        <img src={iconUrl} alt="right arrow icon" className='ml-2 w-5 h-5 rounded-full'/>
    </button>
  )
}

export default Button