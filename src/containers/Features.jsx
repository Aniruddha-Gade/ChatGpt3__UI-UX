import React from 'react'
import { features_Card } from '../constants'

const Border = () => (
  <div className=' w-[38px] h-[3px] mb-2 bg-gradient-to-r from-[#AE67FA] to-[#F49867]'></div>
)

const Features = () => {
  return (
    <section className='w-full my-8 sm:mt-28 flex flex-1 flex-col sm:flex-row justify-between items-start py-4 px-4 sm:py-8 sm:px-24
     text-white font-manrope ' id="features">

      <div className='capitalize flex flex-col justify-start items-start '>
        <h2 className='gradient-text text-[28px] xs:text-[34px] leading-[38px] xs:leading-[45px] 
           flex flex-wrap sm:max-w-[430px] font-extrabold '>
          The Future is now and you just need to realize it.
          step into future today & make it happen.
        </h2>

        <p className='text-[#FF8A71] font-normal text-[16px] my-6 sm:my-8 leading-[30px] cursor-pointer '>
          Request early access to get started
        </p>
      </div>



      <div className='grid grid-cols-1 sm:mt-0'>
        {
          features_Card.map((card) => (
            <div key={card.id}
              className='flex flex-col xs:flex-row my-4'>

              <div className='flex-1 max-w-[180px] mr-24 '>
                <Border />
                <h3 className='text-[14px] leading-[22px] sm:text-[18px] sm:leading-[24px] font-bold'>{card.title}</h3>
              </div>

              <p className='text-[12px] leading-[20px] sm:text-[16px] sm:leading-[29px]
                 text-[#81AFDD] max-w-[300px] font-normal  mt-8 xs:mt-0'>
                {card.desc}
              </p>

            </div>
          ))
        }

      </div>


    </section>
  )
}

export default Features