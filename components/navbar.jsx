import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="flex justify-between mx-8 py-8 px-5 border-b-2 backdrop-blur fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <Image
          src={"/icon.png"}
          width={50}
          height={50}
          alt="Dimas Tech Supply"
          className="mr-5"
        />
        <h1>Dimas Tech Supply</h1>
      </div>
      <FiSearch size={30} />
    </header>
  );
};

export default Navbar;
