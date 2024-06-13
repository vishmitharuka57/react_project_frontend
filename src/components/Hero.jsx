import React from 'react'
import { IoIosSearch } from "react-icons/io"
import CategoryWrapper from '../pages/category/CategoryWrapper'

const Hero = () => {
  return (
    <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
        <form action="/search" className=' p-4 rounded relative flex items-center position: relative bottom-16'>
        <IoIosSearch className='w-5 h-5 mr-2 text neutral-300' />
        <input className=' w-full h-10 rounded border outline-none' name='query' type="search" placeholder='Search your favourite plants' id='search' required="" />
        </form>
        <CategoryWrapper  />

        <h1 className=' position: relative bottom-14 mt-3 w-full mb-13 text-5xl xl:text-7xl text-center font-bold text-green-800 leading-normal xl:leading-relaxed '>Hello Plant Lovers !</h1>
        <h1 className=' position: relative bottom-14 mt-3  w-full mb-13 text-2xl xl:text-4xl text-center font-bold text-black leading-normal xl:leading-relaxed'>Welcome to Blossom Grove Garden</h1>
        <h1 className=' position: relative bottom-14 mt-3  w-full mb-13 text-2xl text-center leading-normal xl:leading-relaxed'>Buy your favourite plants and get delivered!</h1>
    </div>
  )
}

export default Hero