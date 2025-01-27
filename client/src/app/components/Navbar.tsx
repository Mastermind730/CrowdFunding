"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { 
  MdSearch, 
  MdPerson,
  MdDashboard,
  MdCampaign,
  MdPayment,
  MdLogout,
  MdAccountBalanceWallet,
  MdHome,
  MdAdd,
  MdAccountBalanceWallet as MdWallet
} from "react-icons/md";
import CustomButton from './CustomButton';
import ButtonType from './CustomButton';
import { useRouter, usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const mobileNavItems = [
    {
      id: 1,
      name: "Home",
      icon: MdHome,
      path: "/",
    },
    {
      id: 2,
      name: "Campaign",
      icon: MdCampaign,
      path: "/dashboard/campaign",
    },
    
      {
        id: 3,
        name: "Wallet",
        icon: MdAccountBalanceWallet,
        path: "/dashboard/withdraw",
      },
      {
        id: 4,
        name: "Profile",
        icon: MdPerson,
        path: "/dashboard/profile",
      },
    
  ];

  const connect = () => {
    setAddress('sample_wallet_address');
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
        <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
          <input 
            type="text" 
            placeholder="Search for campaigns" 
            className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" 
          />
          
          <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
            <MdSearch className="text-white text-xl"/>
          </div>
        </div>
        
        <div className="sm:flex hidden flex-row justify-end gap-4">
          <CustomButton
            btnType={ButtonType.Button}
            title={address ? 'Create a campaign' : 'Connect Wallet'}
            styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
            handleClick={() => {
              if(address) router.push('/CreateCampaign')
              else connect()
            }}
          />

          {address && (
            <Link href="/profile">
              <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                <MdPerson className="text-white text-xl"/>
              </div>
            </Link>
          )}
        </div>
      </nav>

      {/* Floating Action Button for Mobile */}
      <div className="sm:hidden fixed bottom-20 right-4 z-50">
        <button
          onClick={() => {
            if(address) router.push('/CreateCampaign')
            else connect()
          }}
          className={`
            flex items-center gap-2 px-6 h-12 rounded-full shadow-lg
            ${address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
            transform transition-transform duration-200 active:scale-95
          `}
        >
          {address ? (
            <>
              <MdAdd className="text-white text-xl" />
              <span className="text-white text-sm font-semibold">Create Campaign</span>
            </>
          ) : (
            <>
              <MdWallet className="text-white text-xl" />
              <span className="text-white text-sm font-semibold">Connect Wallet</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-[#1c1c24] border-t border-[#2c2f32] z-40">
        <div className="flex justify-around items-center h-16">
          {mobileNavItems.map((item) => (
            <Link 
              key={item.id} 
              href={item.path}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <div 
                className={`
                  flex flex-col items-center justify-center 
                  transition-colors duration-200
                  ${pathname === item.path ? 'text-green-400' : 'text-gray-400'}
                  hover:text-green-400
                `}
              >
                <item.icon className="text-2xl mb-1" />
                <span className="text-xs">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Add bottom padding to main content on mobile to account for fixed navbar */}
      <div className="sm:hidden h-16"></div>
    </>
  );
};

export default Navbar;