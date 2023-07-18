import React from 'react'
import people from '../assets/people.png'
import Ai from '../assets/ai.png'

const Header = () => {
  return (
    <header className='mt-[4.5rem] sm:mt-0 text-white flex flex-1 flex-col sm:flex-row justify-between items-center 
    py-4 px-4 sm:py-8 sm:px-24 font-manrope' id="home">
      <div className='sm:min-w-[600px] '>
        <h1 className='text-[36px] leading-[48px] xs:text-[48px] xs:leading-[60px] 
             sm:text-[62px] sm:leading-[75px] font-extrabold tracking-tighter gradient-text'>
          Let's Bulid Something
          amazing with GPT3
          OpenAi</h1>


        <p className='font-normal text-[12px] xs:text-[16px] leading-[24px] sm:text-[20px] sm:leading-[27px] text-[#81AFDD] mt-[1.5rem]'>
          Yet bed any for travelling assistance indulgence unpleasing NOt thoughts all exercise blessing.
          Indulgence way everything joy alteration boisterous the attachement.
          party we years to ordrr allow asked of.
        </p>


        <form className='flex my-4 w-[100%]  xs:flex-row mt-8 '>
          <input className='w-[100%] flex flex-1 bg-[#052D56] font-normal text-[#3D6184] min-h-[50px] 
             rounded-tl-lg rounded-bl-lg 
            text-[12px] xs:text-[16px] sm:text-[20px] leading-[27px] p-2 xs:p-3  sm:p-4'
            type='email' placeholder='Your Email Address' />


          <button type="button" className="bg-red-500 font-bold outline-none border-none 
          text-[12px] xs:text-[16px] sm:text-[20px] leading-[27px] p-2 xs:p-3 sm:p-4  
           rounded-tr-lg rounded-br-lg">
            Get Started
          </button>
        </form>


        <div className='flex flex-col xs:flex-row w-[100%] items-center justify-start mt-8'>
          <img src={people} alt='Ai Img' className='w-[181.79px] h-[38px] ' />
          <p className='text-[12px] xs:ml-4 font-normal leading-[20px]'>
            16,000 people requested access visit in last 24 hours
          </p>
        </div>
      </div>


      {/* rigth side image */}
      <div className='flex justify-center items-center '>
        <img src={Ai} className='w-[100%] h-[100%] sm:-mr-36 ' />
      </div>

    </header>
  )
}

export default Header