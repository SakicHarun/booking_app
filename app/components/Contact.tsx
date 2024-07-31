import React from 'react'

const Contact = () => {
  return (
    <div className='w-full flex '>
       
    <div className='container mx-auto mt-32  '>
    <div className='flex flex-col sm:flex-row sm:gap-28 w-full'>

        <div className='-ml-20'>
        <h1 className='text-6xl mt-10 font-semibold  text-[#323642] whitespace-nowrap mb-20'>Contact
        
        </h1>
       
        <div className='flex w-full'>


         <h6 className='mb-20 text-[#323642] text-base font-semibold'>Address</h6>
          
           <div className='ml-40'>
            <img className='ml-10' src="/location.png" alt="" width={24} height={24} />
           <p className='ml-20 -mt-5'>Fakultetska 1 , Zenica</p>
            </div> 
          

            </div>   
         
            <div className='flex w-full '>
         <h6 className='mb-20 text-[#323642] text-base font-semibold'>Phone Number</h6>
         <div className='ml-20 -mt-10'>
        
            <img className='ml-14' src="/phone.png" alt="" width={24} height={24} />
         <p className='ml-24 -mt-5 text-base font-light text-[#323642]'>032/556-665</p>
         <img className='ml-14 mt-10' src="/phone.png" alt=""  width={24} height={24} />
         <p className='ml-24 -mt-5 text-base font-light text-[#323642]'>062/546-365</p>
        

         </div>
           
            </div>   
            <div className='flex w-full '>
         <h6 className='mb-20 mt-6 text-[#323642] text-base font-semibold whitespace-nowrap'>Follow us on</h6>
            <div className='ml-40'>
              
                    <img className='ml-5 ' src="/facebook.png" alt=""  />
                <br />
                <p className='font-light text-base text-[#323642] -mt-6 '>Facebook</p>
            <div/>



            <div className='ml-40 '>  
            <img className='ml-5 -mt-14'  src="/Instagram.png" alt=""  />
            <br />
            <p className='font-light text-base text-[#323642] -mt-4 '>Instagram</p>
            
            </div>
            
            <div className='ml-80 '>  
            <img className='ml-5 -mt-14'  src="/Twitter.png" alt=""  />
            <br />
            <p className='font-light text-base text-[#323642] -mt-4 ml-2'>Twitter</p>
            
            </div>
            </div>
            </div>

                      </div>


                      <form className="w-full flex" id="contact-segment">


        <div className='ml-40 text-left'>
            <div className='w-full mb-4 mt-40 text-left'>
            <input id='name' type="text" placeholder='Full name' 
            className='px-5 py-2 rounded text-left border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 ' value={''} />
            </div>

            <div className='w-full mb-4 text-left'>
            <input id='name' type="text" placeholder='Email adress' 
            className='px-5 py-2 rounded border text-left font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 ' value={''} />
            </div>

            <div className='w-full mb-10 text-left'>
            <textarea name="text" id="message" placeholder='Comment'
            className='px-5 rounded py-10 border text-left font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 resize-none '></textarea>
            </div>


            <a href='/' className='px-60 py-3 whitespace-nowrap font-semibold  text-lg bg-[#F16A67] text-left  rounded-lg mr-1 text-white font-sans'>Contact us</a>
        </div>
        
   


   </form>
                      </div>
                      </div>
                      </div>
                        
        
       

      


  )
}

export default Contact
