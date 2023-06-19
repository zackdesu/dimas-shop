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
import DimasPay from "./dimaspay";

const Menu = () => {
  const IconMenu = ({ icon: Icon, name }) => (
    <div className="flex flex-col items-center">
      <div className="p-3 bg-zinc-100 border border-zinc-300 flex flex-col items-center cursor-pointer mx-5">
        <Icon size={20} />
      </div>
      <p className="mt-2 cursor-pointer">{name}</p>
    </div>
  );

  return (
    <div className="flex items-center">
      <div className="p-3 px-5 mx-32 my-8 bg-zinc-200 rounded shadow-md flex w-[60%] border border-zinc-100">
        <IconMenu icon={BsCpu} name="CPU" />
        <IconMenu icon={BsMotherboard} name="Motherboard" />
        <IconMenu icon={BsHdmi} name="VGA" />
        <IconMenu icon={BsMemory} name="RAM" />
        <IconMenu icon={GrMemory} name="HDD/SSD" />
        <IconMenu icon={ImPower} name="PSU" />
        <IconMenu icon={HiOutlineDesktopComputer} name="Monitor" />
        <IconMenu icon={FaMouse} name="Mouse" />
        <IconMenu icon={BsKeyboard} name="Keyboard" />
      </div>
      <div className="mx-32 mt-10 mb-5 w-[40%]">
        <DimasPay />
      </div>
    </div>
  );
};

export default Menu;
