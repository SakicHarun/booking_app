import React from 'react'

const About = () => {
  return (
    <div className='w-full flex '>
       
    <div className='container mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 gap-20  '>

        <div className='-ml-20'>
        <h1 className='text-6xl mt-10 font-semibold  text-[#323642] whitespace-nowrap mb-20'>About us
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's <br />
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br /> 
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also <br />
             the leap into electronic typesetting, remaining essentially <br />
             unchanged. It was popularised in the 1960s with the release of <br />
             Letraset sheets containing Lorem Ipsum passages, and more <br />
             recently with desktop publishing software like Aldus PageMaker <br />
             including versions of Lorem Ipsum.</p> 
        </div>
        <div className=''>
            <h2 className='text-[#323642] font-semibold text-4xl mb-12 mt-24'>Our location</h2>
       <img src="/Capture 1.png" alt="" width={512} height={512}/>
            </div>
    </div>

  </div>
  )
}

export default About
