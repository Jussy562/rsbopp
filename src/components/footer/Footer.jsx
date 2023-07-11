import React from 'react';
import { RiMailFill } from 'react-icons/ri';
import { MdLocalPhone } from 'react-icons/md';

function Footer() {
  return (
    <div className='flex flex-col items-center w-full '>
        
            <div className='w-full flex flex-col items-cente  gap-2 lg:gap-3'>
                <div className='flex flex-row justify-start items-center w-full'>
                    <p className='text-blue-800 text-sm'>Contact us</p>
                </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    <a href='#' className='flex flex-row items-center gap-2 text-blue-800 text-sm'>
                        <RiMailFill />
                        <p>info@rsbopp.rv.gov.ng</p>
                    </a>
                    <a href='#' className='flex flex-row items-center gap-2 text-blue-800 text-sm'>
                        <MdLocalPhone />
                        <p>+234 703 604 5719</p>
                    </a>
                    <p className='text-blue-800 font-light text-sm'>Copyright &copy;  2023</p>
                    <a href='#' className='flex flex-row items-center gap-2 text-blue-800 text-sm'>
                        
                        <p>Terms & Conditions</p>
                    </a>
                    <a href='#' className='flex flex-row items-center gap-2 text-blue-800 text-sm'>
                        
                        <p>Policy & Privacy</p>
                    </a>
                </div>
            </div>
        
    </div>
  )
}

export default Footer