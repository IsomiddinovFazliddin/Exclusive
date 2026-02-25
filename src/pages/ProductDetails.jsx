import { Button } from "@mui/material";
import React, { useState } from "react";
import {
  FaHeart,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaShippingFast,
  FaStar,
} from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function ProductDetails() {
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);
  const [mainImg, setMainImg] = useState();

  window.scrollTo({
    top: "0px",
    behavior: "smooth",
  });

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex items-center gap-2 mb-5">
          <NavLink
            className={`font-Poppins font-normal text-[14px] leading-5 text-[#808080] hover:text-MainColor`}
          >
            Account
          </NavLink>
          <span
            className={`font-Poppins font-normal text-[14px] leading-5 text-[#808080]`}
          >
            /
          </span>
          <NavLink
            className={`font-Poppins font-normal text-[14px] leading-5 text-[#808080] hover:text-MainColor`}
          >
            Gaming
          </NavLink>
          <span
            className={`font-Poppins font-normal text-[14px] leading-5 text-[#808080]`}
          >
            /
          </span>
          <NavLink
            className={`font-Poppins font-normal text-[14px] leading-5 text-[#808080] hover:text-MainColor`}
          >
            Havic HV G-92 Gamepad
          </NavLink>
        </div>
        <div className="flex justify-between gap-10">
          <div className="flex gap-5">
            <div className="imgs grid gap-5">
              <div className="w-37.5 h-27.5 bg-[#F5F5F5] p-5 cursor-pointer">
                <img
                  className="w-full"
                  src="/imgs/productDetailImgSmall.png"
                  alt=""
                />
              </div>
              <div className="w-37.5 h-27.5 bg-[#F5F5F5] p-5 cursor-pointer">
                <img
                  className="w-full"
                  src="/imgs/productDetailImg.png"
                  alt=""
                />
              </div>
              <div className="w-37.5 h-27.5 bg-[#F5F5F5] p-5 cursor-pointer">
                <img
                  className="w-full"
                  src="/imgs/productDetailImg.png"
                  alt=""
                />
              </div>
              <div className="w-37.5 h-27.5 bg-[#F5F5F5] p-5 cursor-pointer">
                <img
                  className="w-full"
                  src="/imgs/productDetailImg.png"
                  alt=""
                />
              </div>
            </div>
            <div className="img w-115 h-125 bg-[#F5F5F5] flex items-center justify-center p-10">
              <img className="w-full" src="/imgs/productDetailImg.png" alt="" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-Inter font-semibold text-[24px] leading-6 tracking-[3%] text-MainColor mb-3">
              Havic HV G-92 Gamepad
            </h2>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                <FaStar className="text-[#FFAD33] text-[15px]" />
                <FaStar className="text-[#FFAD33] text-[15px]" />
                <FaStar className="text-[#FFAD33] text-[15px]" />
                <FaStar className="text-[#FFAD33] text-[15px]" />
                <FaStar className="text-[#BFBFBF] text-[15px]" />
              </div>
              <span className="font-Poppins font-normal text-[14px] leading-5 text-[#808080]">
                (150 Reviews)
              </span>
              <span className="font-Poppins font-normal text-[14px] leading-5 text-[#808080]">
                |
              </span>
              <span className="font-Poppins font-normal text-[14px] leading-5 text-[#00FF66]">
                In Stock
              </span>
            </div>
            <h3 className="font-Inter font-normal text-[24px] leading-6 tracking-[3%] text-MainColor mb-3">
              $192.00
            </h3>
            <p className="font-Poppins font-normal text-[14px] leading-5 text-MainColor mb-4 pr-2 ">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <hr className="border border-[#808080] mb-4" />
            <div className="flex items-center gap-5 mb-5">
              <h4 className="font-Inter font-normal text-[20px] leading-5 tracking-[3%] text-MainColor">
                Colours:
              </h4>
              <div className="flex gap-2">
                <button className="w-5 h-5 rounded-full bg-[#A0BCE0] cursor-pointer focus:border-3"></button>
                <button className="w-5 h-5 rounded-full bg-[#E07575] cursor-pointer focus:border-3"></button>
              </div>
            </div>
            <div className="flex gap-5 items-center mb-5">
              <h4 className="font-Inter font-normal text-[20px] leading-5 tracking-[3%] text-MainColor">
                Size:
              </h4>
              <div className="flex gap-2.5">
                <button className="w-8 h-8 rounded-sm border border-[#808080] font-Poppins font-medium text-[14px] leading-5 text-MainColor cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-[#FAFAFA] focus:bg-[#DB4444] focus:text-[#FAFAFA]">
                  XS
                </button>
                <button className="w-8 h-8 rounded-sm border border-[#808080] font-Poppins font-medium text-[14px] leading-5 text-MainColor cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-[#FAFAFA] focus:bg-[#DB4444] focus:text-[#FAFAFA]">
                  S
                </button>
                <button className="w-8 h-8 rounded-sm border border-[#808080] font-Poppins font-medium text-[14px] leading-5 text-MainColor cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-[#FAFAFA] focus:bg-[#DB4444] focus:text-[#FAFAFA]">
                  M
                </button>
                <button className="w-8 h-8 rounded-sm border border-[#808080] font-Poppins font-medium text-[14px] leading-5 text-MainColor cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-[#FAFAFA] focus:bg-[#DB4444] focus:text-[#FAFAFA]">
                  L
                </button>
                <button className="w-8 h-8 rounded-sm border border-[#808080] font-Poppins font-medium text-[14px] leading-5 text-MainColor cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-[#FAFAFA] focus:bg-[#DB4444] focus:text-[#FAFAFA]">
                  XL
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2.5 mb-5">
              <div className="flex items-center">
                <button
                  className="border border-[#00000080] rounded-l-sm p-2.25 transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] cursor-pointer"
                  onClick={() => {
                    count > 1 ? setCount(count - 1) : 1;
                  }}
                >
                  <FaMinus />
                </button>
                <span className="border border-[#00000080] px-6 py-0.5 font-Poppins font-medium text-[20px] text-MainColor">
                  {count}
                </span>
                <button
                  className="border border-[#00000080] rounded-r-sm p-2.25 transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] cursor-pointer"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <FaPlus />
                </button>
              </div>

              <Button
                sx={{
                  backgroundColor: "#DB4444",
                  padding: "5.5px 30px",
                  "&:hover": {
                    backgroundColor: "#b33636",
                  },
                }}
                variant="contained"
              >
                Buy Now
              </Button>
              <button
                className="border border-[#00000080] rounded-sm p-2 cursor-pointer"
                onClick={() => setLiked(!liked)}
              >
                {liked ? (
                  <FaHeart className="text-[#DB4444] text-[18px]" />
                ) : (
                  <FaRegHeart className="text-MainColor text-[18px]" />
                )}
              </button>
            </div>
            <div className="border border-[#808080] rounded-sm ">
              <div className="flex items-center gap-3  p-4">
                <FaShippingFast className="text-MainColor text-[30px]" />
                <div className="">
                  <h4 className="font-Poppins font-medium text-[16px] text-MainColor">
                    Free Delivery
                  </h4>
                  <h5 className="font-Poppins font-medium text-[12px] text-MainColor">
                    Enter your postal code for Delivery Availability
                  </h5>
                </div>
              </div>
              <hr className="border border-[#808080] " />
              <div className="flex items-center gap-3 p-4">
                <LuRefreshCcw className="text-MainColor text-[30px]" />
                <div className="">
                  <h4 className="font-Poppins font-medium text-[16px] text-MainColor">
                    Return Delivery
                  </h4>
                  <h5 className="font-Poppins font-medium text-[12px] text-MainColor">
                    Free 30 Days Delivery Returns. Details
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
