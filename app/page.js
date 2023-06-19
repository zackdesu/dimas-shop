import Navbar from "@/components/navbar";
import React from "react";
import Carousel from "./carousel";
import ShopList from "./shoplist";
import Menu from "./menu";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[77.25px]">
        <Carousel />
        <Menu />
        <ShopList />
      </div>
    </>
  );
};

export default Page;
