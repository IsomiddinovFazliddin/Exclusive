import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { DataContext } from "../App";
import { myWishlist } from "../services";
import { baseUrl } from "../services/config";

function Wishlist() {
  const { productData, setProductData, wishlistData, setWishlistData } =
    useContext(DataContext);
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
              <button
                className="font-Poppins font-medium text-[16px] text-MainColor border border-[#00000080] rounded-sm py-3 px-8 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white"
                onClick={() => {
                  setVisible((item) => ({
                    ...item,
                    wishlist:
                      item.wishlist >= productData?.length
                        ? 4
                        : productData?.length,
                  }));
                }}
              >
                Move All To Bag
              </button>
            </div>
            <div className="card flex items-center gap-10 flex-wrap py-8">
              {wishlistData?.slice().map((item) => {
                return <Product item={item} key={item.id} />;
              })}
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
