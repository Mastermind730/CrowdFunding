"use client";
import React, { useState } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router=useRouter();
  const [loading,setLoading]=useState(false);
  const [form,setForm]=useState({
    name:'',
    title:'',
    description:'',
    target:'',
    deadline:'',
  })

  return (
    <>
    
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {loading && 'Loader...'}
    </div>
    <h1>Create a campaign</h1>
    </>
  )
}

export default Page