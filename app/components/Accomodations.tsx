import React from 'react'
import Image from 'next/image'
const Accomodations = () => {
  return (
    <div className='w-full flex mt-20'>
       <h4 className='text-[#323642] text-5xl font-semibold ml-48 whitespace-nowrap'>Popular Accomodations</h4>
                     
      <div className='grid grid-cols-1 mt-20 md:grid-cols-2 items-center -ml-80 lg:grid-cols-4 w-full '>
     
     <div className=' -ml-60'>
       <img src="/hoteldubrovnik.png" alt="" />
         
     </div>
  
     <div className=' -ml-60'>
       <img src="/hoteldubrovnik.png" alt="" />
         
     </div>
     <div className=' -ml-60'>
       <img src="/hoteldubrovnik.png" alt="" />
         
     </div>

     <div className=' -ml-60'>
       <img src="/hoteldubrovnik.png" alt="" />
         
     </div>
     <div className='mt-32 items-center ml-96 w-full text-center flex justify-center whitespace-nowrap'>
    <a  className='bg-[#F16A67] text-white rounded-lg px-20 mr-40  py-2' href="/listofaccomodations">View all</a>

</div>


</div>
</div>



  )
}

export default Accomodations
