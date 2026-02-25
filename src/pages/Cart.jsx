import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../App";
import { baseUrl } from "../services/config";
import { RiDeleteBin6Line, RiDeleteBinLine } from "react-icons/ri";

function Cart() {
  const { cart, setCart, delCart } = useContext(DataContext);
  window.scrollTo({
    top: "0px",
    behavior: "smooth",
  });

  const decrement = (id) => {
    setCart((data) =>
      data.map((item) =>
        item.productId === id
          ? {
              ...item,
              count: item.count > 1 ? item.count - 1 : 1,
            }
          : item,
      ),
    );
  };

  const increment = (id) => {
    setCart((data) =>
      data.map((item) =>
        item.productId === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.count, 0);
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
            to={"/about"}
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
            {cart?.length > 0 ? (
              cart?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-5 shadow-md py-3 px-5 rounded-sm mb-5"
                  >
                    <div className="flex items-center gap-5 w-[25%] ">
                      <div className="w-14 h-14">
                        <img
                          className="w-full h-full "
                          src={`${baseUrl}${item.img}`}
                          alt=""
                        />
                      </div>

                      <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                        {item?.title?.length > 20
                          ? item.title.slice(0, 20) + "..."
                          : item.title}
                      </h4>
                    </div>
                    <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                      {item.price}
                    </h4>
                    <div className="flex items-center">
                      <button
                        className="border border-[#00000080] rounded-l-sm p-2.25 transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] cursor-pointer"
                        onClick={() => {
                          decrement(item.productId);
                        }}
                      >
                        <FaMinus />
                      </button>
                      <span className="border border-[#00000080] px-4 py-0.5 font-Poppins font-medium text-[20px] text-MainColor">
                        {item.count}
                      </span>
                      <button
                        className="border border-[#00000080] rounded-r-sm p-2.25 transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] cursor-pointer"
                        onClick={() => {
                          increment(item.productId);
                        }}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <div className="flex items-center gap-10">
                      <h4 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                        {item.price * item.count}
                      </h4>
                      <RiDeleteBin6Line
                        className="text-[#DB4444] text-[20px] cursor-pointer"
                        onClick={() => {
                          delCart(item.productId);
                        }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex h-full justify-center items-center text-center flex-col gap-5">
                <img className=" w-110" src="/imgs/empty.gif" alt="" />
                <h4 className="font-Inter font-semibold text-[20px]">
                  Hozircha mahsulotlar yo‘q <br />
                  Iltimos mahsulotlar tanlang
                </h4>
              </div>
            )}
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
                  {subtotal}
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
                  {subtotal}
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
