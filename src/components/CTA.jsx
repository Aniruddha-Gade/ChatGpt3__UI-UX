import React from 'react'

const CTA = () => {
  return (
    <div className='py-4 px-4 sm:py-8 sm:px-24
    font-manrope ' id="">
      <div className='w-full rounded-xl p-7 py-9 sm:p-10 sm:py-12 flex flex-1 flex-col sm:flex-row 
      justify-between items-center gradient-bar '>

        <div className=''>
          <p className='font-medium mb-1'>
            Request Early Access To get Started</p>
          <h3 className='text-[18px] sm:text-[24px] font-extrabold '>
            Register today & start exploring the endless Possibilities</h3>
        </div>

        <div className='bg-black rounded-[40px] p-4 px-8 mt-8 sm:mt-0'>
          <button className='text-white font-semibold text-[14px] leading-[28px] sm:text-[18px] sm:leading-[30px] 
          outline-none border-none min-w-[150px] '>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA