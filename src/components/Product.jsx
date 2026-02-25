import React, { useContext, useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import { baseUrl } from "../services/config";

function Product({ item }) {
  const { setProductModal, addToCart, addWishlist } = useContext(DataContext);
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Link
        to={"/productdetails"}
        className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer rounded-sm"
      >
        <div className="imgs w-full h-62.5 px-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group ">
          <img
            className="w-full  rounded-"
            src={`${baseUrl}${item?.pictures[0]}`}
            alt=""
          />
          <div className="absolute top-3 -right-full grid gap-2.5 transition-all duration-300 ease-in-out group-hover:right-3">
            <button
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setLiked(!liked);
                addWishlist(item.id)
              }}
            >
              {liked ? (
                <FaHeart className="text-[#DB4444] text-[18px]" />
              ) : (
                <FaRegHeart className="text-MainColor text-[18px]" />
              )}
            </button>
            <button
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setProductModal(true);
              }}
            >
              <MdOutlineRemoveRedEye className="text-MainColor text-[18px]" />
            </button>
          </div>
          <span className="absolute top-3 -left-full font-Poppins font-normal text-[12px] text-[#FAFAFA] bg-[#DB4444] py-1.5 px-3.5 rounded-sm transition-all duration-300 ease-in-out group-hover:left-3">
            -40%
          </span>
          <button
            className="absolute -bottom-full w-full font-Poppins font-medium text-[16px] text-white bg-MainColor py-1.5 px-5 cursor-pointer transition-all duration-300 ease-in-out group-hover:bottom-0 "
            onClick={(e) => {
              e.preventDefault();
              addToCart(item.id);
            }}
          >
            Add To Cart
          </button>
        </div>
        <h4 className="font-Poppins font-medium text-[16px] leading-6 text-MainColor mb-2.5">
          {item?.title?.length > 28
            ? item.title.slice(0, 28) + "..."
            : item?.title}
        </h4>
        <div className="flex gap-5 mb-2.5">
          <h5 className="font-Poppins font-medium text-[16px] text-[#DB4444]">
            {item?.discount_price}
          </h5>
          <span className="font-Poppins font-medium text-[16px] text-[#808080] line-through">
            {item?.price}
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
    </>
  );
}

export default Product;
