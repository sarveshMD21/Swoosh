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
      <nav className='flex justify-between items-center  max-container'>
        <a href="/">
        <div className='text-coral-red text-lg font-bold'>SWOOSH</div>
        {/* <img src={headerLogo} alt="logo" height={29} width={130}/> */}
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
         {navLinks.map((item)=>{
          return <li key={item.label}>
            <a href="/" className="text-slate-gray text-lg font-montserrat leading-normal">
            {item.label}
            </a>
          </li>
         })}
        </ul>
        <div className='hidden max-lg:block' onClick={handleClick}>
          <img src={hamburger} alt="hamburger" width={25} height={25}/>
        </div>
      </nav>
      <div ref={dropdownRef} className="mt-3  w-full hidden absolute z-10">
        <ul >
        {navLinks.map((item)=>{
          return <li key={item.label} className='bg-pale-blue'>
            <a href="/" className="text-slate-gray text-lg font-montserrat leading-normal">
            {item.label}
            </a>
          </li>
         })}
        </ul>
      </div>
    </header>
  )
}

export default Navbar