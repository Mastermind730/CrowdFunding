"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { 
  MdSearch, 
  MdPerson 
} from "react-icons/md";
import CustomButton from './CustomButton';
import  ButtonType  from './CustomButton';

const Navbar: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);

  const connect = () => {
    // Wallet connection logic
    setAddress('sample_wallet_address');
  };

  const navigate = (path: string) => {
    // Navigation logic
    console.log(`Navigating to ${path}`);
  };

  return (
    <nav className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input 
          type="text" 
          placeholder="Search for campaigns" 
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" 
        />
        
        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <MdSearch/>
        </div>
      </div>
      
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton
          btnType={ButtonType.Button}
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
        />

        <Link href="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <MdPerson/>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;