import React, { createContext, useState, useContext } from "react";
import { useAddress, useContract, useContractWrite, useConnect } from "@thirdweb-dev/react";
import { ethers } from "ethers";

interface FormData {
  owner: string;
  title: string;
  description: string;
  target: string;
  deadline: number;
  amountCollected: number;
  image: string;
}

interface StateContextType {
  address: string | undefined;
  connect: () => Promise<void>;
  createCampaign: (form: FormData) => Promise<any>;
  contract: ReturnType<typeof useContract>["contract"];
}

export const StateContext = createContext<StateContextType | null>(null);

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateContextProvider");
  }
  return context;
};

export default function StateContextProvider({ children }: { children: React.ReactNode }) {
  const CONTRACT_ADDRESS = "0x86A398A4906CD3b2a4Aa0099E47243c000B5aBe8";

  const { contract } = useContract(CONTRACT_ADDRESS);
  
  const { mutateAsync: createCampaignContract } = useContractWrite(contract, "createCampaign");

  const address = useAddress();
  const { connect } = useConnect();

  const createCampaign = async (form: FormData) => {
    try {
      if (!address) {
        await connect();
      }
      
      if (!createCampaignContract) {
        throw new Error("Contract function not available");
      }

      const data = await createCampaignContract({
        args: [
          address,
          form.title,
          form.description,
          ethers.utils.parseUnits(form.target, "ether"), // Convert to wei
          Math.floor(form.deadline / 1000), // Convert to seconds
          form.image,
        ],
      });

      console.log("Campaign created successfully", data);
      return data;
    } catch (error) {
      console.error("Failed to create campaign", error);
      throw error;
    }
  };

  const contextValue: StateContextType = {
    address,
    contract: contract || null,
    connect,
    createCampaign,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
}