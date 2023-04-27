import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full'>
      
        <div className='block text-start '>
          <h2 className='text-3xl  tracking-widest p-8 font-bold text-stone-800 border-b-2 border-stone-600'>
            <Link to={"/"}>
              FakeShop
            </Link>
          </h2>
        </div>
    </div>
  )
}

export default Header