import Image from 'next/image'
import React from 'react'
import FormRow from '../lib/FormRow'
import Link from 'next/link'



const LoginForm = () => {
  return (
   <div>
    <h1 className='text-4xl font-bold mb-2 capitalize' >Welcome
</h1>
<p className='text-sm capitalize'>please login here</p>
    <form action="" className='w-full mt-4'>
        <FormRow type={'email'} name={'email'} label={"email adress"}/>
        <FormRow type={'password'} name={'password'} label={"password"}/>
        <button  className='btn btn-primary btn-wide  text-white text-lg mt-5'>Login</button>
    </form>
    <div className='w-3/4'>
        <ul className='flex mt-4 justify-between capitalize text-lg'>
            <li>
                <Link href=''>create an acoount</Link>
            </li>
            <li>
                <Link href=''>forget password</Link>
            </li>
        </ul>
    </div>
   </div>
  )
}

export default LoginForm