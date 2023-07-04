'use client'

import React, { useRef } from "react";
import Carousel from "./carousel";
import ShopList from "./shoplist";
import Menu from "./menu";
import DimasPay from "./dimaspay";
import Navbar from "@/components/navbar"

const Page = () => {
  const menu = useRef()
  return (
    <>
      <Navbar ref={menu}/>
      <div className="mt-[86px] max-sm:mt-[63px]" onClick={() => {
	menu.current.classList.add('hidden')
	}}>
      <Carousel />
      <DimasPay />
      <Menu />
      <ShopList />
      </div>
    </>
  );
};

export default Page;
