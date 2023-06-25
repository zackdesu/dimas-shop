import React from "react";
import Carousel from "./carousel";
import ShopList from "./shoplist";
import Menu from "./menu";
import DimasPay from "./dimaspay";

const Page = () => {
  return (
    <>
      <Carousel />
      <DimasPay />
      <Menu />
      <ShopList />
    </>
  );
};

export default Page;
