import React from 'react'
import { Article } from '../components'
import blog01 from '../assets/blog01.png'
import blog02 from '../assets/blog02.png'
import blog03 from '../assets/blog03.png'
import blog04 from '../assets/blog04.png'
import blog05 from '../assets/blog05.png'

const Blog = () => {
  return (
    <section className='flex flex-col py-4 px-4 sm:py-8 sm:px-24
    font-manrope ' id="blog">

      <div className='text-left mb-20 w-full'>
        <h2 className='gradient-text text-[34px] leading-[42px] xs:text-[48px] xs:leading-[52px] 
           sm:text-[64px] sm:leading-[75px]
           flex flex-wrap font-extrabold '>
          A lot is happing ,
          We are blogging about it.
        </h2>
      </div>

      <div className='flex flex-col xs:flex-col-reverse sm:flex-row'>
        <div className='sm:mr-8 xs:my-8 sm:my-0 xs:w-[48%] w-[100%] sm:w-[100%] mb-8'>
          <Article imageUrl={blog01} />
        </div>

        <div className='grid grid-cols-1 xs:grid-cols-2 gap-8'>
          <Article imageUrl={blog02} />
          <Article imageUrl={blog03} />
          <Article imageUrl={blog04} />
          <Article imageUrl={blog05} />
        </div>
      </div>
    </section>
  )
}

export default Blog