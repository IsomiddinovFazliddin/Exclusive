import React from "react";
import { BiLogOut } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { MdLocalMall, MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

function Modal({ modal }) {
  return (
    <div
      className={`absolute w-56 p-5 rounded-sm z-40 bg-[#0E0B0E] right-10 top-15 text-[#FAFAFA] transition-all duration-300 ease-in-out ${
        modal ? "opacity-100 scale-100 " : "opacity-0 scale-95 "
      } `}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Link to={"/login"} className="flex items-center mb-2.5 gap-2.5 cursor-pointer  p-1  rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700">
        <LuUser className="text-[20px]" />
        <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
          Manage My Account
        </h4>
      </Link>
      <Link className="flex items-center mb-2.5 gap-2.5 cursor-pointer  p-1 rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700">
        <MdLocalMall className="text-[20px]" />
        <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
          My Order
        </h4>
      </Link>
      <Link className="flex items-center mb-2.5 gap-2.5 cursor-pointer p-1 rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700">
        <MdOutlineCancel className="text-[20px]" />
        <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
          My Cancellations
        </h4>
      </Link>
      <Link className="flex items-center mb-2.5 gap-2.5 cursor-pointer p-1 rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700">
        <FaRegStar className="text-[20px]" />
        <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
          My Reviews
        </h4>
      </Link>
      <Link className="flex items-center mb-2.5 gap-2.5 cursor-pointer p-1  rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700">
        <BiLogOut className="text-[20px]" />
        <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
          Logout
        </h4>
      </Link>
    </div>
  );
}

export default Modal;
