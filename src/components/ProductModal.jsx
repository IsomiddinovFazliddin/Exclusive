import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoArrowForward, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

function ProductModal() {
  const { productModal, setProductModal } = useContext(DataContext);
  const [count, setCount] = useState(1);
  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 flex justify-center items-center transition-all duration-500 ease-in-out ${
        productModal
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-0 pointer-events-none"
      }`}
    >
      <div className="w-150 bg-white rounded-lg p-5 relative">
        <div className="flex justify-between gap-10 mb-5">
          <div className="w-[45%] shadow-lg h-70 flex items-center justify-center p-5">
            <img src="/imgs/productImg.png" alt="" />
          </div>
          <div className="w-[55%]">
            <h2 className="font-Inter font-semibold text-[24px] leading-6 tracking-[3%] text-MainColor mb-3">
              Product name
            </h2>
            <div className="flex items-center gap-5 mb-5">
              <h4 className="font-Inter font-normal text-[20px] leading-5 tracking-[3%] text-MainColor">
                Color:
              </h4>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-sm bg-[#037F00]"></button>
                <button className="w-8 h-8 rounded-sm bg-[#FA0201]"></button>
                <button className="w-8 h-8 rounded-sm bg-[#010101]"></button>
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
            <div className="flex items-center gap-5 mb-5">
              <h4 className="font-Inter font-normal text-[20px] leading-5 tracking-[3%] text-MainColor">
                Quanlity:
              </h4>
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
            </div>
            <div className="flex items-center gap-2">
              <h4 className="font-Inter font-normal text-[20px] leading-5 tracking-[3%] text-MainColor">
                Price:
              </h4>
              <span className="font-Inter font-medium text-[20px] leading-5 tracking-[3%] text-MainColor">
                $1000
              </span>
            </div>
          </div>
        </div>
        <Link to={"/productdetails"}>
          <Button
            onClick={() => {
              setProductModal(false);
            }}
            className="flex items-center gap-3"
            sx={{
              backgroundColor: "#DB4444",
              padding: "5.5px 30px",
              "&:hover": {
                backgroundColor: "#b33636",
              },
            }}
            variant="contained"
          >
            Show More <IoArrowForward />
          </Button>
        </Link>
        <IoClose
          className="absolute right-2 top-2 text-[#DB4444] text-[20px] cursor-pointer"
          onClick={() => {
            setProductModal(false);
          }}
        />
      </div>
    </div>
  );
}

export default ProductModal;
