import LoginForm from '@/components/login/LoginForm'
import Image from 'next/image'

import React from 'react'

const Login = () => {
  return (
    <div className='h-[calc(100vh-100px)] grid grid-cols-1 md:grid-cols-2 items-center'> 
          <div>
        {/* <Image src={'./'} fill alt='Login Header'/> */}
    </div>
    <LoginForm/>
    </div>
  )
}

export default Login