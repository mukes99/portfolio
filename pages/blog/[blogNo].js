import React from 'react'
import { useRouter } from 'next/router'
const blogNo = () => {
    const router = useRouter();
    const pageNumber = router.query.blogNo;
  return (
    <div>
      <h1 className='bg-lime-600  p-2 text-center text-white'>
          My Page Number {pageNumber} content. 
      </h1>
    </div>
  )
}

export default blogNo
