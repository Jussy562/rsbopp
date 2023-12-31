import React from 'react';
import rsbopp from '/rsbopp.png';
import rsvv from '/rsvv.png';
import { RiLoginBoxFill, RiMailFill } from 'react-icons/ri';
import { TbTriangleInvertedFilled } from 'react-icons/tb';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLocalPhone, MdLocationOn } from 'react-icons/md';


function Navbar() {
  return (
    <div className=' hidden md:flex flex-col w-full'>
        <div className='flex flex-row justify-between items-center bg-blue-600 py-3 px-10'>
            <div className='flex flex-row gap-6 items-center justify-between w-half'>
                <div className='flex flex-row gap-2 text-white items-center cursor-pointer'>
                    <RiLoginBoxFill className='text-white font-extrabold text-3xl' />
                    <p className='text-sm'>Sign In</p>
                </div>
                <div>
                    <button type="button" className='bg-white hover:bg-blue-300 px-3 py-1 shadow-md rounded-2xl text-black hover:text-white text-sm'>
                        Get Started
                    </button>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-auto  p-2 text-sm text-gray-900 border-none shadow-md rounded-2xl bg-white dark:placeholder-gray-400">
                <div className='text-lg text-gray-300'>
                    <AiOutlineSearch />
                </div>
                <input type="search" id="search" className="block w-full p-0 text-sm text-gray-900 border border-none rounded-lg bg-none focus:ring-none focus:border-none focus:outline-none dark:bg-none dark:border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-none dark:focus:border-none " placeholder="Category" />
                <div className='pl-2 border border-gray-300 border-r-0 border-b-0 border-t-0 text-gray-300'>
                    <TbTriangleInvertedFilled />
                </div>
            </div>
        </div>
        <div className=' w-full bg-white flex flex-col px-10 py-3'>
            <div className='w-full flex flex-row justify-between items-center mb-6'>
                <div>
                    <img src={rsbopp} alt='rsbopp' />
                </div>
                <div>
                    <img src={rsvv} alt='rsv' className='w-28' />
                </div>
            </div>
            <div className='flex flex-row justify-between items-center px-8'>
                <a href='#' className='flex flex-row items-center gap-2 text-blue-800 text-sm'>
                    <RiMailFill />
                    <p>info@rsbopp.rv.gov.ng</p>
                </a>
                <a href='#' className='flex flex-row items-center gap-2 text-blue-800 text-sm'>
                    <MdLocationOn />
                    <p>Water Line House, 169 Aba Road, Port Harcourt</p>
                </a>
                <a href='#' className='flex flex-row items-center gap-2 text-blue-800 text-sm'>
                    <MdLocalPhone />
                    <p>+234 703 604 5719</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar