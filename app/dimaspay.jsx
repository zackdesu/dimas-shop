import React from "react";
import { MdPayment } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
const DimasPay = () => {
  return (
    <div className="w-72 bg-[#d9d9d9] rounded flex flex-col items-center p-8 ms-auto">
      <div className="flex items-center">
        <MdPayment size={20} className="mr-3" />
        <h5> DimasPay</h5>
      </div>
      <h1 className="my-5">Rp. 6969</h1>
      <button className="p-2 bg-white rounded flex items-center">
        <AiOutlinePlusCircle className="mr-3" /> Topup
      </button>
    </div>
  );
};

export default DimasPay;
