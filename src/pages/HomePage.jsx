import React from "react";
import {
  IoIosArrowForward,
  IoMdArrowRoundBack,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Button from "@mui/material/Button";

function HomePage() {
  return (
    <>
      <div className="hero mb-15 ">
        <div className="container mx-auto flexStill items-start gap-10 ">
          <div className=" border-r border-[#00000042] pt-10 pr-10">
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor flex items-center gap-3 mb-2.5 cursor-pointer">
              Woman’s Fashion <IoIosArrowForward />
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor flex items-center gap-3 mb-2.5 cursor-pointer">
              Men’s Fashion <IoIosArrowForward />
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor mb-2.5 cursor-pointer">
              Electronics
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor mb-2.5 cursor-pointer">
              Home & Lifestyle
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor mb-2.5 cursor-pointer">
              Medicine
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor mb-2.5 cursor-pointer">
              Sports & Outdoor
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor mb-2.5 cursor-pointer">
              Baby’s & Toys
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor mb-2.5 cursor-pointer">
              Groceries & Pets
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor cursor-pointer">
              Health & Beauty
            </h5>
          </div>
          <div className="flex-1 pt-10 ">
            <div className=" flex items-center justify-between gap-5 bg-MainColor h-74">
              <div className="p-15">
                <div className="flex gap-4 items-center mb-5">
                  <img className="w-8" src="/imgs/apple.png" alt="" />
                  <h6 className="font-Poppins font-normal text-[#FAFAFA]">
                    iPhone 14 Series
                  </h6>
                </div>
                <h2 className="font-Inter font-semibold text-[48px] leading-15 text-[#FAFAFA] mb-3 ">
                  Up to 10% off Voucher
                </h2>
                <button className="font-Poppins font-medium text-[16px] leading-6 text-[#FAFAFA] flex items-center gap-2 py-1 border-b border-[#FAFAFA] cursor-pointer">
                  Shop Now <IoArrowForward className="text-[19px]  " />
                </button>
              </div>
              <div className="h-74">
                <img
                  className="w-full h-full"
                  src="/imgs/homeHeroImg.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section className="mb-10">
          <div className="container mx-auto border-b border-[#B3B3B3] pb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
              <span className="font-Poppins font-semibold text-[16px] leading-5 text-[#DB4444]">
                Today's
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex items-end gap-15">
                <h2 className="font-Inter font-semibold text-[36px] leading-12 text-MainColor">
                  Flash Sales
                </h2>
                <div className="flex items-end gap-3">
                  <div className="">
                    <h6 className="font-Poppins font-medium text-[12px] text-MainColor mb-1">
                      Days
                    </h6>
                    <h2 className="font-Inter font-bold text-[32px] leading-7.5 text-MainColor">
                      03
                    </h2>
                  </div>
                  <span className="font-Poppins font-bold text-[20px] text-[#E07575]">
                    :
                  </span>
                  <div className="">
                    <h6 className="font-Poppins font-medium text-[12px] text-MainColor mb-1">
                      Hours
                    </h6>
                    <h2 className="font-Inter font-bold text-[32px] leading-7.5 text-MainColor">
                      23
                    </h2>
                  </div>
                  <span className="font-Poppins font-bold text-[20px] text-[#E07575]">
                    :
                  </span>
                  <div className="">
                    <h6 className="font-Poppins font-medium text-[12px] text-MainColor mb-1">
                      Minutes
                    </h6>
                    <h2 className="font-Inter font-bold text-[32px] leading-7.5 text-MainColor">
                      19
                    </h2>
                  </div>
                  <span className="font-Poppins font-bold text-[20px] text-[#E07575]">
                    :
                  </span>
                  <div className="">
                    <h6 className="font-Poppins font-medium text-[12px] text-MainColor mb-1">
                      Seconds
                    </h6>
                    <h2 className="font-Inter font-bold text-[32px] leading-7.5 text-MainColor">
                      56
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundBack />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundForward />
                </button>
              </div>
            </div>
            <div className="card flex items-center gap-7.5 flex-wrap py-8 justify-between">
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-5 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <span className="font-Poppins font-medium text-[16px] text-[#808080] line-through">
                    $160
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                    (88)
                  </span>
                </div>
                <span className="absolute top-3 left-3 font-Poppins font-normal text-[12px] text-[#FAFAFA] bg-[#DB4444] py-1.5 px-3.5 rounded-sm">
                  -40%
                </span>
                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-5 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <span className="font-Poppins font-medium text-[16px] text-[#808080] line-through">
                    $160
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                    (88)
                  </span>
                </div>
                <span className="absolute top-3 left-3 font-Poppins font-normal text-[12px] text-[#FAFAFA] bg-[#DB4444] py-1.5 px-3.5 rounded-sm">
                  -40%
                </span>
                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-5 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <span className="font-Poppins font-medium text-[16px] text-[#808080] line-through">
                    $160
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                    (88)
                  </span>
                </div>
                <span className="absolute top-3 left-3 font-Poppins font-normal text-[12px] text-[#FAFAFA] bg-[#DB4444] py-1.5 px-3.5 rounded-sm">
                  -40%
                </span>
                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-5 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <span className="font-Poppins font-medium text-[16px] text-[#808080] line-through">
                    $160
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                    (88)
                  </span>
                </div>
                <span className="absolute top-3 left-3 font-Poppins font-normal text-[12px] text-[#FAFAFA] bg-[#DB4444] py-1.5 px-3.5 rounded-sm">
                  -40%
                </span>
                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                sx={{
                  backgroundColor: "#DB4444",
                  padding: "10px 30px",
                  "&:hover": {
                    backgroundColor: "#b33636",
                  },
                }}
                variant="contained"
              >
                View All Products
              </Button>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <div className="container mx-auto pb-2 border-b border-[#B3B3B3]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
              <span className="font-Poppins font-semibold text-[16px] leading-5 text-[#DB4444]">
                Categories
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex items-end gap-15">
                <h2 className="font-Inter font-semibold text-[36px] leading-12 text-MainColor">
                  Browse By Category
                </h2>
              </div>
              <div className="flex items-center gap-2.5">
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundBack />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundForward />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between py-8">
              <div className="w-42.5 h-36.5 content-center border border-[#0000004D] rounded-sm transition-all duration-500 ease-in-out hover:bg-[#DB4444] group">
                <img
                  className="mx-auto w-14 h-14 mb-2"
                  src="/imgs/categoryImg.png"
                  alt=""
                />
                <h4 className="font-Poppins font-normal text-[16px] text-MainColor text-center transition-all duration-500 ease-in-out group-hover:text-[#FAFAFA]">
                  Phones
                </h4>
              </div>
              <div className="w-42.5 h-36.5 content-center border border-[#0000004D] rounded-sm transition-all duration-500 ease-in-out hover:bg-[#DB4444] group">
                <img
                  className="mx-auto w-14 h-14 mb-2"
                  src="/imgs/categoryImg.png"
                  alt=""
                />
                <h4 className="font-Poppins font-normal text-[16px] text-MainColor text-center transition-all duration-500 ease-in-out group-hover:text-[#FAFAFA]">
                  Phones
                </h4>
              </div>
              <div className="w-42.5 h-36.5 content-center border border-[#0000004D] rounded-sm transition-all duration-500 ease-in-out hover:bg-[#DB4444] group">
                <img
                  className="mx-auto w-14 h-14 mb-2"
                  src="/imgs/categoryImg.png"
                  alt=""
                />
                <h4 className="font-Poppins font-normal text-[16px] text-MainColor text-center transition-all duration-500 ease-in-out group-hover:text-[#FAFAFA]">
                  Phones
                </h4>
              </div>
              <div className="w-42.5 h-36.5 content-center border border-[#0000004D] rounded-sm transition-all duration-500 ease-in-out hover:bg-[#DB4444] group">
                <img
                  className="mx-auto w-14 h-14 mb-2"
                  src="/imgs/categoryImg.png"
                  alt=""
                />
                <h4 className="font-Poppins font-normal text-[16px] text-MainColor text-center transition-all duration-500 ease-in-out group-hover:text-[#FAFAFA]">
                  Phones
                </h4>
              </div>
              <div className="w-42.5 h-36.5 content-center border border-[#0000004D] rounded-sm transition-all duration-500 ease-in-out hover:bg-[#DB4444] group">
                <img
                  className="mx-auto w-14 h-14 mb-2"
                  src="/imgs/categoryImg.png"
                  alt=""
                />
                <h4 className="font-Poppins font-normal text-[16px] text-MainColor text-center transition-all duration-500 ease-in-out group-hover:text-[#FAFAFA]">
                  Phones
                </h4>
              </div>
              <div className="w-42.5 h-36.5 content-center border border-[#0000004D] rounded-sm transition-all duration-500 ease-in-out hover:bg-[#DB4444] group">
                <img
                  className="mx-auto w-14 h-14 mb-2"
                  src="/imgs/categoryImg.png"
                  alt=""
                />
                <h4 className="font-Poppins font-normal text-[16px] text-MainColor text-center transition-all duration-500 ease-in-out group-hover:text-[#FAFAFA]">
                  Phones
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto pb-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
              <span className="font-Poppins font-semibold text-[16px] leading-5 text-[#DB4444]">
                Categories
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex items-end gap-15">
                <h2 className="font-Inter font-semibold text-[36px] leading-12 text-MainColor">
                  Browse By Category
                </h2>
              </div>
              <div className="flex items-center gap-2.5">
                <Button
                  sx={{
                    backgroundColor: "#DB4444",
                    padding: "10px 30px",
                    "&:hover": {
                      backgroundColor: "#b33636",
                    },
                  }}
                  variant="contained"
                >
                  View All
                </Button>
              </div>
            </div>
            <div className="card flex items-center gap-7.5 flex-wrap py-8 justify-between">
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg2.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-5 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <span className="font-Poppins font-medium text-[16px] text-[#808080] line-through">
                    $160
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                    (88)
                  </span>
                </div>
                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg2.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-5 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <span className="font-Poppins font-medium text-[16px] text-[#808080] line-through">
                    $160
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                    (88)
                  </span>
                </div>
                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg2.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-5 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <span className="font-Poppins font-medium text-[16px] text-[#808080] line-through">
                    $160
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                    (88)
                  </span>
                </div>
                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg2.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-5 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <span className="font-Poppins font-medium text-[16px] text-[#808080] line-through">
                    $160
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <FaStar className="text-[#FFAD33] text-[16px]" />
                  <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                    (88)
                  </span>
                </div>
                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-15">
          <div className="container mx-auto flex items-center justify-between gap-10 p-10 bg-MainColor">
            <div className="w-1/2">
              <span className="font-Poppins block font-semibold text-[16px] text-[#00FF66] mb-5">
                Categories
              </span>
              <h1 className="font-Inter font-semibold text-[48px] leading-15 text-[#FAFAFA] mb-5">
                Enhance Your Music Experience
              </h1>
              <div className="flex items-center gap-5 mb-5">
                <div className="w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-center content-center">
                  <h3 className="font-Poppins font-semibold text-[16px] leading-5 text-MainColor">
                    23
                  </h3>
                  <span className="font-Poppins font-normal text-[11px] leading-4.5 text-MainColor">
                    Hours
                  </span>
                </div>
                <div className="w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-center content-center">
                  <h3 className="font-Poppins font-semibold text-[16px] leading-5 text-MainColor">
                    05
                  </h3>
                  <span className="font-Poppins font-normal text-[11px] leading-4.5 text-MainColor">
                    Days
                  </span>
                </div>
                <div className="w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-center content-center">
                  <h3 className="font-Poppins font-semibold text-[16px] leading-5 text-MainColor">
                    59
                  </h3>
                  <span className="font-Poppins font-normal text-[11px] leading-4.5 text-MainColor">
                    Minutes
                  </span>
                </div>
                <div className="w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-center content-center">
                  <h3 className="font-Poppins font-semibold text-[16px] leading-5 text-MainColor">
                    35
                  </h3>
                  <span className="font-Poppins font-normal text-[11px] leading-4.5 text-MainColor">
                    Seconds
                  </span>
                </div>
              </div>
              <Button
                sx={{
                  backgroundColor: "#00FF66",
                  padding: "10px 30px",
                  "&:hover": {
                    backgroundColor: "#00FF46",
                  },
                }}
                variant="contained"
                className="font-Poppins font-medium text-[16px] text-[#FAFAFA]"
              >
                Buy Now!
              </Button>
            </div>
            <div className="w-1/2 drop-shadow-[0_0_100px_#3C3C3C]">
              <img className="w-full" src="/imgs/musicImg.png" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
              <span className="font-Poppins font-semibold text-[16px] leading-5 text-[#DB4444]">
                Our Products
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex items-end gap-15">
                <h2 className="font-Inter font-semibold text-[36px] leading-12 text-MainColor">
                  Explore Our Products
                </h2>
              </div>
              <div className="flex items-center gap-2.5">
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundBack />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundForward />
                </button>
              </div>
            </div>
            <div className="card flex items-center gap-7.5 flex-wrap py-8 justify-between">
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg3.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-3 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-1">
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                    </div>
                    <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                      (88)
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg3.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-3 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-1">
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                    </div>
                    <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                      (88)
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg3.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-3 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-1">
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                    </div>
                    <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                      (88)
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
              <div className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer relative">
                <div className="imgs w-full h-62.5 p-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full h-full object-cover  rounded-"
                    src="/imgs/productImg3.png"
                    alt=""
                  />
                  <button className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  HAVIT HV-G92 Gamepad
                </h4>
                <div className="flex gap-3 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $120
                  </h5>
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-1">
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                      <FaStar className="text-[#FFAD33] text-[16px]" />
                    </div>
                    <span className="font-Poppins font-medium text-[16px] text-[#808080]">
                      (88)
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 grid gap-2.5 ">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <FaRegHeart className="text-MainColor text-[18px]" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                    <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                sx={{
                  backgroundColor: "#DB4444",
                  padding: "10px 30px",
                  "&:hover": {
                    backgroundColor: "#b33636",
                  },
                }}
                variant="contained"
              >
                View All Products
              </Button>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
              <span className="font-Poppins font-semibold text-[16px] leading-5 text-[#DB4444]">
                Featured
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex items-end gap-15">
                <h2 className="font-Inter font-semibold text-[36px] leading-12 text-MainColor">
                  Explore Our Products
                </h2>
              </div>
            </div>
            <div className="card py-8 flex justify-between gap-8">
              <div className="w-1/2 h-150 relative border bg-MainColor group overflow-hidden">
                <img src="" alt="" />
                <div className="absolute -bottom-full left-8 w-60 transition-all duration-300 ease-in-out group-hover:bottom-8">
                  <h4 className="font-Inter font-semibold text-[24px] leading-6 text-[#FAFAFA] mb-3">
                    PlayStation 5
                  </h4>
                  <p className="font-Poppins font-normal text-[14px] leading-5 text-[#FAFAFA] mb-5">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <button className="font-Poppins font-medium text-[16px] leading-6 text-white border-b border-[#FFFFFF] cursor-pointer">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="w-1/2 grid gap-8">
                <div className="w-full h-71 border relative bg-[#0D0D0D] group overflow-hidden">
                  <div className="absolute -bottom-full left-8 w-60 transition-all duration-300 ease-in-out group-hover:bottom-8">
                    <h4 className="font-Inter font-semibold text-[24px] leading-6 text-[#FAFAFA] mb-3">
                      Women’s Collections
                    </h4>
                    <p className="font-Poppins font-normal text-[14px] leading-5 text-[#FAFAFA] mb-5">
                      Featured woman collections that give you another vibe.
                    </p>
                    <button className="font-Poppins font-medium text-[16px] leading-6 text-white border-b border-[#FFFFFF] cursor-pointer">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="flex justify-between gap-8 ">
                  <div className="w-1/2 h-71 border bg-[#0C0C0C] relative group overflow-hidden">
                    <div className="absolute -bottom-full left-8 w-60 transition-all duration-300 ease-in-out group-hover:bottom-8">
                      <h4 className="font-Inter font-semibold text-[24px] leading-6 text-[#FAFAFA] mb-3">
                        Speakers
                      </h4>
                      <p className="font-Poppins font-normal text-[14px] leading-5 text-[#FAFAFA] mb-5">
                        Amazon wireless speakers
                      </p>
                      <button className="font-Poppins font-medium text-[16px] leading-6 text-white border-b border-[#FFFFFF] cursor-pointer">
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 h-71 border bg-[#0C0C0C] relative group overflow-hidden">
                    <div className="absolute -bottom-full left-8 w-60 transition-all duration-300 ease-in-out group-hover:bottom-8">
                      <h4 className="font-Inter font-semibold text-[24px] leading-6 text-[#FAFAFA] mb-3">
                        Perfume
                      </h4>
                      <p className="font-Poppins font-normal text-[14px] leading-5 text-[#FAFAFA] mb-5">
                        GUCCI INTENSE OUD EDP
                      </p>
                      <button className="font-Poppins font-medium text-[16px] leading-6 text-white border-b border-[#FFFFFF] cursor-pointer">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-10">
          <div className="container mx-auto py-5 flex item-center justify-around">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-10 border-[#C1C0C1] bg-MainColor mx-auto mb-5">
                <img src="" alt="" />
              </div>
              <h4 className="font-Poppins font-semibold text-[20px] leading-7 text-MainColor mb-2">FREE AND FAST DELIVERY</h4>
              <p className="font-Poppins font-normal text-[14px] leading-5 text-MainColor">Free delivery for all orders over $140</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-10 border-[#C1C0C1] bg-MainColor mx-auto mb-5">
                <img src="" alt="" />
              </div>
              <h4 className="font-Poppins font-semibold text-[20px] leading-7 text-MainColor mb-2">24/7 CUSTOMER SERVICE</h4>
              <p className="font-Poppins font-normal text-[14px] leading-5 text-MainColor">Friendly 24/7 customer support</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-10 border-[#C1C0C1] bg-MainColor mx-auto mb-5">
                <img src="" alt="" />
              </div>
              <h4 className="font-Poppins font-semibold text-[20px] leading-7 text-MainColor mb-2">MONEY BACK GUARANTEE</h4>
              <p className="font-Poppins font-normal text-[14px] leading-5 text-MainColor">We reurn money within 30 days</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
