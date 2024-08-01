import React from 'react'

function ReservationDetails() {
  return (
        <div className='w-full mb-20 lg:px-22 sm:px-3 block md:grid-cols-2'>

            <h1 className='text-6xl mt-10 font-semibold  text-[#323642] whitespace-nowrap mb-4'>Reservation Details</h1>

            <div className='mt-25 flex flex-row gap-48'>
                <form className="lg:w-150 sm:w-32 flex">
                    <div className='text-left'>
                        <div className='w-150 mb-4 text-left'>
                        <label htmlFor="numOfPeople">Enter number of people staying:</label>
                        <input id='numOfPeople' type="number" placeholder='0' 
                        className='px-5 py-2 rounded text-left border font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1'/>
                        </div>

                        <div className='w-150 mb-4 text-left'>
                        <label htmlFor="numOfChildren">Enter number of children:</label>
                        <input id='numOfChildren' type="number" placeholder='0' 
                        className='px-5 py-2 rounded border text-left font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 '/>
                        </div>

                        <div className='w-150 mb-4 text-left'>
                        <label htmlFor="numOfDays">Enter number of days staying:</label>
                        <input id='numOfDays' type="number" placeholder='0' 
                        className='px-5 py-2 rounded border text-left font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 '/>
                        </div>

                        <div className='w-150 mb-4 text-left'>
                        <label htmlFor="arrivalDate">Enter date of your arrival:</label>
                        <input id='arrivalDate' type="date"
                        className='px-5 py-2 rounded border text-left font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 '/>
                        </div>

                        <div className='w-150 mb-4 text-left'>
                        <label htmlFor="departureDate">Enter date of your departure:</label>
                        <input id='departureDate' type="date"
                        className='px-5 py-2 rounded border text-left font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 '/>
                        </div>

                        <div className='w-150 mb-4 text-left'>
                        <label htmlFor="phoneNum">Enter your contact phone number:</label>
                        <input id='phoneNum' type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" placeholder="000/000-000"
                        className='px-5 py-2 rounded border text-left font-light text-base text-[#323642] border-[#B7B5B5] w-full mt-1 '/>
                        </div>

                        <div className='flex flex-col items-end'>
                        <div className='flex mt-10 font-semibold justify-end'>
                            <h2 className='text-[#F16A67] text-3xl'>Total Price: </h2>
                            <p className='text-black ml-3 text-3xl'>500.00 <span className='text-lg'>BAM</span></p>
                        </div>
                        <input type="submit" value="Pay" className='mt-5 px-5 py-3 whitespace-nowrap font-semibold  text-lg bg-[#F16A67] rounded-lg mr-1 text-white font-sans w-30 hover:bg-[#c76563]'/>
                        </div>
                       
                    </div>
                </form>

                <div>
                    <h3 className='text-2xl font-semibold  text-[#323642]'>Booking details</h3>
                    <img src="/HotelDubrovnik2.png" className='rounded-xl shadow-md mt-8' height={578} width={426} alt="" />
                </div>

            </div>
            

        </div>
      
    
  )
}

export default ReservationDetails
