import React from 'react'

const Explore = () => {
  return (
  <div className='w-full flex '>
       
    <div className='container mx-auto mt-60 grid grid-cols-1 md:grid-cols-2  '>

        <div>
        <h1 className='text-6xl mt-10  font-semibold  text-[#323642] whitespace-nowrap'>Explore amazing <br /> <br /> accomodation <br /> <br />
            with the best guide
        </h1>
        </div>
        <div className='ml-36'>
       <img src="/zenica.png" alt="" width={512} height={512}/>
            </div>
    </div>

  </div>
  )
}

export default Explore
