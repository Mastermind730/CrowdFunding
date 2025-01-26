"use client";
import {
  MdDashboard,
  MdCampaign,
  MdPayment,
  MdPerson,
  MdLogout,
  MdAccountBalanceWallet
} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MenuItem {
  id: number;
  name: string;
  icon: React.ElementType;
  path: string;
}

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const menuList: MenuItem[] = [
    {
      id: 1,
      name: "Dashboard",
      icon: MdDashboard,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Campaign",
      icon: MdCampaign,
      path: "/dashboard/campaign",
    },
    {
      id: 3,
      name: "Payment",
      icon: MdPayment,
      path: "/dashboard/payment",
    },
    {
      id: 4,
      name: "Profile",
      icon: MdPerson,
      path: "/dashboard/profile",
    },
    {
      id: 5,
      name: "Withdraw",
      icon: MdAccountBalanceWallet,
      path: "/dashboard/withdraw",
    },
    {
      id: 6,
      name: "Logout",
      icon: MdLogout,
      path: "/logout",
    }
  ];

  return (
    <div className="h-screen p-3  shadow-sm  flex flex-col items-center">
        <Link href={"/"} className="">
      <Image 
        src="/logo.svg" 
        alt="logo" 
        width={50} 
        height={50} 
        className="mb-10 "
      />
      </Link>
      <div className=" bg-gray-900 w-[100px] rounded-md h-[93vh]">
        {menuList.map((item: MenuItem) => (
          <Link 
            key={item.id} 
            href={item.path} 
            className="group flex flex-col items-center p-2 hover:text-green-400 transition-colors duration-300"
          >
            <item.icon 
              className={`w-8 h-8 mb-1 ${
                pathname === item.path 
                  ? 'text-green-400' 
                  : 'text-gray-500 group-hover:text-green-400'
              }`}
            />
            <span 
              className={`text-xs ${
                pathname === item.path 
                  ? 'text-green-400' 
                  : 'text-gray-500 group-hover:text-green-400'
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;