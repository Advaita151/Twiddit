import React from 'react'
import banner from '../banner.png'

export default function community() {
  return (
  <>
    <div className='subheader  h-24 bg-cover flex' style={{backgroundImage: `url(${banner})`}}>
    </div>
    <div className='bg-gray-800 h-20 flex'>
        <div className='mx-6 relative'>
            <div>
                <img className='h-20 w-20 overflow-hidden rounded-full relative bottom-5' src="https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_kxcmzy9bt1381.jpg?width=256&format=pjpg&s=0a2e472f6fae0712fee4a3b5d44920fe35dbcdaa" alt="" />
            </div>
        </div>
        <div className='pt-2 pl-4'>
            <h1 className='text-gray-300 text-3xl '>
                Mern ki Katha : College ke Coders
            </h1>
            <h5 className='text-gray-500'>r/webdev</h5>
        </div>
    </div>
    
  </>
  )
}
