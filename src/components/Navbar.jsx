import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex h-[100px] w-4/5 justify-between items-center mx-auto ">
      <div className="flex items-center">
        <img src={logo} alt="" />
        <ul className="flex ml-[3rem]">
          <li className="tracking-wide">
            <a href="#">About Neatly</a>
          </li>
          <li className="ml-8 tracking-wide">
            <a href="#">Service & Facilities</a>
          </li>
          <li className="ml-8 tracking-wide">
            <a href="#">Rooms & Suits</a>
          </li>
        </ul>
      </div>
      <div className="">
        <button className="mr-8 text-[#E76B39] font-medium">Log in</button>
        <button className="bg-[#C14817] text-white rounded-sm px-5 py-3">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
