import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../App";
import { baseUrl } from "../services/config";
import { RiDeleteBin6Line, RiDeleteBinLine } from "react-icons/ri";

function Cart() {
  const {} = useContext(DataContext);
  window.scrollTo({
    top: "0px",
    behavior: "smooth",
  });

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex items-center gap-2">
          <NavLink
            to={"/"}
            className="text-[#808080] font-Poppins font-normal text-[14px] cursor-pointer hover:text-MainColor"
          >
            Home
          </NavLink>
          <span className="text-[#808080] font-Poppins font-normal text-[14px] ">
            /
          </span>
          <NavLink
            to={"/cart"}
            className={({ isActive }) => {
              `text-[#808080] font-Poppins font-normal text-[14px] cursor-pointer`;
            }}
          >
            Cart
          </NavLink>
        </div>
        <div className="py-10">
          <div className="shadow-md flex justify-between py-3 px-5 mb-5 pl-20 pr-15 relative">
            <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor ">
              Product
            </h4>
            <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor absolute left-135">
              Price
            </h4>
            <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor absolute left-210">
              Quantity
            </h4>
            <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor ">
              Subtotal
            </h4>
          </div>
          <div className=" h-[65vh] overflow-y-auto mb-5">
            <div
              className="flex items-center justify-between gap-5 shadow-md py-3 px-5 rounded-sm mb-5"
            >
              <div className="flex items-center gap-5 w-[25%] ">
                <div className="w-14 h-14">
                  <img
                    className="w-full h-full "
                    src="/imgs/productImg.png"
                    alt=""
                  />
                </div>

                <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                  Product name
                </h4>
              </div>
              <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                $4548
              </h4>
              <div className="flex items-center">
                <button
                  className="border border-[#00000080] rounded-l-sm p-2.25 transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] cursor-pointer"
                >
                  <FaMinus />
                </button>
                <span className="border border-[#00000080] px-4 py-0.5 font-Poppins font-medium text-[20px] text-MainColor">
                  1
                </span>
                <button
                  className="border border-[#00000080] rounded-r-sm p-2.25 transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] cursor-pointer"
                >
                  <FaPlus />
                </button>
              </div>
              <div className="flex items-center gap-10">
                <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                  $48478
                </h4>
                <RiDeleteBin6Line
                  className="text-[#DB4444] text-[20px] cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-15">
            <button className="font-Poppins font-medium text-[16px] leading-6 text-MainColor border border-[#00000080] py-3 px-5 rounded-sm cursor-pointer">
              Return To Shop
            </button>
            <button className="font-Poppins font-medium text-[16px] leading-6 text-MainColor border border-[#00000080] py-3 px-5 rounded-sm cursor-pointer">
              Update Cart
            </button>
          </div>
          <div className="flex justify-between gap-10 items-start">
            <form
              className="flex gap-3"
              action=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Coupon Code"
                className="font-Poppins font-normal text-[16px] leading-6 text-MainColor border border-[#00000080] rounded-sm outline-none py-2.5 px-5"
              />
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#DB4444",
                  padding: "5.5px 30px",
                  "&:hover": {
                    backgroundColor: "#b33636",
                  },
                }}
                variant="contained"
              >
                Apply Coupon
              </Button>
            </form>
            <div className="w-[40%] border border-MainColor rounded-sm p-5">
              <h2 className="font-Poppins font-medium text-[20px] leading-6 text-MainColor">
                Cart Total
              </h2>
              <div className="flex justify-between py-3">
                <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                  Subtotal:
                </h4>
                <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                  $6594
                </h4>
              </div>
              <hr className="border-0.5 border-[#999999]" />
              <div className="flex justify-between py-3">
                <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                  Shipping:
                </h4>
                <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                  Free
                </h4>
              </div>
              <hr className="border-0.5 border-[#999999]" />
              <div className="flex justify-between py-3">
                <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                  Total:
                </h4>
                <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                  $6484
                </h4>
              </div>
              <div className="flex justify-center mt-5">
                <Link to={"/checkout"}>
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
                    Procees to checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
