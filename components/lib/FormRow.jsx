import React from 'react'

const FormRow = ({name,label,type}) => {
  return (
    <div className='flex flex-col mt-6'>
        <label htmlFor="name" className='mb-2 text-md capitalize'>{label}</label>
        <input type={type} name={name} required className='w-full md:w-3/4 rounded-lg border py-2 px-4 text-md'/>
    </div>
  )
}

export default FormRow