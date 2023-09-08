import React from 'react'
import Input from './Input'
import Button from './button'
import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from './AuthContext'
import ClickOutHandler from 'react-clickout-handler'


export default function Auth() {
  const [modalType, setModalType] = useState('Login');
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const modalContext = useContext(AuthContext);

  const visibleClass = modalContext.show ? 'block ' : 'hidden ';

  function register(e){
    e.preventDefault();
    const data = {email,username,password};
    axios.post('http://localhost:4000/register', data , {withCredentials:true});
  }

  return (
    <>
        <div className={'w-screen h-screen absolute top-0 left-0 z-20 flex ' +visibleClass} style={{backgroundColor:'rgba(0,0,0,.6)'}}>
          <ClickOutHandler onClickOut={()=> modalContext.setShow(false)}>
            <div className='bg-reddit_dark p-5 border border-reddit_dark-brightest text-reddit_text  self-center w-1/2 md:1/4 mx-auto rounded-md  '>
                {modalType === "Login" &&(
                  <h1 className='text-2xl mb-3'>Login</h1>
                  )}
                {modalType === "Register" && (
                  <h1 className='text-2xl mb-3'>Register</h1>
                  )}
                {modalType === "Register" && (
                  <label>
                  <span className='text-reddit_text-darker text-sm'>E-mail:</span>
                  <Input type="email" className=" mx-2 mb-3 w-full " value={email} onChange={e => setEmail(e.target.value)} />
                  </label>  
                )}
                <label>
                <span className='text-reddit_text-darker text-sm'>Username:</span>
                <Input type="text" className=" mx-2 mb-3 w-full " value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                <span className='text-reddit_text-darker text-sm'>Pasword:</span>
                <Input type="password" className="mx-2 mb-3 w-full " value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                {modalType === 'Login' &&(
                  <Button className="w-full mb-3" style={{borderRadius:'0.3rem'}}>
                  Log in  
                </Button>
                )}
                {modalType === 'Register' &&(
                  <Button className="w-full mb-3" style={{borderRadius:'0.3rem'}} onClick={e => register(e)}>
                  Sign Up 
                </Button>
                )}
                {modalType === 'Login' &&(    
                  <div>
                  New to reddit?? <button className='text-blue-600' onClick={() => setModalType("Register")}>Sign Up</button>
                </div>
                  )}
                {modalType === 'Register' &&(    
                <div>
                  Already have an account?? <button className='text-blue-600' onClick={() => setModalType("Login")}>Log In</button>
                </div>
                  )}
            </div>
          </ClickOutHandler>
        </div>
    </>
  )
}
