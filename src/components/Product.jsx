import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import { baseUrl } from "../services/config";
import { addToLiked, deletLiked } from "../services";

function Product({ item }) {
  const {
    setProductModal,
    productData,
    setProductData,
    wishlistData,
    setWishlistData,
    modalId,
    setModalId,
  } = useContext(DataContext);

  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    let interval;

    if (isHover) {
      interval = setInterval(() => {
        setIndex((info) => (info == item.pictures.length - 1 ? 0 : info + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isHover, item.pictures.length]);

  return (
    <>
      <Link
        to={`/productdetails/${item.id}`}
        className="box w-72.5 pb-2 transition-all duration-300 ease-in-out hover:shadow-md cursor-pointer rounded-sm"
      >
        <div
          className="imgs w-full h-62.5 px-10 bg-[#F5F5F5] flex items-center justify-center rounded-sm mb-4 overflow-hidden relative group"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => {
            setIsHover(false);
            setIndex(0);
          }}
        >
          <img
            className="w-full  rounded-"
            src={`${baseUrl}${item?.pictures[index]}`}
            alt=""
          />
          <div className="absolute top-3 -right-full grid gap-2.5 transition-all duration-300 ease-in-out group-hover:right-3">
            <button
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer"
              onClick={(e) => {
                e.preventDefault();

                const action = item.is_liked
                  ? deletLiked(item.id)
                  : addToLiked(item.id);

                action.then(() => {
                  setProductData((info) =>
                    info.map((res) =>
                      res.id === item.id
                        ? { ...res, is_liked: !res.is_liked }
                        : res,
                    ),
                  );

                  if (item.is_liked) {
                    // remove wishlist
                    setWishlistData((info) =>
                      info.filter((el) => el.id !== item.id),
                    );
                  } else {
                    // add to wishlist
                    setWishlistData((info) => [
                      ...info,
                      { ...item, is_liked: true },
                    ]);
                  }
                });
              }}
            >
              {item?.is_liked ? (
                <FaHeart className="text-[#DB4444] text-[18px]" />
              ) : (
                <FaRegHeart className="text-MainColor text-[18px]" />
              )}
            </button>
            <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
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
              setModalId(item.id);
              setProductModal(true);
            }}
          >
            Add To Cart
          </button>
        </div>
        <div className="px-2">
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
        </div>
      </Link>
    </>
  );
}

export default Product;
