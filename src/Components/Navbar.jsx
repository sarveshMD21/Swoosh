import React from 'react'
import headerLogo from '../assets/images/header-logo.svg';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';
import { useState } from 'react';
import { useRef } from 'react';

const Navbar = () => {
 const [open,setOpen]=useState(false);
 const dropdownRef = useRef(null);

 const handleClick=()=>{
  setOpen(!open);
  if(dropdownRef.current){
    dropdownRef.current.classList.toggle('hidden');
    dropdownRef.current.classList.toggle('block');
  }
 }

 
  return (
    <header className='padding-x py-10  w-full '>
      <nav className='flex lg:flex-row flex-col items-center  max-container gap-40'>
        <div className='flex lg:w-1/3 w-full justify-between  '>
        <a href="/">
        <div className='text-coral-red text-lg font-bold'>SWOOSH</div>
        </a>
        <div className='hidden max-lg:block' onClick={handleClick}>
          <img src={hamburger} alt="hamburger" width={25} height={25}/>
        </div>
        </div>
        <div ref={dropdownRef} className=' bg-white'>
        <ul className="flex lg:flex-row  flex-col flex-1 justify-end items-center gap-16 ">
         {navLinks.map((item)=>{
          return <li key={item.label}>
            <a href="/" className="text-slate-gray text-lg font-montserrat leading-normal">
            {item.label}
            </a>
          </li>
         })}
        </ul>
        </div>
      
      </nav>
      {/* <div ref={dropdownRef} className="mt-3  w-5/6  hidden absolute z-10">
        <ul >
        {navLinks.map((item)=>{
          return <li key={item.label} className='bg-black p-2 transition ease-out duration-200'>
            <a href="/" className="text-white text-lg font-montserrat leading-normal ">
            {item.label}
            </a>
          </li>
         })}
        </ul>
      </div> */}
    </header>
  )
}

export default Navbar