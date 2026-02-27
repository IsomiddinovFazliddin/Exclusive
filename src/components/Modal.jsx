import React, { useContext, useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { MdLocalMall, MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

function Modal() {
  const { modal, setModal } = useContext(DataContext);
  return (
    <div
      id="modal"
      className={`absolute w-56 p-5 rounded-sm z-40 bg-[#1D1D1D] right-10 top-15 text-[#FAFAFA] transition-all duration-300 ease-in-out ${
        modal
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-0 pointer-events-none"
      } `}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Link
        to={"/account"}
        className="flex items-center mb-2.5 gap-2.5 cursor-pointer  p-1  rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700"
        onClick={() => {
          setModal(false);
        }}
      >
        <LuUser className="text-[20px] text-[#FAFAFA]" />
        <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
          Manage My Account
        </h4>
      </Link>
      <Link className="flex items-center mb-2.5 gap-2.5 cursor-pointer  p-1 rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700">
        <MdLocalMall className="text-[20px] text-[#FAFAFA]" />
        <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
          My Order
        </h4>
      </Link>
      <Link className="flex items-center mb-2.5 gap-2.5 cursor-pointer p-1 rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700">
        <MdOutlineCancel className="text-[20px] text-[#FAFAFA]" />
        <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
          My Cancellations
        </h4>
      </Link>
      <Link className="flex items-center mb-2.5 gap-2.5 cursor-pointer p-1 rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700">
        <FaRegStar className="text-[20px] text-[#FAFAFA]" />
        <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
          My Reviews
        </h4>
      </Link>
      <Link
        className="flex items-center mb-2.5 gap-2.5 cursor-pointer p-1  rounded-sm transition-all duration-300 ease-in-out bg-red-500 hover:bg-red-600"
        onClick={() => {
          localStorage.clear();
          setModal(false);
        }}
      >
        <BiLogOut className="text-[20px] text-[#FAFAFA]" />
        <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
          Logout
        </h4>
      </Link>
    </div>
  );
}

export default Modal;
