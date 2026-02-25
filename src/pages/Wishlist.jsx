import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { DataContext } from "../App";

function Wishlist() {
  const { productData } = useContext(DataContext);
  const [visible, setVisible] = useState({
    wishlist: 4,
    data: 4,
  });

  return (
    <div>
      <main>
        <section>
          <div className="container mx-auto py-10">
            <div className="flex items-center justify-between">
              <h3 className="font-Poppins font-medium text-[20px] text-MainColor">
                Wishlist (<span>4</span>)
              </h3>
              <button className="font-Poppins font-medium text-[16px] text-MainColor border border-[#00000080] rounded-sm py-3 px-8 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white" 
              onClick={() => {
                  setVisible((item) => ({
                    ...item,
                    wishlist:
                      item.wishlist >= productData?.length
                        ? 4
                        : productData?.length,
                  }));
                }}>
                Move All To Bag
              </button>
            </div>
            <div className="card flex items-center gap-7.5 flex-wrap py-8 justify-between">
              <Link
                to={"/productdetails"}
                className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer "
              >
                <div className="imgs w-full h-62.5 px-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
                  <img
                    className="w-full  rounded-"
                    src="/imgs/productImg.png"
                    alt=""
                  />
                  <div className="absolute top-3 -right-full grid gap-2.5 transition-all duration-300 ease-in-out group-hover:right-3">
                    <button
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <FaHeart className="text-[#DB4444] text-[18px]" />
                    </button>
                    <button
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
                    </button>
                  </div>
                  <span className="absolute top-3 -left-full font-Poppins font-normal text-[12px] text-[#FAFAFA] bg-[#DB4444] py-1.5 px-3.5 rounded-sm transition-all duration-300 ease-in-out group-hover:left-3">
                    -40%
                  </span>
                  <button
                    className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
                <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
                  Product name
                </h4>
                <div className="flex gap-5 mb-2.5">
                  <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
                    $59897
                  </h5>
                  <span className="font-Poppins font-medium text-[16px] text-[#808080] line-through">
                    $65494
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
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto py-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
                <span className="font-Poppins font-medium text-[20px] leading-5 text-MainColor">
                  Just For You
                </span>
              </div>
              <button
                className="font-Poppins font-medium text-[16px] text-MainColor border border-[#00000080] rounded-sm py-3 px-8 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white"
                onClick={() => {
                  setVisible((item) => ({
                    ...item,
                    data:
                      item.data >= productData?.length
                        ? 4
                        : productData?.length,
                  }));
                }}
              >
                See All
              </button>
            </div>
            <div className="card flex items-center gap-7.5 flex-wrap py-8 justify-between">
              {productData?.slice(0, visible.data).map((item) => {
                return <Product key={item.id} item={item} />;
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Wishlist;
