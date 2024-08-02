"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faMagnifyingGlass, faThumbsUp, faMapMarkerAlt, faDownLong } from "@fortawesome/free-solid-svg-icons";


const StarIcon: React.FC<{ filled: boolean; onClick: () => void; onMouseEnter: () => void; onMouseLeave: () => void }> = ({ filled, onClick, onMouseEnter, onMouseLeave }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`w-8 h-8 cursor-pointer ${filled ? 'text-[#E9E12D]' : 'text-[#E9E12D]'}`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <path
      d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.62 3 9.24l5.46 4.73-1.64 7.03L12 17.27z"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
    />
  </svg>
);

const ListOfAccommodations: React.FC = () => {
  const [rating, setRating] = useState<number>(4);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('Select type');

  const handleStarClick = (index: number) => {
    setRating(index);
  };

  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className='w-full flex'>
        <div className='w-full flex flex-col-2'>
          <div className='w-full ml-60 mt-24  block '>
          <div className='border-2 border-[#B7B5B5]*0.4 px-5 h-130 w-80 shadow-sm bg-white rounded-sm mt-16'>
              <form action="searchaccomodation">

                <p className='mt-10 font-medium text-base text-[#323642]'>Destination:</p>
                <div className="relative mb-4 mt-5 text-left">
                  <input
                    id="name"
                    type="text"
                    placeholder="Zenica"
                    className="py-2 pl-10 rounded text-left border font-light text-base text-[#323642] border-[#B7B5B5]*0.4 w-full mt-1"
                    value={''}
                  />
                  <FontAwesomeIcon icon={faMagnifyingGlass} width={24} height={24} />
                </div>

                <p className='mt-10 font-medium text-base text-[#323642]'>Type of Accommodation:</p>
                <div className="relative mb-4 mt-5 text-left">
                  <input
                    id="type"
                    type="text"
                    placeholder={selectedOption}
                    className="py-2 pl-10 rounded text-left border font-light text-base text-[#323642] border-[#B7B5B5]*0.4 w-full mt-1 cursor-pointer"
                    readOnly
                    onClick={toggleDropdown}
                  />
                  <FontAwesomeIcon icon={faDownLong} width={24} height={24} />
                  {isDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-[#B7B5B5] rounded shadow-lg">
                      <ul className="list-none m-0 p-0">
                        <li
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleOptionClick('Hotel')}
                        >
                          Hotel
                        </li>
                        <li
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleOptionClick('Hostel')}
                        >
                          Hostel
                        </li>
                        <li
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleOptionClick('Apartment')}
                        >
                          Apartment
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <p className='mt-10 font-medium text-base text-[#323642]'>Type of Accommodation:</p>
                <div className="relative mb-4 mt-5 text-left">
                  <input
                    id="name"
                    type="text"
                    placeholder=""
                    className="py-2 pl-10 mb-10 rounded text-left border font-light text-base text-[#323642] border-[#B7B5B5]*0.4 w-full mt-1"
                    value={''}
                  />
                  
                </div>
                <a href='/' className='px-28 py-3   whitespace-nowrap font-semibold  text-base bg-[#F16A67] text-center  rounded-lg text-white'>Search</a>
                </form>
           

            </div>

         
            <p className='font-medium text-2xl text-[#323642] mt-10  '>Filter by:</p>
       
            <div className='border-2 border-[#B7B5B5]*0.4 px-5 h-70 w-80 shadow-sm bg-white rounded mt-10 p-7'>
              <p className='font-medium text-base text-[#323642] ml-5'>Property types:</p>

              <form action="">
              <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>

            <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>

            <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>

            <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>
              </form>
              
            </div>

            <div className='border-2 border-[#B7B5B5]*0.4 px-5 h-70 w-80 shadow-sm bg-white rounded mt-10 p-7'>
              <p className='font-medium text-base text-[#323642] ml-5'>Property types:</p>

              <form action="">
              <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>

            <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>

            <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>

            <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>
              </form>
              
            </div>

            <div className='border-2 border-[#B7B5B5]*0.4 px-5 h-70 w-80 shadow-sm bg-white rounded mt-10 p-7'>
              <p className='font-medium text-base text-[#323642] ml-5'>Property types:</p>

              <form action="">
              <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>

            <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>

            <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>

            <div className='mt-5 ml-10'>
              <input
                    id="hotel"
                    type="checkbox"
                    value={''}
                    
                  />
            <label className='ml-5' htmlFor="">Hotel</label>
            </div>
              </form>
              
            </div>
             
           
          </div>

              
          <div className='flex-row mr-100  '>
          <p className='text-2xl font-medium text-[#323642] mt-40  whitespace-nowrap'>Location: Zenica</p>
          
          <div className='flex flex-col w-200 h-87 relative shadow-lg mb-5'>
            <a className='' href="/selectedaccomodation">
              <img className='items-center justify-between shadow-sm' src="/Hotel-Dubrovnik.png" alt="" />
              <div className='-mt-82 ml-5'>
                <p className='ml-72 text-2xl font-semibold'>Hotel Dubrovnik</p>
                <div className='relative'>
                  <div className='flex mt-5 ml-70'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        filled={star <= (hoverRating || rating)}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={handleMouseLeave}
                      />
                    ))}
                  </div>
                  <div className='flex mt-5 mb-5 items-center'>
                    
                    <span className='ml-2 text-2xl text-[#323642] font-semibold'>4,5</span>
                    <p className='ml-24 -mt-24 whitespace-nowrap'>4 stars</p>
                    <p className='ml-10 -mt-24 text-[#F16A67] font-semibold text-40px mr-5'>99.9KM/d</p>
                  </div>
                </div>
                <p className='ml-72 text-base font-semibold mb-5'>Zenica</p>
                <p className='ml-72 text-base font-semibold mb-5'>250 m from centre</p>
                <p className='flex items-center ml-72 text-2xl font-semibold'>
                <FontAwesomeIcon icon={faMapMarkerAlt} width={24} height={24} />
                  Address: Skolska 10, Zenica
                  <img className='ml-10' src="/arrow.png" alt="" />
                </p>
              </div>
            </a>
          </div>

          <div className='flex flex-col  w-200 h-87 relative shadow-lg mb-10 '>
            <a className='' href="">
              <img className='items-center justify-between shadow-sm' src="/Hotel-Dubrovnik.png" alt="" />
              <div className='-mt-82 ml-5'>
                <p className='ml-72 text-2xl font-semibold'>Hotel Dubrovnik</p>
                <div className='relative'>
                  <div className='flex mt-5 ml-70'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        filled={star <= (hoverRating || rating)}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={handleMouseLeave}
                      />
                    ))}
                  </div>
                  <div className='flex mt-5 mb-5 items-center'>
                  <FontAwesomeIcon icon={faThumbsUp} width={24} height={24} />
                    <span className='ml-2 text-2xl text-[#323642] font-semibold'>4,5</span>
                    <p className='ml-24 -mt-24 whitespace-nowrap'>4 stars</p>
                    <p className='ml-10 -mt-24 text-[#F16A67] font-semibold text-40px mr-5'>99.9KM/d</p>
                  </div>
                </div>
                <p className='ml-72 text-base font-semibold mb-5'>Zenica</p>
                <p className='ml-72 text-base font-semibold mb-5'>250 m from centre</p>
                <p className='flex items-center ml-72 text-2xl font-semibold'>
                <FontAwesomeIcon icon={faMapMarkerAlt} width={24} height={24} />
                  Address: Skolska 10, Zenica
                  <img className='ml-10' src="/arrow.png" alt="" />
                </p>
              </div>
            </a>
          </div>

          <div className='flex flex-col  w-200 h-87 relative shadow-lg mb-10 '>
            <a className='' href="">
              <img className='items-center justify-between shadow-sm' src="/Hotel-Dubrovnik.png" alt="" />
              <div className='-mt-82 ml-5'>
                <p className='ml-72 text-2xl font-semibold'>Hotel Dubrovnik</p>
                <div className='relative'>
                  <div className='flex mt-5 ml-70'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        filled={star <= (hoverRating || rating)}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={handleMouseLeave}
                      />
                    ))}
                  </div>
                  <div className='flex mt-5 mb-5 items-center'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} width={24} height={24} />
                    <span className='ml-2 text-2xl text-[#323642] font-semibold'>4,5</span>
                    <p className='ml-24 -mt-24 whitespace-nowrap'>4 stars</p>
                    <p className='ml-10 -mt-24 text-[#F16A67] font-semibold text-40px mr-5'>99.9KM/d</p>
                  </div>
                </div>
                <p className='ml-72 text-base font-semibold mb-5'>Zenica</p>
                <p className='ml-72 text-base font-semibold mb-5'>250 m from centre</p>
                <p className='flex items-center ml-72 text-2xl font-semibold'>
                <FontAwesomeIcon icon={faMapMarkerAlt} width={24} height={24} />
                  Address: Skolska 10, Zenica
                  <img className='ml-10' src="/arrow.png" alt="" />
                </p>
              </div>
            </a>
          </div>

          <div className='flex flex-col  w-200 h-87 relative shadow-lg mb-10 '>
            <a className='' href="">
              <img className='items-center justify-between shadow-sm' src="/Hotel-Dubrovnik.png" alt="" />
              <div className='-mt-82 ml-5'>
                <p className='ml-72 text-2xl font-semibold'>Hotel Dubrovnik</p>
                <div className='relative'>
                  <div className='flex mt-5 ml-70'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        filled={star <= (hoverRating || rating)}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={handleMouseLeave}
                      />
                    ))}
                  </div>
                  <div className='flex mt-5 mb-5 items-center'>
                  <FontAwesomeIcon icon={faThumbsUp} width={24} height={24} />
                    <span className='ml-2 text-2xl text-[#323642] font-semibold'>4,5</span>
                    <p className='ml-24 -mt-24 whitespace-nowrap'>4 stars</p>
                    <p className='ml-10 -mt-24 text-[#F16A67] font-semibold text-40px mr-5'>99.9KM/d</p>
                  </div>
                </div>
                <p className='ml-72 text-base font-semibold mb-5'>Zenica</p>
                <p className='ml-72 text-base font-semibold mb-5'>250 m from centre</p>
                <p className='flex items-center ml-72 text-2xl font-semibold'>
                <FontAwesomeIcon icon={faMapMarkerAlt} width={24} height={24} />
                  Address: Skolska 10, Zenica
                  <img className='ml-10' src="/arrow.png" alt="" />
                </p>
              </div>
            </a>
          </div>

          <div className='flex flex-col  w-200 h-87 relative shadow-lg mb-10 '>
            <a className='' href="">
              <img className='items-center justify-between shadow-sm' src="/Hotel-Dubrovnik.png" alt="" />
              <div className='-mt-82 ml-5'>
                <p className='ml-72 text-2xl font-semibold'>Hotel Dubrovnik</p>
                <div className='relative'>
                  <div className='flex mt-5 ml-70'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        filled={star <= (hoverRating || rating)}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={handleMouseLeave}
                      />
                    ))}
                  </div>
                  <div className='flex mt-5 mb-5 items-center'>
                  <FontAwesomeIcon icon={faThumbsUp} width={24} height={24} />
                    <span className='ml-2 text-2xl text-[#323642] font-semibold'>4,5</span>
                    <p className='ml-24 -mt-24 whitespace-nowrap'>4 stars</p>
                    <p className='ml-10 -mt-24 text-[#F16A67] font-semibold text-40px mr-5'>99.9KM/d</p>
                  </div>
                </div>
                <p className='ml-72 text-base font-semibold mb-5'>Zenica</p>
                <p className='ml-72 text-base font-semibold mb-5'>250 m from centre</p>
                <p className='flex items-center ml-72 text-2xl font-semibold'>
                <FontAwesomeIcon icon={faMapMarkerAlt} width={24} height={24} />
                  Address: Skolska 10, Zenica
                  <img className='ml-10' src="/arrow.png" alt="" />
                </p>
              </div>
            </a>
          </div>
          </div>          

          
        </div>
      
    </div>
  )
}

export default ListOfAccommodations;
