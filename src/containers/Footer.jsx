import React from 'react'
import logo from '../assets/logo.svg'


const Footer = () => {
  return (
    <footer className='py-10 px-24 flex flex-col justify-center items-center text-white bg-[#031B34] font-manrope'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='gradient-text text-[34px] leading-[42px] xs:text-[48px] xs:leading-[52px] 
           sm:text-[64px] sm:leading-[75px] text-center mb-12
           flex flex-wrap font-extrabold max-w-[750px] '>
          Do you want to step in to the future before others
        </h1>

        <button className='text-[14px] leading-[20px] sm:text-[18px] sm:leading-[21px] border-2 p-4 mb-28 outline-none'>
          Request Early Acces
        </button>
      </div>


      <div className='w-full flex flex-col sm:flex-row justify-between items-start flex-wrap'>
        <div className="cursor-pointer flex flex-col items-center">
          <a href='#up'>
          <img src={logo} className="w-[118px] h-[30px] mb-4 " alt="Logo" />
          </a>
          <p className=''>All Rigths Reversed</p>
        </div>

  
        <div className='grid grid-cols-1 xs:grid-cols-2 mt-8 sm:mt-0 sm:grid-cols-3'>
          <div className='w-[250px] my-4'>
            <h4 className='text-[18px] font-bold leading-[16px] mb-4'>Links</h4>
            <p className='text-[12px] my-2 cursor-pointer hover:text-red-500 duration-300'>Overons</p>
            <p className='text-[12px] my-2 cursor-pointer hover:text-red-500 duration-300'>Counters</p>
            <p className='text-[12px] my-2 cursor-pointer hover:text-red-500 duration-300'>Social Media</p>
            <p className='text-[12px] my-2 cursor-pointer hover:text-red-500 duration-300'>Contact</p>
          </div>

          <div className='w-[250px] my-4'>
            <h4 className='text-[18px] font-bold leading-[16px] mb-4'>Company</h4>
            <p className='text-[12px] my-2 cursor-pointer hover:text-red-500 duration-300'>Terms & Conditions</p>
            <p className='text-[12px] my-2 cursor-pointer hover:text-red-500 duration-300'>Privacy Policy</p>
            <p className='text-[12px] my-2 cursor-pointer hover:text-red-500 duration-300'>Contact</p>
          </div>

          <div className='w-[250px] my-4'>
            <h4 className='text-[18px] font-bold leading-[16px] mb-4'>Get in Touch</h4>
            <p className='text-[12px] my-2 cursor-pointer hover:text-red-500 duration-300'>Lorem ipsum sit</p>
            <p className='text-[12px] my-2 cursor-pointer hover:text-red-500 duration-300'>123✖✖✖✖91</p>
            <p className='text-[12px] my-2 cursor-pointer hover:text-red-500 duration-300'>info@payme@.net</p>
          </div>

        </div>

      </div>

      <div className='mt-6 '>
        <p className='text-[12px] '>@ 2021 GPT-3. All Rigths Reversed</p>
      </div>
    </footer>
  )
}

export default Footer