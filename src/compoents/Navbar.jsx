import React from "react";
import { FaDribbble } from "react-icons/fa6";
import { IoInfinite } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 sm:py-5">
      {/* Logo */}
      <span className="text-white flex font-oswald font-bold text-2xl sm:text-3xl">
        timel
        <span className="flex items-center font-bold">
          <IoInfinite className="text-xl sm:text-3xl" />
        </span>
        p
      </span>

      {/* Icons */}
      <div className="flex text-white text-xl sm:text-2xl gap-3 sm:gap-4">
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
