import React from 'react';
import logo from '../logo.png';
import {ArrowCircleUpIcon, ChatIcon, ChevronDownIcon, SearchIcon} from '@heroicons/react/solid';
import {BellIcon, LoginIcon, PlusIcon, UserIcon} from '@heroicons/react/outline';
//import avatar from '../avatar.png';
import Button from './button';
import { useState, useContext} from 'react';
import ClickOutHandler from 'react-clickout-handler';
import AuthContext from './AuthContext';


export default function Header() {
  
  const [defaultVisibilityClass, setDefaultVisibilityClass] = useState('hidden');
 
  function toggleUser(){
    if(defaultVisibilityClass === 'hidden'){
      setDefaultVisibilityClass('block')
    }else{
      setDefaultVisibilityClass('hidden')
    }
  }

  const authContext = useContext(AuthContext);

  return (
    <>
    <header className="flex bg-reddit_dark p-2">
      <div className="mx-4 mr-5">
        <img src={logo} alt="" className='w-8 h-8 ' />
      </div>

      <select name="home" id="home" placeholder='home' className='text-white bg-gray-800 rounded-xl ml-2 w-40 focus:outline-none hover:opacity-50'>
        <option>Home</option>
        <option>PooDiPaaa</option>
        <option>Mistar Biiiiist</option>
      </select>
      <form action="" className='bg-gray-800 w-80 rounded-xl flex flex-grow ml-10 mr-10  '>
        <SearchIcon className='text-gray-200 h-8 w-6 mx-2' />
        <input type="text" className="bg-gray-800 h-8 w-15 flex flex-grow text-white p-2 focus:outline-none rounded-xl" placeholder='Search'/>
      </form>


      {/* <button className='px-2'>
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
      </button> */}
      <div className='mx-2' onClick={() => authContext.setShow(true)}>
        <Button outline >Login</Button>
        <Button>Sign Up</Button>
      </div>

      <ClickOutHandler onClickOut ={() =>setDefaultVisibilityClass('hidden')}>
      <button className='px-2 flex rounded-md border border-gray-800 hover:opacity-80' onClick={() => toggleUser()}>
        {/* <img src={avatar} className='h-8 w-8' alt="" /> */}
        <UserIcon className='text-gray-400 h-8 w-6'/>
        <ChevronDownIcon className='text-gray-300 h-8 w-6'/>
      </button>
      <div className={'absolute right-0 top-12 bg-reddit_dark border border-gray-700 z-10 rounded-md ' + defaultVisibilityClass}>
        <button className='text-reddit_text hover:bg-gray-300 hover:text-reddit_dark flex py-2 px-3 text-sm' onClick={() => authContext.setShow(true)}>
          <LoginIcon className='h-6 w-6 mr-2'/>
          Login/Sign up
        </button>
      </div>
      </ClickOutHandler>
    </header>
    </>
  )
}
