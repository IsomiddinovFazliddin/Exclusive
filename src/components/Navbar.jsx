import { Button } from "@mui/material";
import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import AnimationLogo from "./AnimationLogo";
import { DataContext } from "../App";

function Navbar() {
  const { modal, setModal, cart } = useContext(DataContext);
  return (
    <nav className="border-b border-[#00000042]">
      <div className="container mx-auto flexStill py-5">
        <AnimationLogo />
        {/* <h3 className="font-Inter font-bold text-[24px] tracking-[3%] text-MainColor">
          Exclusive
        </h3> */}
        <ul className="flex gap-5">
          <NavLink
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute  after:h-0.5 after:bg-MainColor after:bottom-0 after:left-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${isActive ? "after:w-full" : "after:w-0"}`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute  after:h-0.5 after:bg-MainColor after:bottom-0 after:left-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${isActive ? "after:w-full" : "after:w-0"}`
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute  after:h-0.5 after:bg-MainColor after:bottom-0 after:left-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${isActive ? "after:w-full" : "after:w-0"}`
            }
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute  after:h-0.5 after:bg-MainColor after:bottom-0 after:left-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${isActive ? "after:w-full" : "after:w-0"}`
            }
            to={"/signup"}
          >
            Sign Up
          </NavLink>
        </ul>
        <div className="flexStill justify-center gap-5">
          <form action="" className="relative w-70 ">
            <input
              className="w-full  font-Poppins font-normal text-[14px] text-MainColor py-2 px-5 pr-10 bg-[#F5F5F5] border-none rounded-sm outline-none"
              type="text"
              placeholder="What are you looking for?"
            />
            <FiSearch className="absolute right-2.5 top-[50%] translate-y-[-50%] cursor-pointer text-MainColor text-[18px]" />
          </form>
          <Link to={"/wishlist"} className="relative">
            <FaRegHeart className="text-MainColor text-[18px] " />
            <span className="w-3 h-3 flex items-center justify-center font-Poppins font-semibold text-white text-[9px] leading-0 bg-red-600 rounded-full absolute -top-1 -right-1.5">
              3
            </span>
          </Link>
          <Link to={"/cart"} className="relative">
            <RiShoppingCart2Line className="text-MainColor text-[20px] cursor-pointer" />
            {cart?.length > 0 && (
              <span className="w-3 h-3 flex items-center justify-center font-Poppins font-semibold text-white text-[9px] leading-0 bg-red-600 rounded-full absolute -top-0.5 -right-1">
                {cart?.length}
              </span>
            )}
          </Link>
          <button
            className="w-8 h-8 bg-[#DB4444] flex justify-center items-center rounded-full cursor-pointer"
            onClick={() => {
              setModal(!modal);
            }}
          >
            <LuUser className="z-10 text-[18px] text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
