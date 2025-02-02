"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Label } from "../components/label";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


export function Page() {
  const router = useRouter();
  
  // Separate state variables for each input
  const [formData,setFormData]=useState({});
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", {
      name,
      title,
      description,
      target,
      deadline
    });
    setFormData({
      name,
      title,
      description,
      target,
      deadline
      });
    
    
  };
  // console.log(formData);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
    
<div className="flex flex-col items-center justify-center  p-4">
      {/* <div className=" w-full ">
        <div className=" bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,0.9))]" />
        <div className=" top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-shimmer" />
        <div className=" bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer delay-150" />
      </div> */}

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-md w-full mx-auto rounded-2xl p-8 relative backdrop-blur-xl bg-black/40 border border-gray-800 shadow-[0_0_30px_rgba(8,_112,_184,_0.7)]"
      >
 <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl animate-gradient"
          style={{ pointerEvents: "none" }} 
        />        
        <motion.h2 
          variants={itemVariants}
          className="font-bold text-3xl bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2"
        >
          Create Your Campaign
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-sm text-gray-300 mb-8"
        >
          Transform your vision into reality. Launch a campaign that stands out.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants} className="group">
            <LabelInputContainer>
              <Label htmlFor="name" className="text-gray-300 group-focus-within:text-blue-400 transition-colors">
                Campaign Creator
              </Label>
              <input 
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name or organization"
                className="w-full px-3 py-2 bg-gray-900/50 text-white border border-gray-700 rounded-md 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                         placeholder-gray-500 transition-all duration-300"
              />
            </LabelInputContainer>
          </motion.div>

          <motion.div variants={itemVariants} className="group">
            <LabelInputContainer>
              <Label htmlFor="title" className="text-gray-300 group-focus-within:text-blue-400 transition-colors">
                Campaign Title
              </Label>
              <input 
                type="text"
                id="title"
                
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Make it memorable"
                className="w-full px-3 py-2 bg-gray-900/50 text-white border border-gray-700 rounded-md 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                         placeholder-gray-500 transition-all duration-300"
              />
            </LabelInputContainer>
          </motion.div>

          <motion.div variants={itemVariants} className="group">
            <LabelInputContainer>
              <Label htmlFor="description" className="text-gray-300 group-focus-within:text-blue-400 transition-colors">
                Campaign Description
              </Label>
              <input 
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell your story"
                className="w-full px-3 py-2 bg-gray-900/50 text-white border border-gray-700 rounded-md 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                         placeholder-gray-500 transition-all duration-300"
              />
            </LabelInputContainer>
          </motion.div>

          <motion.div variants={itemVariants} className="group">
            <LabelInputContainer>
              <Label htmlFor="target" className="text-gray-300 group-focus-within:text-blue-400 transition-colors">
                Funding Target
              </Label>
              <input 
                type="text"
                id="target"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="Set your goal"
                className="w-full px-3 py-2 bg-gray-900/50 text-white border border-gray-700 rounded-md 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                         placeholder-gray-500 transition-all duration-300"
              />
            </LabelInputContainer>
          </motion.div>

          <motion.div variants={itemVariants} className="group">
            <LabelInputContainer>
              <Label htmlFor="deadline" className="text-gray-300 group-focus-within:text-blue-400 transition-colors">
                Campaign Deadline
              </Label>
              <input 
                type="date"
                id="deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full px-3 py-2 bg-gray-900/50 text-white border border-gray-700 rounded-md 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                         placeholder-gray-500 transition-all duration-300"
              />
            </LabelInputContainer>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 relative overflow-hidden rounded-md font-medium text-white
                     bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
                     hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500
                     transition-all duration-300 ease-in-out
                     shadow-[0_0_20px_rgba(8,_112,_184,_0.5)]
                     hover:shadow-[0_0_25px_rgba(8,_112,_184,_0.7)]"
            type="submit"
          >
            <span className="relative z-10">Launch Campaign</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <BottomGradient />
          </motion.button>
        </form>

        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </motion.div>
    </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Page;