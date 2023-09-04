import React from 'react'
import avatar from '../avatar.png'
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline'

export default function nav() {
  return (
    <>
      <div className='bg-reddit_dark px-6 py-4 text-gray-400'>
        <div className='border border-reddit_border p-1 rounded-md flex'>
            <div className='w-8 rounded-full overflow-hidden ' >
                <img src={avatar} alt="" />
            </div>
            <div>
                <form action="" className='bg-reddit_dark-brighter border  border-reddit_border p-1 flex-grow focus:outline-none rounded-md ml-4 mr-2'>
                    <input type="text" className='bg-reddit_dark-brighter text-sm block w-96 px-3 focus:outline-none rounded-md ' placeholder='New Post' />
                </form>
            </div>
            <button className='px-2'>
                <PhotographIcon className='text-grey h-8 w-7 ml-1'/>
            </button>
            <button className='px-2'>
                <LinkIcon className='text-grey h-8 w-7 ml-1'/>
            </button>
        </div>
      </div>
    </>
  )
}
