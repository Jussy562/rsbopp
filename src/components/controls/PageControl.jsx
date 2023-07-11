import React from 'react';
import './pageControl.css';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import PageNumber from './PagNumber';

function PageControl({next, prev, pages, currentPage, updateCurrentPage}) {
  return (
    <div className='flex flex-row w-auto justify-end items-center'>
        <button 
        className='flex justify-center items-center w-auto 
        h-auto py-4 px-4 bg-gray-300 hover:bg-gray-400 
        rounded-xl mr-2 text-black'
        onClick={prev}
        >
            <FaAngleLeft />
            
        </button>

        
        <div className='hidden md:flex   flex-row w-auto h-auto gap-1
        mr-2'>
            {
                pages.map((page) => {
                    return(
                    <li className='list-none w-full'
                    
        
                    key={page}
                    
                    >
                      <PageNumber
                        pageNums={page}
                        currentPage = {currentPage}
                        updateCurrentPage = {updateCurrentPage}
                       />
                    </li>
                )})
            }

                    
        </div>
        

        
        <button 
        className='flex justify-center items-center w-auto 
        h-auto py-4 px-4 bg-gray-700 hover:bg-gray-600 
        rounded-xl text-white'
        onClick={next}
        >
            <FaAngleRight />
        </button>
    </div>
  )
}

export default PageControl