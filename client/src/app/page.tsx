import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const page = () => {
  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className='sm:flex hidden mr-10'>
<Sidebar/>
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
    <Navbar/>
      </div>

    </div>
  )
}

export default page