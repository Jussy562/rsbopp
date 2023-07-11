import React from 'react';

//  ${currentPage === page} ? active : ""
function PageNumber({pageNums, currentPage, updateCurrentPage}) {

  const pageNumHandler = () => updateCurrentPage(pageNums);
  
  return (
    <button 
    className={`rounded-lg  flex justify-center items-center
     bg-gray-300 px-3 py-6 h-5 w-8 text-[#40C8CC] font-bold
     ${currentPage === pageNums ? 'active' : ''}
    `}
    onClick={pageNumHandler}
    >
        {pageNums}
    </button>
  )
}

export default PageNumber