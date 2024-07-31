import React from 'react'
import Image from 'next/image'
const Cities = () => {
  return (
    <div className='w-full flex mt-40 '>
          <h4 className='text-[#323642] text-5xl font-semibold ml-48 whitespace-nowrap'>Popular Cities</h4>

         
          <div className='flex flex-col sm:flex-row sm:gap-28 -ml-80 '>
          <div className=' mt-48 -ml-10'>
            <img src="/vector.png" alt="" />
        </div>
      
     
            <div className='mt-20  -ml-20'>
             <img src="/Mostar.png" alt="" width={450} height={450}/>
                <p className='text-[#323642] font-semibold -mt-8 ml-5 '>Mostar</p>
            </div>
         
            
            <div className='mt-20 -ml-16 '>
            <img src="/Sarajevo.png" alt="" width={450} height={450} />
                <p className='text-[#323642] font-semibold -mt-8 ml-7 '>Sarajevo</p>
            </div>
            
            <div className='mt-20 -ml-16'>
         
            <img src="/Travnik.png" alt="" width={450} height={450} />
                   
                <p className='text-[#323642] font-semibold -mt-8  ml-7 '>Travnik</p>


               
            </div>
            
        </div>
        <div className=' mt-48 ml-12'>
            <img src="/arrow.png" alt="" />

      </div>
  
    </div>
  )
}

export default Cities 
