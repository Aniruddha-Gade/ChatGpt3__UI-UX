import React from 'react'
import { GPT3_Card } from '../constants'
const GPT3_Card_firstObj = GPT3_Card[0];

const Border = () => (
  <div className=' w-[38px] h-[3px] mb-4 bg-gradient-to-r from-[#AE67FA] to-[#F49867]'></div>
)

const WhatGPT3 = () => {
  return (
    <section className=' flex flex-col py-4 px-4 sm:py-8 sm:px-24 text-white font-manrope' id='wgpt3'>
      <div className='gpt3__whatgpt3 p-8 sm:p-14' >

        <div className='flex flex-col sm:flex-row justify-between sm:items-center mb-10 sm:mb-28 '>
          <div className=''>
            <Border />
            <h3 className='text-[30px] font-bold'>{GPT3_Card_firstObj.title}</h3>
          </div>

          <p className='text-[12px] leading-[20px] sm:text-[16px] sm:leading-[29px]
                 text-[#81AFDD] max-w-[700px] font-normal  mt-8'>
            {GPT3_Card_firstObj.desc}
          </p>
        </div>


        <div className='flex flex-col sm:flex-row justify-between sm:items-center'>
          <h2 className='gradient-text text-[28px] xs:text-[34px] leading-[38px] xs:leading-[45px] 
           flex flex-wrap font-extrabold sm:max-w-[510px]'>
            The possibilities are beyond your imagination</h2>
          <p className='text-[#FF8A71] font-normal text-[16px] my-6 sm:my-0 leading-[30px] cursor-pointer '>
            Explore The Library
          </p>
        </div>


        <div className='grid grid-cols-1 sm:grid-cols-3 sm:mt-24'>
          {
            GPT3_Card.slice(1).map((card) => (
              <div key={card.id}
                className='my-4'>

                <div className='flex-1 max-w-[180px] mr-14 '>
                  <Border />
                  <h3 className='text-[14px] leading-[22px] sm:text-[18px] sm:leading-[24px] font-bold'>{card.title}</h3>
                </div>

                <p className='text-[12px] leading-[20px] sm:text-[16px] sm:leading-[29px]
                 text-[#81AFDD] max-w-[300px] font-normal mt-8'>
                  {card.desc}
                </p>

              </div>
            ))
          }

        </div>

      </div>
    </section>
  )
}

export default WhatGPT3