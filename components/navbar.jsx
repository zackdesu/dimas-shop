'use client'

import Image from "next/image";
import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { signIn } from 'next-auth/react'

const Navbar = () => {
  
  return (
    <header className="flex justify-between max-sm:py-4 max-sm:px-3 py-6 px-5 border-b-2 bg-zinc-100 fixed top-0 left-0 right-0 z-50 items-center">
      <div className="flex items-center">
        <Image
          src={"/icon.png"}
          width={40}
          height={40}
          alt="Dimas Tech Supply"
          className="mr-5 max-sm:w-[30px] max-sm:h-[30px]"
        />
        <h1 className="max-sm:hidden">Dimas Tech Supply</h1>
      </div>
      <div className="flex items-center">
        <BsPersonFill
          size={30}
          className="mx-2 max-sm:w-[22px] max-sm:h-[22px] cursor-pointer"
	  onClick={() => {signIn()}}
        />
        <FiSearch size={30} className="max-sm:w-[22px] mx-2 cursor-pointer" />
      </div>
    </header>
  );
};

export default Navbar;
