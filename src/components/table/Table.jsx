import React from 'react'
import SampleData from './tableData';
import { RiFolderTransferFill } from 'react-icons/ri';
import PageControl from '../controls/PageControl';

function Table() {
  return (
    <div className="media h-auto">
 
      <div className="media-body w-full ">
            <div className='flex flex-row justify-start items-center'>
                <button className='bg-blue-600 text-white p-2 text-sm'>Bids Open for Bidding</button>
                <button className='bg-red-500 text-white p-2 flex flex-row items-center justify-center gap-2 text-sm'>
                  Closed Bids
                  <RiFolderTransferFill />
                </button>
            </div>
           
            <div className=' table-container w-full text-black'>
              <table className="user-table  p-0 md:p-4  bg-white w-full">
                  <thead className='border-collapse border-none m-0 p-0 w-full '>
                    
                      <tr className='w-full text-center'>
                      <th className='text-sm'> Mda</th>
                      <th className='text-sm'> Bid #</th>
                      <th className='text-sm'> Bid Name</th>
                      <th className='text-sm'> Date Posted</th>
                      <th className='text-sm '> Deadline</th>
                      </tr>
                    
                  </thead>
                  <tbody className='w-full '>
                  {
                    SampleData.map((item, index) =>
                    
                        {
                      
                      return (
                        <tr key={index} className='text-start w-full data-row' 
                        >
                          <td className='text-sm'>
                            <p>{item.mda}</p>
                          </td>
                          
                          <td className='text-sm '>
                            <p
                             
                            >
                              {item.bid}</p>
                          </td>
                          <td className='text-sm '>
                            <p
                           
                            >
                              {item.bidName}</p>
                          </td>
                          <td className='text-sm'>
                            <p>{item.date}</p>
                          </td>
                          <td className='text-sm'>
                            <p>{item.Deadline}</p>
                          </td>
                        </tr>
                      )        
                    })
                  }
                      
                  </tbody>
              </table>
            </div>
            {/* pagination */}
            {/* <div>
              <PageControl />
            </div> */}
      </div>
    </div>
  )
}

export default Table