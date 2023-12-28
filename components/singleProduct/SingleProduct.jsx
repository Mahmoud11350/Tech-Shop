import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleProduct = ({product}) => {
    const {name,price,category,description,availability,image,_id} = product
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center '>
        <div className='relative rounded-lg bg-accent flex justify-center items-center w-3/4 mx-auto' >
            <Image src={image} width={300} height={400}  className='min-h-[400px] max-w-[300px] '/>
        </div>
        <div>
            <h1 className='main-heading mb-4'>{name}</h1>
            <h2 className='text-xl capitalize'>{category}  | {availability ?<span className='text-green-400'>stock</span>:<span className='text-red-500'>out of stock</span>}</h2>
            <h3 className='mb-4 '>{price} $</h3>
            <h3 className='font-bold text-xl mb-2'>Description</h3>
            <p className='text-lg '>{description}</p>
            <Link href={"/"} className='btn btn-primary btn-block mt-4 text-white text-lg '>Add to cart</Link>
        </div>
    </div>
  )
}

export default SingleProduct