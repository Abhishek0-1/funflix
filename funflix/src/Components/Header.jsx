import React from 'react'
import assets from '../assets/menu.png'

function Header() {
  return (
    <div className='bg-gray-950   p-4  text-gray-400'>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='flex text-white'><h1 className='text-2xl font-extrabold'>
            
            <img className='h-6  items-center' src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-0c6ef0bdbf918a098bf915273cd4ca39cb1afd7992deef185dafe33b2c623b2f.svg" alt="" /> </h1>
            </div>

        </div>
        <div className='flex font-semibold  items-center gap-8'>
          <p className='hover:text-white cursor-pointer items-center font-semibold'>Forums</p>
          <p className='hover:text-white cursor-pointer items-center font-semibold'>start selling</p>
          <p className='flex hover:text-white cursor-pointer items-center gap-2 font-semibold'><img className='h-5 invert' src="src/assets/menuu.png" alt="" /> our products</p>
          <button className='flex gap-3 bg-gray-800 p-3 pr-4 semibold hover:text-white cursor-pointer'> <img className='h-6 hover:invert invert-50 ' src="src/assets/store.png" alt="img" /> Sign in</button>
        </div>
      </div>
      <div className='flex gap-6 mt-6'>
        <p className='cursor-pointer hover:text-white font-semibold' >Web Themes & Templates</p>
        <p className='cursor-pointer hover:text-white font-semibold' >Code</p>
        <p className='cursor-pointer hover:text-white font-semibold' >Video</p>
        <p className='cursor-pointer hover:text-white font-semibold' >Audio</p>
        <p className='cursor-pointer hover:text-white font-semibold' >Grafics</p>
        <p className='cursor-pointer hover:text-white font-semibold' >Photos</p>
        <p className='cursor-pointer hover:text-white font-semibold' >3D Fles</p>
        <p >|</p>
        <p className='cursor-pointer hover:text-white font-semibold' >Ultimited Downloads</p>
      </div>
    </div>

  )
}

export default Header
