import Card from "@/components/card";
import React from "react";

const ShopList = () => {
  return (
    <div className="flex">
      <div className="mx-32 mt-10 mb-5">
        <h2>Rekomendasi Untukmu</h2>
        <p className="text-[#00000090]">Karena kamu baru saja mencari Laptop</p>
        <div className="mt-5 flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ShopList;
