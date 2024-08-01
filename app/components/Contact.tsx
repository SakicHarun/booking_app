import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className='w-full flex  flex-col sm:flex-row sm:gap-28 px-28  '>
       
    
   
         <div>
            <h1 className='text-6xl mt-10 font-semibold  text-[#323642] whitespace-nowrap mb-20'>Contact</h1>       
            <div className='flex w-full'>


               <h6 className='mb-20 text-[#323642] text-base font-semibold'>Address</h6>
               
               <div className='ml-20'>
                  <img className='ml-10' src="/location.png" alt="" width={24} height={24} />
               <p className='ml-20 -mt-5'>Fakultetska 1 , Zenica</p>
                  </div> 
               

                  </div> 
         
        
            <div className='flex w-full '>
         <h6 className='mb-20 text-[#323642] text-base font-semibold'>Phone Number</h6>

         <div className='ml-16 -mt-10'>  
            <div className='mt-5 flex flex-row'>
            <FontAwesomeIcon icon={faPhone} width={24} height={24} />
               <p className='ml-5 text-base font-light text-[#323642]'>032/556-665</p>
            </div>  
            <div className='mt-5 flex flex-row'>
               <FontAwesomeIcon icon={faPhone} width={24} height={24} />
               <p className='ml-5 text-base font-light text-[#323642]'>032/556-665</p>
            </div>       
        </div>
           
            </div>   



            <div className='flex w-full '>
               <h6 className='mb-20 mt-6 text-[#323642] text-base font-semibold whitespace-nowrap'>Follow us on</h6>

               <div className='ml-20 flex flex-col items-center'>
               <FontAwesomeIcon width={24} height={24} icon={faFacebook} />
                  <p className='font-light text-base text-[#323642] mt-2'>Facebook</p>
               </div>

               <div className='ml-7 flex flex-col items-center'>
               <FontAwesomeIcon width={24} height={24} icon={faInstagram} />
                  <p className='font-light text-base text-[#323642] mt-2'>Instagram</p>
               </div>
               
               <div className='ml-7 flex flex-col items-center'>
               <FontAwesomeIcon width={24} height={24} icon={faTwitter} />
                  <p className='font-light text-base text-[#323642] mt-2'>Twitter</p>
               </div>
            </div>
            </div>

            

       
      <form className="w-150 flex" id="contact-segment">
        <div className='ml-72 text-left'>
            <div className='w-150 mb-4 mt-40 text-left'>
            <label htmlFor="name">Full name:</label>
            <input id='name' type="text" placeholder='John Doe' 
            className='px-5 py-2 rounded text-left border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1'/>
            </div>

            <div className='w-150 mb-4 text-left'>
            <label htmlFor="email">Email address:</label>
            <input id='email' type="text" placeholder='johndoe@gmail.com' 
            className='px-5 py-2 rounded border text-left font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 '/>
            </div>

            <div className='w-150 mb-10 text-left'>
            <label htmlFor="comments">Comment:</label>
            <textarea name="text" id="comments" placeholder='I would like...'
            className='px-5 py-2 h-32 rounded border text-left font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 resize-none '></textarea>
            </div>

            <a href='/' className='px-5 py-3 whitespace-nowrap font-semibold  text-lg bg-[#F16A67] rounded-lg mr-1 text-white font-sans w-10'>Send Message</a>
        </div>
        </form>
                       
               
                           
   </div>

  )
}

export default Contact
