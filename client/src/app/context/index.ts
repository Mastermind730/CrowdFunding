import React, { createContext, useState, useContext } from "react";
import { useAddress, useContract, useContractWrite, useConnect } from "@thirdweb-dev/react";
import { ethers } from "ethers";

// Corrected interface name and spelling
interface FormData {
  owner: string;
  title: string;
  description: string;
  target: string;
  deadline: number; // Corrected spelling
  amountCollected: number;
  image: string;
}

// Updated context type
interface StateContextType {
  address: string | undefined;
  connect: () => Promise<any>;
  createCampaign: (form: FormData) => Promise<void>;
}

// Create context with proper type
const StateContext = createContext<StateContextType | null>(null);

// Custom hook to use the context
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateContextProvider");
  }
  return context;
};

export default function StateContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Use contract address from environment or make it configurable
  const CONTRACT_ADDRESS = "0x86A398A4906CD3b2a4Aa0099E47243c000B5aBe8";
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { mutateAsync: createCampaignContract } = useContractWrite(contract, "createCampaign");

  const address = useAddress();
  const connect = useConnect();

  // Improved campaign creation function
  const createCampaign = async (form: FormData) => {
    try {
      if (!address) {
        await connect();
      }

      const data = await createCampaignContract([
        address,
        form.title,
        form.description,
        ethers.utils.parseUnits(form.target, 18), // Convert to wei
        new Date(form.deadline).getTime(),
        form.image
      ]);

      console.log("Campaign created successfully", data);
      return data;
    } catch (error) {
      console.error("Failed to create campaign", error);
      throw error;
    }
  };

  // Provide context value
  const contextValue: StateContextType = {
    address,
    contract,
    createCampaign:createCampaign,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
}