import React from 'react'

import slack from '../assets/slack.png'
import atlassian from '../assets/atlassian.png'
import google from '../assets/google.png'
import dropbox from '../assets/dropbox.png'
import shopify from '../assets/shopify.png'

const stylebrand = {
  style: 'flex-1 flex max-w-[150px] min-w-[120px] m-4 justify-center items-center'
};



const Brand = () => {
  return (
    <div className='flex flex-wrap justify-center items-center my-14'>
      <div className={`${stylebrand.style} `}>
        <img src={google} alt='google' />
      </div>
      <div className={`${stylebrand.style} `}>
        <img src={slack} alt='slack' />
      </div>
      <div className={`${stylebrand.style} `}>
        <img src={atlassian} alt='atlassian' />
      </div>
      <div className={`${stylebrand.style} `}>
        <img src={dropbox} alt='dropbox' />
      </div>
      <div className={`${stylebrand.style} `}>
        <img src={shopify} alt='shopify' />
      </div>

    </div>
  )
}

export default Brand