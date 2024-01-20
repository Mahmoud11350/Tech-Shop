import Image from 'next/image'
import React from 'react'

const CartItem = ({productId ,count}) => {
 const {name,category,price,image}=productId
  return (

    <div className='flex items-center justify-between flex-1 relative mt-8 flex-wrap'>
        <div className='w-[100px] h-[100px] relative'>

        <Image src={image} alt={name} fill/>
        </div>
        <h2 className='max-w-[200px] text-center'>{name}</h2>
        <div className='flex items-center justify-center gap-5 border rounded-lg p-3 min-w-[150px]'>
            <button className='text-2xl'>+</button>
            <span>{count} </span>
            <button className='text-2xl'>-</button>
        </div>
        <div>
            <h3> {price} $</h3>
        </div>
        <button className='bg-red-500 text-white py-2 px-5 capitalize hover:bg-red-400 rounded '>delete</button>
    </div>
   

  )
}

export default CartItem