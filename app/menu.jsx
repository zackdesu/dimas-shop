import React from "react";
import {
  BsCpu,
  BsHdmi,
  BsMemory,
  BsMotherboard,
  BsKeyboard,
} from "react-icons/bs";
import { GrMemory } from "react-icons/gr";
import { ImPower } from "react-icons/im";
import { FaMouse } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Link from 'next/link'
const Menu = () => {
  const IconMenu = ({ icon: Icon, name, href }) => (
  <Link href={`/${href}`}>
    <div className="flex flex-col items-center">
      <div className="p-3 bg-zinc-100 border border-zinc-300 flex flex-col items-center cursor-pointer mx-5 my-3">
        <Icon size={15} />
      </div>
      <p className="mt-2 cursor-pointer">{name}</p>
    </div>
   </Link>
  );

  return (
    <div className="flex items-center flex-wrap justify-center mx-auto">
      <div className="p-3 px-5 my-8 bg-zinc-200 rounded shadow-md flex border border-zinc-100 justify-center flex-wrap max-[1036px]:w-[472px] max-[478px]:w-[365px]">
        <IconMenu icon={BsCpu} name="CPU" href="cpu" />
        <IconMenu icon={BsMotherboard} name="Motherboard" href="motherboard" />
        <IconMenu icon={BsHdmi} name="VGA" href="vga" />
        <IconMenu icon={BsMemory} name="RAM" href="ram" />
        <IconMenu icon={GrMemory} name="HDD/SSD" href="memory" />
        <IconMenu icon={ImPower} name="PSU" href="psu" />
        <IconMenu icon={HiOutlineDesktopComputer} name="Monitor" href="monitor" />
        <IconMenu icon={FaMouse} name="Mouse" href="mouse" />
        <IconMenu icon={BsKeyboard} name="Keyboard" href="keyboard" />
      </div>
    </div>
  );
};

export default Menu;
