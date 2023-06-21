"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Carousel = () => {
  const image = ["/contoh.jpg", "/contoh2.jpg"];

  const [i, setI] = useState(0);
  const imageNow = image[i];

  const prevSlide = () => {
    const newIndex = i === 0 ? image.length - 1 : i - 1;
    setI(newIndex);
  };

  const nextSlide = () => {
    const newIndex = i === image.length - 1 ? 0 : i + 1;
    setI(newIndex);
  };

  return (
    <div className="h-[13vw] min-h-[70px] w-full max-sm:mt-7 mt-14 bg-[#d9d9d9] relative">
      <Image
        src={imageNow}
        alt="contoh"
        fill={true}
        style={{ objectFit: "cover", objectPosition: "top" }}
        priority
      />
      <button
        className="absolute left-4 top-1/4 text-white"
        onClick={prevSlide}
      >
        <AiFillCaretLeft size={30} />
      </button>
      <button
        className="absolute right-4 top-1/4 text-white"
        onClick={nextSlide}
      >
        <AiFillCaretRight size={30} />
      </button>
    </div>
  );
};

export default Carousel;
