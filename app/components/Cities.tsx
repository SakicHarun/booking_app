import React from 'react'
import Image from 'next/image'
const Cities = () => {
  return (
    <div className='w-full mt-40 p-20 '>

          <h4 className='text-[#323642] text-5xl font-semibold whitespace-nowrap'>Popular Cities</h4>

          <div className='flex flex-col sm:flex-row sm:gap-5 lg:gap-20 py-10 mx-5'>
          <div className='lg:mt-20'>
            <img src="/vector.png" alt="" />
          </div>
      
     
            <div>
             <img src="/Mostar2.jpg" className="rounded-md" alt="" width={450} height={450}/>
                <p className='text-[#323642] font-semibold py-2'>Mostar</p>
            </div>
         
            
            <div>
              <img src="/Sarajevo2.webp" className="rounded-md"  alt="" width={450} height={450} />
                  <p className='text-[#323642] font-semibold py-2'>Sarajevo</p>
            </div>
            
            <div>
              <img src="/Travnik2.jpg" className="rounded-md" alt="" width={450} height={450} />
                  <p className='text-[#323642] font-semibold py-2'>Travnik</p>
            </div>

            <div className='lg:mt-20'>
              <img src="/arrow.png"/>
            </div>
            
        </div>
        
  
    </div>
  )
}

export default Cities 
