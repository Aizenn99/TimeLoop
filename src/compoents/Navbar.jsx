import React from "react";
import {
  FaDribbble,
  FaInfinity,
} from "react-icons/fa6";
import { IoInfinite } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5">
      <span className="text-white flex font-oswald font-bold text-3xl">
        timel
        <span className="flex items-center font-bold">
          <IoInfinite className="" />
        </span>
        p
      </span>
      <div className="flex text-white text-2xl gap-4">
        <a
          href="https://github.com/Aizenn99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LuGithub className="cursor-pointer" />
        </a>
        <FaDribbble className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
