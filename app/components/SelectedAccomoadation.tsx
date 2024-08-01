
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";

import { faLocationDot,faSquareParking,faWifi,faCaretDown,faMugSaucer,faSquareCheck} from "@fortawesome/free-solid-svg-icons";

const SelectedAccomoadation = () => {

  return (
    <div className='sm:m-5 flex-row lg:mx-20 '>

      <div className='flex shadow-lg    py-10'>

    
        <h4 className='font-semibold text-3xl text-[#323642] whitespace-nowrap'>Hotel Dubrovnik Zenica</h4>
        
       
        <FontAwesomeIcon icon={faStar} className='text-[#E9E12D] ml-5' width={32} height={32} />
        <FontAwesomeIcon icon={faStar} className='text-[#E9E12D] ml-5' width={32} height={32} />
        <FontAwesomeIcon icon={faStar} className='text-[#E9E12D] ml-5' width={32} height={32} />
        <FontAwesomeIcon icon={faStar} className='text-[#E9E12D] ml-5' width={32} height={32} />

        <p className='whitespace-nowrap mt-1 ml-5 font-semibold text-2xl text-[#323642]'>4 stars</p>

    
        <img src="/Hotel-Dubrovnik2.png" alt="" className='rounded-xl mt-20 -ml-172  '/>
       <img src="/slikesmjestaja.png" className='mt-20 ml-62' alt="" />
       <FontAwesomeIcon icon={faLocationDot} width={32} height={32} className='mt-160 -ml-72  ' />
       <p className='mt-160  whitespace-nowrap'>Location:Skolska 10 ,Zenica</p>
        </div>
        <div className='mt-20  w-110 flex-row'>
      
          <h4 className='font-semibold text-2xl text-[#323642]'>Most popular facilities: </h4>

          <div className='flex  mt-2  '>
    

               <div className=' flex items-center'>
               <FontAwesomeIcon icon={faSquareParking} width={24} height={24} className='text-blue-600' />
                  <p className='font-light text-base text-[#323642]  ml-5'>Free parking</p>
               </div>

               <div className='ml-10 flex items-center'>
               <FontAwesomeIcon icon={faWifi}  width={24} height={24} className='text-green-500' />
                  <p className='font-light text-base text-[#323642]  ml-5'>Wifi</p>
               </div>
               
               <div className='ml-10 flex  items-center'>
               <FontAwesomeIcon icon={faMugSaucer}  width={24} height={24} className='text-amber-800' />
                  <p className='font-light text-base text-[#323642]  ml-5'>Cafe bar</p>
               </div>
            </div>
        </div>

        <div className='mt-20 w-240 flex-row'>
        <h4 className='font-semibold text-2xl text-[#323642]'>Selected filters: </h4>
        <div className='flex  mt-2  '>
    

               <div className=' flex items-center'>
               <FontAwesomeIcon icon={faSquareCheck}  width={24} height={24} className='text-green-500' />
                  <p className='font-light text-base text-[#323642]  ml-5'>Hotel</p>
               </div>

               <div className='ml-10 flex items-center'>
               <FontAwesomeIcon icon={faSquareCheck}  width={24} height={24} className='text-green-500' />
                  <p className='font-light text-base text-[#323642]  ml-5'>5 stars</p>
               </div>
               
               <div className='ml-10 flex  items-center'>
               <FontAwesomeIcon icon={faSquareCheck}  width={24} height={24} className='text-green-500' />
                  <p className='font-light text-base text-[#323642]  ml-5'>Restaurant</p>
               </div>

               <div className='ml-10 flex  items-center'>
               <FontAwesomeIcon icon={faSquareCheck}  width={24} height={24} className='text-green-500' />
                  <p className='font-light text-base text-[#323642]  ml-5'>Fitness centre</p>
               </div>

               <div className='ml-10 flex  items-center'>
               <FontAwesomeIcon icon={faSquareCheck}  width={24} height={24} className='text-green-500' />
                  <p className='font-light text-base text-[#323642]  ml-5'>Free parking</p>
               </div>

               <div className='ml-10 flex  items-center'>
               <FontAwesomeIcon icon={faSquareCheck}  width={24} height={24} className='text-green-500' />
                  <p className='font-light text-base text-[#323642]  ml-5'>Free WiFi</p>
               </div>
            </div>

        </div>
        <div className='mt-20 w-full h-full items-center justify-between'>
        
        <div className=''>
        <h4 className='font-semibold text-2xl text-[#323642]'>Type of room:</h4>
        <p className=''>Double room</p>
        </div>
        <div className=''>
        <h4  className='font-semibold text-2xl text-[#323642] whitespace-nowrap ml-200 -mt-14'>Type of room:</h4>
  
        </div>
        <div className='ml-380'>
        <h4 className='font-semibold text-2xl -mt-9 text-[#323642] whitespace-nowrap'>Price:</h4>
        <p className='text-[#f16a67] text-32px font-semibold '>99.9KM/dan</p>
        </div>
        </div>

          <div className='mt-10 w-full' >
          <p className='mb-10'>Located in the heart of Zenica, this hotel is 100 m from the ZEPS fair. It has a restaurant and a terrace.
 <br /> 
 Free private parking is available. <br /> 
 
 The modern rooms at the 4-star Hotel Dubrovnik include an LCD TV with cable channels, air conditioning, a minibar 
 <br />
 and a private bathroom. 
 <br />
 Rooms also include free Wi-Fi.
 <br />
 Guests can enjoy local and international dishes at the chic Il Trovatore Restaurant. 
 <br />
 The hotel features live music and a variety of beers at the Libertas bar. 
 <br />
 Drinks can also be enjoyed on the hotel’s terrace.</p>

 <a href='/reservationdetails' className='px-5 py-3 whitespace-nowrap font-semibold ml-300  text-lg bg-[#F16A67] rounded-lg mr-1 text-white font-sans w-10'>Reserve</a>
          </div>
    

    </div>
  )
}

export default SelectedAccomoadation
