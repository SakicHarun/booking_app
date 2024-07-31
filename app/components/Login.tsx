import React from 'react'
import Image from 'next/image'
const Login = () => {
  return (
<div className='w-full flex p-5 '>


    <div className='w-full  flex absolute p-5 '>
      
<div className='w-full flex flex-col-2 whitespace-nowrap '>
<div className='w-full flex items-center mt-20 ml-20  '>

<a className='flex items-center -mt-40 ml-20'  href="/">
<Image className='-mt-80'
src={'/logo.png'}
alt='logo'
width={256}
height={256}
/>
</a>

<h1 className='text-[#F16A67] text-4xl text-left -ml-48 -mt-72 font-bold  '>Sign In</h1>

<form className="w-full  flex text-center justify-items-stretch ml-2" id="contact-segment">


<div className='mt-48 -ml-32'>

    <div className='mb-4 '>

    <input id='name' type="text" placeholder='Username' 
    className='pr-80  py-3 rounded items-left border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 ' value={''} />
     
    </div>
    <div className='ml-44 mb-12 '>

    <img className='ml-96 -mr-96 -mt-12' src="/message.png" alt="" />
    </div>
    <div className='mb-4'>
    <input id='name' type="text" placeholder='Password' 
    className='pr-80 py-3 rounded border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 ' value={''} />
    </div>
    <div className='ml-96 mb-10'>
      <img className='ml-44 -mt-12' src="/eye.png" alt="" />
    </div>

    <div className='mb-4 mr-96 -ml-52'>
    <input id='rememberme' type="checkbox" placeholder='Remember me' 
    className='' value={''} />
  
    </div>
    <p className='text-base text-[#323642] -mt-10 mr-16  -ml-96  '>Remember me</p>

 
   <div className='-mt-6  mb-20 ml-96 -mr-24  '>
   <a  href="/">Login as Guest</a>



 
    </div>
        

    <a href='/' className=' -ml-1 px-64 py-3 font-semibold text-lg bg-[#F16A67] text-center rounded-lg  text-white font-sans'>Sign In</a>
    <div className='mt-10'>
    <div className=' '>
    <p className='text-left mt-7 text-sm text-[#323642]'>Don't have an account?</p>
   
    
    </div>
    <div className=' -mt-5 mr-48'>
    <a className=' text-sm text-[#F16A67] font-bold' href="/signup">Sign up</a>
    </div>
    </div>
  
  
</div>
    

    





</form>

</div>

</div>
<div className='mt-20 mr-60 '>
    <p className=' mb-20 text-xl ml-20 text-[#323642] whitespace-nowrap'>Online booking. Simple & efficient.</p>
    <img className=' ' src="/loginpicture.png" alt=""/></div>




    </div>




</div>
  )
}

export default Login
