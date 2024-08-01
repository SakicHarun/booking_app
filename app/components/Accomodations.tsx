import React from 'react'
import Image from 'next/image'
const Accomodations = () => {
  return (
    <div className='w-full block p-20'>
       <h4 className='text-[#323642] text-5xl font-semibold whitespace-nowrap'>Popular Accomodations</h4>

      <div className='grid grid-cols-1 mt-20 md:grid-cols-2 items-center lg:grid-cols-4'>
     
  
     <div>
       <img src="/hoteldubrovnik.png" alt="Hotel Dubrovnik" />       
     </div>

     <div>
       <img src="/hoteldubrovnik.png" alt="Hotel Dubrovnik" />       
     </div>

     <div>
       <img src="/hoteldubrovnik.png" alt="Hotel Dubrovnik" />       
     </div>

     <div>
       <img src="/hoteldubrovnik.png" alt="Hotel Dubrovnik" />       
     </div>
     
     

</div>
<div className='mt-20 items-center w-full text-center flex justify-center whitespace-nowrap'>
    <a  className='bg-[#F16A67] text-white rounded-lg px-20 py-2' href="/listofaccomodations">View all</a>


</div>

</div>



  )
}

export default Accomodations
