import React from 'react'
import Input from './Input'

export default function Auth() {
  return (
    <>
        <div className='w-screen h-screen absolute top-0 left-0 z-20 flex' style={{backgroundColor:'rgba(0,0,0,.6)'}}>
            <div className='bg-reddit_dark p-5 border border-gray-700 text-reddit_text mx-4 self-center w-full'>
                <h1>Login</h1>
                <Input type="text" />
                <Input type="password" />
            </div>
        </div>
    </>
  )
}
