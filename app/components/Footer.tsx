import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={`w-full flex bg-[#393939] mt-20 ${className}`}>
      <div className='w-full container mx-auto'>
        <div className='w-fullflex items-center justify-between'>
            
           
        </div>

        <div className='flex flex-col sm:flex-row sm:gap-28 w-full'>
          <div className='sm:my-12 my-5'>
          <h6 className='text-base text-white font-bold mb-5 whitespace-nowrap'>Phone Number</h6>
          <div>
          <img src="/whitephone.png" alt="phone" />
          <p className='ml-7 text-white font-light -mt-5 mb-5 whitespace-nowrap'>032/556-665</p>
          </div>
            <div className='mt-3'>
            <img src="/whitephone.png" alt="phone" />
            <p className='ml-7 text-white font-light -mt-4 whitespace-nowrap'>062/546-365</p>
            </div>
        
          

            </div>

            <div className='sm:my-12 my-5 ml-20'>
            <h6 className='text-base text-white font-bold mb-5'>Location</h6>


          
              
              <p  className='font-light text-white mt-4 mb-5 text-base whitespace-nowrap' >Fakultetska 1, Zenica </p>
              <p className='font-light text-white mt-1 text-base whitespace-nowrap'>Bosna i Hercegovina</p>
              
              
            

            
            </div>


            <div className='sm:my-12 my-5 ml-10 '>
            <img src="/logo.png" alt="logo" width={256} height={256} />
            <p className='text-center text-white font-light text-base mt-10 whitespace-nowrap'>© 2022. All rights reserved.</p>
            </div>

            <div className='sm:my-12 my-5 ml-20'>
            <h6 className='text-base text-white font-bold mb-3'>Links</h6>
            <ul>
              <li className='mb-5 hover:underline'></li>
              <a href="/"  className='hover:underline font-light text-base text-white'>Home</a>
              <li className='mb-5 hover:underline'></li>
              <a href="/"  className='hover:underline font-light text-base  text-white whitespace-nowrap'>About us</a>
              <li className='mb-5 hover:underline'></li>
              <a href="/"  className='hover:underline font-light text-base mt-5 text-white'>Contact</a>
              
            


            </ul>

            
            </div>

            
            <div className='sm:my-12 my-5 ml-20 '>
            <h6 className='text-base text-white font-bold mb-3 whitespace-nowrap'>Social Media</h6>
            <ul>
              <li className='mb-5 hover:underline'></li>
              <a href="/"  className='hover:underline font-light text-base text-white'>Facebook</a>
              <li className='mb-5 hover:underline'></li>
              <a href="/"  className='hover:underline font-light text-base  text-white'>Instagram</a>
              <li className='mb-5 hover:underline'></li>
              <a href="/"  className='hover:underline font-light text-base mt-5 text-white'>Twitter</a>
              
            


            </ul>

            
            </div>


        </div>



    

       

      </div>


    </div>
  )
}

export default Footer
