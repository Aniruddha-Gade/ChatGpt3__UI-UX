import React from 'react'
import possibility from '../assets/possibility.png'

const Possibility = () => {
  return (
    <section className='text-white flex flex-1 flex-col sm:flex-row justify-between items-center 
    py-4 px-4 sm:py-8 sm:px-24 font-manrope' id="possibility">
      <div className='flex flex-1 justify-start items-center mr-8 '>
        <img className='w-full h-full mb-4 sm:m-0'
          src={possibility} alt="possibility img" />
      </div>


      <div className='flex-1 flex flex-col justify-end items-start'>
        <p className='text-[16px] leading-[30px] font-normal text-[#71E5FF] my-4' >
          Requested Early Access to Get Started
        </p>

        <h3 className='gradient-text text-[28px] xs:text-[34px] leading-[38px] xs:leading-[45px] 
           flex flex-wrap sm:max-w-[430px] font-extrabold mb-4'>
          The Possibilities are beyond your imagination </h3>

        <p className='text-[12px] leading-[20px] sm:text-[16px] sm:leading-[29px]
                 text-[#81AFDD] max-w-[700px] font-normal mt-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, asperiores! Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit dolorum incidunt saepe ipsum eos laboriosam quaerat,
          quibusdam quidem eveniet mollitia.
        </p>

        <p className='text-[#FF8A71] font-normal text-[16px] mt-6 sm:my-8 leading-[30px] cursor-pointer '>
          Requested Early Access to Get Started
        </p>
      </div>

    </section>
  )
}

export default Possibility