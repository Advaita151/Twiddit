import React from 'react';
import logo from '../logo.png';
import {ArrowCircleUpIcon, ChatIcon, ChevronDownIcon, SearchIcon} from '@heroicons/react/solid';
import {BellIcon, PlusIcon} from '@heroicons/react/outline';
import avatar from '../avatar.png';

export default function home() {
  return (
    <>
    <header className="flex bg-reddit_dark p-2">
      <div className="mx-4 mr-5">
        <img src={logo} alt="" className='w-8 h-8 ' />
      </div>

      <select name="home" id="home" placeholder='home' className='text-white bg-gray-800 rounded-xl ml-2 w-40 focus:outline-none'>
        <option>Home</option>
        <option>PooDiPaaa</option>
        <option>Mistar Biiiiist</option>
      </select>
      <form action="" className='bg-gray-800 w-80 rounded-xl flex flex-grow ml-10 mr-10  '>
        <SearchIcon className='text-gray-200 h-8 w-6 mx-2' />
        <input type="text" className="bg-gray-800 h-8 w-15 flex flex-grow text-white p-2 focus:outline-none rounded-xl" placeholder='Search'/>
      </form>
      <button className='px-2'>
        <ArrowCircleUpIcon className='text-white h-8 w-6 mx-3'/>
      </button>
      <button className='px-2'>
        <BellIcon className='text-white h-8 w-6 mx-3'/>
      </button>
      <button className='px-2'>
        <ChatIcon className='text-white h-8 w-6 mx-3'/>
      </button>
      <button className='px-2'>
        <PlusIcon className='text-white h-8 w-6 mx-3'/>
      </button>
      <button className='px-2 flex'>
        <img src={avatar} className='h-8 w-8' alt="" />
        <ChevronDownIcon className='text-white h-8 w-6'/>
      </button>
    </header>
    </>
  )
}
