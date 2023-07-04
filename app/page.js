import React from "react";
import Carousel from "./carousel";
import ShopList from "./shoplist";
import Menu from "./menu";
import DimasPay from "./dimaspay";
import Navbar from "@/components/navbar"

const Page = () => {
  return (
    <>
      <Navbar/>
      <div className="mt-[86px] max-sm:mt-[63px]">
      <Carousel />
      <DimasPay />
      <Menu />
      <ShopList />
      </div>
    </>
  );
};

export default Page;
