import React from "react";
import Carousel from "./carousel";
import ShopList from "./shoplist";
import Menu from "./menu";
import DimasPay from "./dimaspay";

const Page = () => {
  return (
    <>
      <div className="mt-[116px] max-sm:mt-[74px]">
        <Carousel />
        <DimasPay />
        <Menu />
        <ShopList />
      </div>
    </>
  );
};

export default Page;
