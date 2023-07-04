import React from "react";
import { MdPayment } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/components/authOptions'
import Currency from '@/components/currency'

const DimasPay = async () => {
	const session = await getServerSession(authOptions);
  return (
    <div className="w-[98%] bg-[#d9d9d9] rounded-lg flex items-center justify-around relative bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 mx-auto">
      <div className="flex items-center">
        <MdPayment className="mr-3 text-[12px] md:text-[20px]" />
        <p>
          <b>DimasPay</b>
        </p>
      </div>
      <h2 className="my-5">{session ? (<Currency value={session.session.user.dimaspay} />) : (<Currency value={0}/>)}</h2>
      <button className="p-2 bg-white rounded flex items-center">
        <AiOutlinePlusCircle className="mr-3 text-[12px] md:text-[20px]" />{" "}
        <p>Topup</p>
      </button>
    </div>
  );
};

export default DimasPay;
