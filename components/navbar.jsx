'use client'

import Image from "next/image";
import React, { forwardRef, useRef } from "react";
import { BsPersonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { signIn } from 'next-auth/react'
import Link from 'next/link'

const Navbar = forwardRef((props, ref) => {
  return (
    <header className="flex justify-between max-sm:py-4 max-sm:px-3 py-6 px-5 border-b-2 bg-zinc-100 fixed top-0 left-0 right-0 z-50 items-center" onClick={() => ref.current.classList.add('hidden')}>
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
	  onClick={(e) => {e.stopPropagation();
			  ref.current.classList.toggle('hidden')}}
        />
        <FiSearch size={30} className="max-sm:w-[22px] mx-2 cursor-pointer"/>
      <nav className='bg-white absolute top-full p-2 rounded-sm hidden' ref={ref}>
	<p onClick={() => signIn()} className="font-medium mb-2 cursor-pointer">Login</p>
	<hr/>
	<Link href="/register"><p className="font-medium mt-2 cursor-pointer">Sign Up</p></Link>
      </nav>
      </div>
    </header>
  );
})

export default Navbar;
