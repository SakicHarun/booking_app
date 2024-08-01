
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
<div className='w-full flex sm:p-3 lg:p-5'>


    {/* <div className='w-full bg-slate-600  flex relative p-5 '>
      
<div className='w-full flex items-center  ml-40'> */}

  <a className='flex items-center'  href="/">
  <Image
  src={'/logo.png'}
  alt='logo'
  width={256}
  height={256}
  />
  </a>

      <ul className='w-full ml-72  flex items-center justify-center'>
        <a className='text-2xl text-[#323642] mr-14 font-medium' href="/">Home</a>
        <a className=' text-2xl text-[#323642] mr-14 font-medium' href="/about">About us</a>
        <a className=' text-2xl text-[#323642] mr-14 font-medium' href="/contact">Contact</a>
        <a className=' text-2xl text-[#323642] mr-16 font-medium' href="/login">Sign In</a>
        <li className='bg-[#F16A67] text-center font-semibold text-2xl  text-white rounded-lg px-3  py-2'>
        <a className='px-5' href="/signup">Sign up</a>
      </li>
      </ul>
        
  

</div>

        

       


//     </div>



// </div>
  )
}

export default Navbar
