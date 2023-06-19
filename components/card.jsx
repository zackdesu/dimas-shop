import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = () => {
  return (
    <div className="w-[192px] h-64 bg-[#d9d9d9] rounded p-2 mr-4 flex flex-col items-center text-center">
      <div className="w-[95%] h-[60%] bg-black"></div>
      <div className="my-5">
        <p className="font-semibold">Nama Produk</p>
        <p className="flex items-center">
          <AiFillStar className="text-yellow-500" /> | 5.0 Terjual 5
        </p>
      </div>
    </div>
  );
};

export default Card;
