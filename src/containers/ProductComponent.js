import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category} = product;
    return (
      <div className="col hover:scale-105 hover:opacity-80 transition-all duration-300" key={id}>
        <Link to={`/product/${id}`}>
          <div className=' border-2 border-stone-300 p-4 rounded-xl'>
            <div>
              <div className='w-full h-[300px] flex flex-col justify-center'>
                <img className='w-[50%] h-[50%] mx-auto' src={image} alt={title} />
                <div className='mt-8'>
                  <div className='font-bold'>{title}</div>
                  <div className='flex justify-between mt-4'>
                  <div className='text-teal-900'>${price}</div>
                  <div className='text-sm text-stone-500 mt-2'>{category}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <div className='grid grid-cols-1 p-4 w-[350px] md:grid-cols-2 md:w-[750px] lg:grid-cols-4 m-6 gap-4 lg:w-[1100px] mx-auto'>
      {renderList}
    </div>
  )
}

export default ProductComponent;
