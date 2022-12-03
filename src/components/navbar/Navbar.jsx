import React from 'react'

const Navbar = () => {
  return (
    <div className='flex'>
      <nav className='flex justify-center border-b-2 bg-white shadow-lg fixed w-full py-2 md:py-5'>
          <div>
            <h1 className='font-sans text-xl md:text-2xl'>Cats List</h1>
          </div>
      </nav>
    </div>
  )
}

export default Navbar