import Image from 'next/image'
import React from 'react'

const RelatedProducts = ({relatedProducts}) => {
  return  <section>
    <h1 className='main-heading'>Related Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-4 gap-8' >
        {relatedProducts.map((product)=> {
            return <div key={product._id} >
                <div className='relative bg-accent flex items-center justify-center min-w-[250px] min-h-[300px] rounded-lg'>

                <Image src={product.image} width={200} height={300}  alt={product.name}/>
                </div>
                <h2 className='text-md font-bold mt-2'>{product.name}</h2>
            </div>

})}
        </div>
        
    </section>
  
}

export default RelatedProducts