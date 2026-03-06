import { Button } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AnimationLogo from "./AnimationLogo";
import { DataContext } from "../App";
import { getToken, setToken } from "../services/token";
import Product from "./Product";
import { baseUrl } from "../services/config";
import { MdLocalMall, MdOutlineCancel } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { toast } from "react-toastify";

function Navbar() {
  const {
    modal,
    setModal,
    cart,
    tokenTitle,
    wishlistData,
    productData,
    cartData,
    setTokenTitle,
    setWishlistData,
  } = useContext(DataContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const userModalRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setModalOpen(false);
      }

      if (
        userModalRef.current &&
        !userModalRef.current.contains(event.target)
      ) {
        setModal(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const filterProduct = productData?.filter((item) => {
    return item?.title?.toLowerCase()?.includes(search.toLowerCase() || "");
  });

  const navigate = useNavigate();

  return (
    <nav className="border-b border-[#00000042]">
      <div className="container mx-auto flexStill py-5">
        <AnimationLogo />
        <ul className="flex gap-5">
          <NavLink
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute  after:h-0.5 after:bg-[#DB4444] after:bottom-0 after:left-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${isActive ? "after:w-full" : "after:w-0"}`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute  after:h-0.5 after:bg-[#DB4444] after:bottom-0 after:left-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${isActive ? "after:w-full" : "after:w-0"}`
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute  after:h-0.5 after:bg-[#DB4444] after:bottom-0 after:left-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${isActive ? "after:w-full" : "after:w-0"}`
            }
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute  after:h-0.5 after:bg-[#DB4444] after:bottom-0 after:left-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${isActive ? "after:w-full" : "after:w-0"}`
            }
            to={"/signup"}
          >
            Sign Up
          </NavLink>
        </ul>
        <div className="flexStill justify-center gap-5">
          <form
            action=""
            ref={searchRef}
            className="relative w-100 "
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/search");
              setSearch("");
              setModalOpen(false);
            }}
          >
            <input
              value={search}
              onInput={(e) => {
                setSearch(e.target.value);
              }}
              onFocus={() => {
                setTimeout(() => {
                  setModalOpen(true);
                }, []);
              }}
              className="w-full  font-Poppins font-normal text-[14px] text-MainColor py-2 px-5 pr-10 bg-[#F5F5F5] border-none rounded-sm outline-none relative"
              type="text"
              placeholder="What are you looking for?"
            />
            <FiSearch className="absolute right-2.5 top-[50%] translate-y-[-50%] cursor-pointer text-MainColor text-[18px]" />
            <div
              className={`modal absolute top-10 z-50 w-full  overflow-y-auto bg-white rounded-sm shadow-md transition-all duration-500 ease-in-out ${modalOpen ? "max-h-[60vh] opacity-100" : "max-h-0 opacity-0"}`}
            >
              {filterProduct?.map((item, i) => {
                return (
                  <Link
                    to={`/productdetails/${item.id}`}
                    key={i}
                    className="flex items-center justify-between shadow-md p-2 mb-4 cursor-pointer"
                    onClick={() => {
                      setModalOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-3 ">
                      <img
                        className="w-15 h-20 object-cover"
                        src={`${baseUrl}${item?.pictures[0]}`}
                        alt=""
                      />
                      <h4 className="font-Poppins font-medium text-[18px]">
                        {item.title.slice(0, 16)}
                      </h4>
                    </div>
                    <span className="font-Poppins font-medium text-[15px]">
                      {item.price}
                    </span>
                  </Link>
                );
              })}
            </div>
          </form>
          <Link to={"/wishlist"} className="relative">
            <FaRegHeart className="text-MainColor text-[18px] " />
            {wishlistData?.length > 0 && (
              <span className="w-3 h-3 flex items-center justify-center font-Poppins font-semibold text-white text-[9px] leading-0 bg-red-600 rounded-full absolute -top-1 -right-1.5">
                {wishlistData.length}
              </span>
            )}
          </Link>
          <Link to={"/cart"} className="relative">
            <RiShoppingCart2Line className="text-MainColor text-[20px] cursor-pointer" />
            {cartData?.cart_items?.length > 0 && (
              <span className="w-3 h-3 flex items-center justify-center font-Poppins font-semibold text-white text-[9px] leading-0 bg-red-600 rounded-full absolute -top-0.5 -right-1">
                {cartData?.cart_items?.length}
              </span>
            )}
          </Link>
          {getToken() || tokenTitle ? (
            <button
              ref={userModalRef}
              className="w-8 h-8 bg-[#DB4444] flex justify-center items-center rounded-full cursor-pointer relative"
              onClick={(e) => {
                e.preventDefault();
                setModal(!modal);
              }}
            >
              <LuUser className="z-10 text-[18px] text-white" />
              <div
                id="modal"
                className={`absolute w-56 p-5 rounded-sm z-40 bg-[#1D1D1D] right-0 top-10 text-[#FAFAFA] transition-all duration-300 ease-in-out ${
                  modal
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-0 pointer-events-none"
                } `}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link
                  to={"/account"}
                  className="flex items-center mb-2.5 gap-2.5 cursor-pointer  p-1  rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  <LuUser className="text-[20px] text-[#FAFAFA]" />
                  <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
                    Manage My Account
                  </h4>
                </Link>
                <Link className="flex items-center mb-2.5 gap-2.5 cursor-pointer  p-1 rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700">
                  <MdLocalMall className="text-[20px] text-[#FAFAFA]" />
                  <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
                    My Order
                  </h4>
                </Link>
                <Link className="flex items-center mb-2.5 gap-2.5 cursor-pointer p-1 rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700">
                  <MdOutlineCancel className="text-[20px] text-[#FAFAFA]" />
                  <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
                    My Cancellations
                  </h4>
                </Link>
                <Link className="flex items-center mb-2.5 gap-2.5 cursor-pointer p-1 rounded-sm transition-all duration-300 ease-in-out hover:bg-gray-700">
                  <FaRegStar className="text-[20px] text-[#FAFAFA]" />
                  <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
                    My Reviews
                  </h4>
                </Link>
                <Link
                  className="flex items-center mb-2.5 gap-2.5 cursor-pointer p-1  rounded-sm transition-all duration-300 ease-in-out bg-red-500 hover:bg-red-600"
                  onClick={() => {
                    localStorage.clear();
                    setModal(false);
                    setTokenTitle(null);
                    setWishlistData(null);
                    toast.info("Siz tizimdan chiqdingiz")
                  }}
                >
                  <BiLogOut className="text-[20px] text-[#FAFAFA]" />
                  <h4 className="font-Poppins font-normal text-[14px] text-[#FAFAFA]">
                    Logout
                  </h4>
                </Link>
              </div>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
