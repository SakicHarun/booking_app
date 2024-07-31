import React from 'react'
import Image from 'next/image'
import {Checkbox} from "@nextui-org/checkbox";
const Registration = () => {
  return (
    <div className='w-full flex p-5 '>


    <div className='w-full  flex absolute p-5 '>
      
<div className='w-full flex flex-col-2 whitespace-nowrap '>
<div className='w-full flex items-center mt-20 ml-20   '>

<a className='flex items-center -mt-80 ml-20'  href="/">
<Image className='-mt-72 mb-40'
src={'/logo.png'}
alt='logo'
width={256}
height={256}
/>
</a>

<div className=' mb-20 mr-1'>
    <h1 className='text-[#F16A67] text-4xl text-left -ml-48 -mt-72 font-bold  '>Sign Up</h1>
    </div>


<form className="w-full  flex text-center justify-items-stretch ml-2" id="contact-segment">


<div className='mt-52 -ml-52'>

    <div className='mb-4 '>

    <input id='email' type="text" placeholder='Email' 
    className='pr-80  py-3 rounded items-left border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 ' value={''} />
     
    </div>
    <div className='ml-56  '>

    <img className='ml-80 mb-8 -mr-96 -mt-12' src="/message.png" alt="" />
    </div>

    <div className='mb-4'>
    <input id='firstname' type="text" placeholder='First name' 
    className='pr-80 py-3 rounded border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 ' value={''} />
    </div>
   
    <div className='mb-4'>
    <input id='lastname' type="text" placeholder='Last name' 
    className='pr-80 py-3 rounded border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 ' value={''} />
    </div>

    <div className='mb-4'>
    <input id='username' type="text" placeholder='User name' 
    className='pr-80 py-3 rounded border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 ' value={''} />
    </div>
    <div className='ml-96 mb-10'>
      <img className='ml-40 -mt-12' src="/eye.png" alt="" />
    </div>

    <div className='mb-4'>
    <input id='password' type="text" placeholder='Password' 
    className='pr-80 py-3 rounded border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 ' value={''} />
    </div>
    <div className='ml-96 mb-10'>
      <img className='ml-40 -mt-12' src="/eye.png" alt="" />
    </div>

    
    <div className='mb-4'>
    <input id='password' type="text" placeholder='Confirm Password' 
    className='pr-80 py-3 rounded border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 ' value={''} />
    </div>
    <div className='ml-96 mb-10'>
      <img className='ml-40 -mt-12' src="/eye.png" alt="" />
    </div>

            
   

    <div className=''>
    <input id='name' type="text" placeholder='Phone number' 
    className='pr-80 py-3 rounded border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 ' value={''} />
    </div>

        <br /> <br />

    <a href='/login' className=' -ml-1 px-64 py-3 font-semibold text-lg bg-[#F16A67] text-center rounded-lg  text-white font-sans'>Sign Up</a>
    <div className='mt-10'>
    <div className=' '>
    <p className='text-left mt-7 text-sm text-[#323642]'>Already have an account?</p>
   
    
    </div>
    <div className=' -mt-5 mr-36'>
    <a className=' text-sm text-[#F16A67] font-bold' href="/login">Sign In</a>
    </div>
    </div>
  
  
</div>
    

    





</form>

</div>

</div>
<div className='mt-32 -ml-96  '>
    <p className=' ml-60  mb-20 text-xl text-[#938F99] whitespace-nowrap'>Online booking. Simple & efficient.</p>
    <img className=' mr-60' src="/loginpicture.png" alt=""/></div>




    </div>




</div>
  )
}

export default Registration
