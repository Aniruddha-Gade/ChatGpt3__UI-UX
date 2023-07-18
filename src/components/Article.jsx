import React from 'react'

const Article = ({ imageUrl }) => {
  return (
    <div className='w-full h-full text-white flex flex-col bg-[#031B34] font-manrope'>
      <div className='w-full h-full bg-[#031B34] '>
        <img src={imageUrl} className='w-full h-full' />
      </div>

      <div className='flex flex-col py-4 px-6 h-full justify-between'>
        <div>
          <p className='font-normal text-[11.649] leading-[35px] '>sep 26, 2021</p>

          <h3 className='font-bold text-[18px] leading-[25px] sm:text-[25.11px] sm:leading-[30px] 
          mb-20 cursor-pointer'>
            GPT3 and open Ai is the future.
            Let us explore how it is ?
          </h3>
        </div>

        <p className='cursor-pointer'>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article