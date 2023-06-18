import React from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="flex justify-between my-2 mx-8 p-5 border-b-2 backdrop-blur fixed top-0 left-0 right-0">
      <h1>Dimas Tech Supply</h1>
      <FiSearch size={30} />
    </header>
  );
};

export default Navbar;
