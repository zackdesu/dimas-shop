import Navbar from "@/components/navbar";
import React from "react";
import Carousel from "./carousel";
import ShopList from "./shoplist";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[77.25px]">
        <Carousel />
        <ShopList />
      </div>
    </>
  );
};

export default Page;
