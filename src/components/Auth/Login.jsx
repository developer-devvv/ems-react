import React, {useState} from 'react'
import Waves from '../others/Waves';

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <Waves />
      <div className='flex h-screen w-screen items-center justify-center z-10 absolute'>
          <div className='border-2 border-white rounded-xl p-20 bg-black'>
              <form 
              onSubmit={(e) => {
                submitHandler(e)
              }}
              className='flex flex-col items-center justify-center'>

                  <input 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' required/>

                  <input 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter password' required/>

                  <button className='text-black outline-none border-none bg-white text-xl py-3 px-5 rounded-full mt-5'>Login</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Login