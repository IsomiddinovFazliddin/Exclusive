import { Button, ListItem } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import {
  FaHeart,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaShippingFast,
  FaStar,
} from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { addToCart, productDetail } from "../services";
import { baseUrl } from "../services/config";
import { DataContext } from "../App";
import Product from "../components/Product";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { getToken } from "../services/token";
import { toast } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const {
    productData,
    setProductModal,
    modalId,
    setModalId,
    refreshCart,
    cartData,
    modalData,
  } = useContext(DataContext);
  const [count, setCount] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [liked, setLiked] = useState(false);
  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState();
  const [visibleData, setVisibleData] = useState(4);

  useEffect(() => {
    if (product?.pictures?.length > 0) {
      setMainImg(`${baseUrl}${product?.pictures?.[0].file}`);
    }
  }, [product]);

  useEffect(() => {
    productDetail(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: "0px",
      behavior: "smooth",
    });
  }, []);
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
        <div className="flex justify-between items-start gap-10">
          <div className="flex gap-5">
            <div className="imgs grid gap-5">
              {product?.pictures?.slice(0, 4).map((item, i) => {
                return (
                  <div
                    key={i}
                    className="w-42.5 h-33.75 bg-[#F5F5F5] px-5 cursor-pointer"
                    onClick={() => setMainImg(`${baseUrl}${item.file}`)}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={`${baseUrl}${item.file}`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <div className="img w-125 h-150 bg-[#F5F5F5] flex items-center justify-center p-10">
              <img
                className="w-full h-full object-cover"
                src={mainImg}
                alt=""
              />
            </div>
          </div>
          <div className="flex-1 w-[40%]">
            <h2 className="font-Inter font-semibold text-[24px] leading-6 tracking-[3%] text-MainColor mb-3">
              {product?.title}
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
                ({product?.quantity} Reviews)
              </span>
              <span className="font-Poppins font-normal text-[14px] leading-5 text-[#808080]">
                |
              </span>
              <span className="font-Poppins font-normal text-[14px] leading-5 text-[#00FF66]">
                In Stock
              </span>
            </div>
            <h3 className="font-Inter font-normal text-[24px] leading-6 tracking-[3%] text-MainColor mb-3">
              {product?.price}
            </h3>
            <p className="font-Poppins font-normal text-[14px] leading-5 text-MainColor mb-4 pr-2 ">
              {product?.description}
            </p>
            <hr className="border border-[#808080] mb-4" />
            <div className="flex items-center gap-5 mb-5">
              <h4 className="font-Inter font-normal text-[20px] leading-5 tracking-[3%] text-MainColor">
                Colours:
              </h4>
              <div className="flex gap-2">
                {product?.properties?.color?.map((item, i) => {
                  return (
                    <button
                      onClick={() => {
                        setColor(item);
                      }}
                      key={i}
                      className="w-5 h-5 rounded-full cursor-pointer focus:border-3 focus:border-gray-700"
                      style={{ backgroundColor: item }}
                    ></button>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-5 items-center mb-5">
              <h4 className="font-Inter font-normal text-[20px] leading-5 tracking-[3%] text-MainColor">
                Size:
              </h4>
              <div className="flex gap-2.5">
                {product?.properties?.size?.map((item, i) => {
                  return (
                    <button
                      onClick={() => {
                        setSize(item);
                      }}
                      key={i}
                      className="px-2 h-8 rounded-sm border border-[#808080] font-Poppins font-medium text-[14px] leading-5 text-MainColor cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#DB4444] hover:text-[#FAFAFA] focus:bg-[#DB4444] focus:text-[#FAFAFA]"
                    >
                      {item}
                    </button>
                  );
                })}
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
                onClick={() => {
                  if (!getToken()) {
                    toast.error("Avval ro'yxatdan o'ting");
                    navigate("/signup");
                    return;
                  }

                  const existingProduct = cartData?.cart_items?.find(
                    (item) => Number(item.product_id) == Number(id),
                  );

                  if (existingProduct) {
                    toast.info("Bu mahsulot allaqachon savatda");
                    return;
                  }

                  if (product?.properties?.color?.length > 0 && !color) {
                    toast.error("Rangni tanlang");
                    return;
                  }

                  if (product?.properties?.size?.length > 0 && !size) {
                    toast.error("Razmerni tanlang");
                    return;
                  }

                  addToCart(id, count, color, size).then((data) => {
                    toast.success("Mahsulot savatga qo'shildi");
                    setProductModal(false);
                    setModalId(null);
                    setCount(1);
                    setColor(null);
                    setSize(null);
                    console.log(data);
                    refreshCart();
                  });
                }}
                className="flex w-full"
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

      <section>
        <div className="container mx-auto py-10">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3 ">
              <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
              <span className="font-Poppins font-semibold text-[16px] leading-5 text-[#DB4444]">
                Today's
              </span>
            </div>
            <Button
              onClick={() => {
                setVisibleData(
                  visibleData >= productData?.length ? 4 : productData?.length,
                );
              }}
              sx={{
                backgroundColor: "#DB4444",
                padding: "10px 30px",
                "&:hover": {
                  backgroundColor: "#b33636",
                },
              }}
              variant="contained"
            >
              {visibleData >= productData?.length ? "Show Less" : "View All"}
            </Button>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            {productData?.slice(0, visibleData).map((item, i) => {
              return <Product item={item} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
