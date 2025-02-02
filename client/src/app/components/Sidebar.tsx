"use client";
import {
  MdDashboard,
  MdCampaign,
  MdPayment,
  MdPerson,
  MdLogout,
  MdAccountBalanceWallet,
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
    { id: 1, name: "Dashboard", icon: MdDashboard, path: "/dashboard" },
    { id: 2, name: "Campaign", icon: MdCampaign, path: "/dashboard/campaign" },
    { id: 3, name: "Payment", icon: MdPayment, path: "/dashboard/payment" },
    { id: 4, name: "Profile", icon: MdPerson, path: "/dashboard/profile" },
    { id: 5, name: "Withdraw", icon: MdAccountBalanceWallet, path: "/dashboard/withdraw" },
    { id: 6, name: "Logout", icon: MdLogout, path: "/logout" },
  ];

  return (
    <div className="h-screen w-[90px] sm:w-[120px] z-50 flex flex-col items-center p-4 bg-gray-900 shadow-md rounded-r-lg">
      {/* Logo */}
      <Link href={"/"} className="mb-8">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </Link>

      {/* Menu List */}
      <nav className="flex flex-col gap-6">
        {menuList.map((item: MenuItem) => (
          <Link
            key={item.id}
            href={item.path}
            className={`group flex flex-col items-center text-gray-500 transition-colors duration-300 ${
              pathname === item.path ? "text-green-400" : "hover:text-green-400"
            }`}
          >
            <item.icon className="w-7 h-7 mb-1" />
            <span className="text-xs">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
