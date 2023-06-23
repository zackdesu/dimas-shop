import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({ Nama, Rating, Terjual, Harga }) => {
  const TruncatedText = ({ text }) => {
    if (text.length <= 17) return <span>{text}</span>;
    const truncatedText = text.slice(0, 17) + "...";
    return (
      <span className="whitespace-nowrap overflow-hidden text-ellipsis">
        {truncatedText}
      </span>
    );
  };

  return (
    <div>
      <div className="max-md:w-32 max-md:h-48 w-48 h-64 bg-[#d9d9d9] rounded max-sm:p-1 p-2 mr-4 flex flex-col items-center text-center">
        <div className="w-[95%] h-[60%] bg-black"></div>
        <div className="max-sm:my-2 max-md:my-3 my-5 flex flex-col items-center">
          <p className="font-semibold text-xs md:text-base">
            <TruncatedText text={Nama} />
          </p>
          <p className="flex items-center text-xs md:text-sm">
            <AiFillStar className="text-yellow-500" /> {Rating} | Terjual{" "}
            {Terjual}
          </p>
          <p className="mt-2">
            <b>{Harga}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
