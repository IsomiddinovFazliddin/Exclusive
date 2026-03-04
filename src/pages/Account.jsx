import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { userDetail, userUpdate } from "../services";
import { toast } from "react-toastify";

function Account() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: "0px",
      behavior: "smooth",
    });
    userDetail().then((data) => {
      if (data) {
        setFirstName(data.first_name || "");
        setLastName(data.last_name || "");
        setEmail(data.email_or_phone || "");
        setAddress(data.address || "");
      }
    });
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 py-5">
            <Link className="text-[#808080] font-Poppins font-normal text-[14px] cursor-pointer hover:text-MainColor">
              Home
            </Link>
            <span className="text-[#808080] font-Poppins font-normal text-[14px] ">
              /
            </span>
            <Link className="text-[#808080] font-Poppins font-normal text-[14px] cursor-pointer hover:text-MainColor">
              My Account
            </Link>
          </div>
        </div>
        <div className="flex gap-30 mb-10">
          <div className="">
            <h4 className="text-MainColor font-Poppins font-medium text-[16px] leading-6 mb-4">
              Manage My Account
            </h4>
            <div className="grid pl-5 mb-4">
              <NavLink
                to=""
                className={({ isActive }) =>
                  `font-Poppins font-normal text-[16px] leading-6 mb-2.5 
                    ${isActive ? "text-[#DB4444]" : "text-[#808080]"}`
                }
              >
                My Profile
              </NavLink>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `font-Poppins font-normal text-[16px] leading-6 mb-2.5 
                    ${isActive ? "text-[#DB4444]" : "text-[#808080]"}`
                }
              >
                Address Book
              </NavLink>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `font-Poppins font-normal text-[16px] leading-6  
                    ${isActive ? "text-[#DB4444]" : "text-[#808080]"}`
                }
              >
                My Payment Options
              </NavLink>
            </div>
            <h4 className="text-MainColor font-Poppins font-medium text-[16px] leading-6 mb-4">
              My Orders
            </h4>
            <div className="grid pl-5 mb-4">
              <NavLink
                to=""
                className={({ isActive }) =>
                  `font-Poppins font-normal text-[16px] leading-6 mb-2.5 
                    ${isActive ? "text-[#DB4444]" : "text-[#808080]"}`
                }
              >
                My Returns
              </NavLink>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `font-Poppins font-normal text-[16px] leading-6 mb-2.5 
                    ${isActive ? "text-[#DB4444]" : "text-[#808080]"}`
                }
              >
                My Cancellations
              </NavLink>
            </div>
            <h4 className="text-MainColor font-Poppins font-medium text-[16px] leading-6 mb-4">
              My WishList
            </h4>
          </div>
          <div className="flex-1 py-8 px-12 shadow-lg">
            <h2 className="font-Poppins font-medium text-[20px] mb-5 text-[#DB4444]">
              Edit Your Profile
            </h2>
            <form
              className="flex flex-wrap gap-5 justify-between"
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                userUpdate(firstName, lastName, email, phone, address, password)
                  .then((res) => {
                    if (res?.email) {
                      toast.success("Ma'lumotlar yangilandi");
                    } else {
                      toast.error(res.email[0]);
                    }
                  })
                  .catch(() => {
                    toast.error("Xatolik yuz berdi");
                  });
              }}
            >
              <div className="w-[45%] grid gap-2">
                <label
                  className="font-Poppins font-normal text-MainColor text-[16px]"
                  htmlFor=""
                >
                  First Name
                </label>
                <input
                  className="w-full bg-[#F5F5F5] py-2.5 px-3 rounded-sm font-Poppins font-normal text-MainColor text-[16px] outline-none"
                  type="text"
                  placeholder="Md"
                  required
                  value={firstName}
                  onInput={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="w-[45%] grid gap-2">
                <label
                  className="font-Poppins font-normal text-MainColor text-[16px]"
                  htmlFor=""
                >
                  Last Name
                </label>
                <input
                  className="w-full bg-[#F5F5F5] py-2.5 px-3 rounded-sm font-Poppins font-normal text-MainColor text-[16px] outline-none"
                  type="text"
                  placeholder="Rimel"
                  required
                  value={lastName}
                  onInput={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="w-[45%] grid gap-2">
                <label
                  className="font-Poppins font-normal text-MainColor text-[16px]"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  className="w-full bg-[#F5F5F5] py-2.5 px-3 rounded-sm font-Poppins font-normal text-MainColor text-[16px] outline-none"
                  type="email"
                  placeholder="rimel1111@gmail.com"
                  required
                  value={email}
                  onInput={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="w-[45%] grid gap-2">
                <label
                  className="font-Poppins font-normal text-MainColor text-[16px]"
                  htmlFor=""
                >
                  Phone
                </label>
                <input
                  className="w-full bg-[#F5F5F5] py-2.5 px-3 rounded-sm font-Poppins font-normal text-MainColor text-[16px] outline-none"
                  type="text"
                  placeholder="+998"
                  value={phone}
                  onInput={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="w-[45%] grid gap-2">
                <label
                  className="font-Poppins font-normal text-MainColor text-[16px]"
                  htmlFor=""
                >
                  Address
                </label>
                <input
                  className="w-full bg-[#F5F5F5] py-2.5 px-3 rounded-sm font-Poppins font-normal text-MainColor text-[16px] outline-none"
                  type="text"
                  placeholder="Kingston, 5236, United State"
                  value={address}
                  onInput={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="w-full grid gap-2">
                <label
                  className="font-Poppins font-normal text-MainColor text-[16px]"
                  htmlFor=""
                >
                  Password Changes
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-[#F5F5F5] py-2.5 px-3 rounded-sm font-Poppins font-normal text-MainColor text-[16px] outline-none"
                    type={showCurrent ? "text" : "password"}
                    placeholder="Current Password"
                    required
                    onInput={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  {showCurrent ? (
                    <FaRegEyeSlash
                      className="absolute right-5 top-[50%] translate-y-[-50%] text-MainColor text-[20px] cursor-pointer"
                      onClick={() => {
                        setShowCurrent(!showCurrent);
                      }}
                    />
                  ) : (
                    <MdOutlineRemoveRedEye
                      className="absolute right-5 top-[50%] translate-y-[-50%] text-MainColor text-[20px] cursor-pointer"
                      onClick={() => {
                        setShowCurrent(!showCurrent);
                      }}
                    />
                  )}
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-[#F5F5F5] py-2.5 px-3 rounded-sm font-Poppins font-normal text-MainColor text-[16px] outline-none"
                    type={showNew ? "text" : "password"}
                    placeholder="New Password"
                  />
                  {showNew ? (
                    <FaRegEyeSlash
                      className="absolute right-5 top-[50%] translate-y-[-50%] text-MainColor text-[20px] cursor-pointer"
                      onClick={() => {
                        setShowNew(!showNew);
                      }}
                    />
                  ) : (
                    <MdOutlineRemoveRedEye
                      className="absolute right-5 top-[50%] translate-y-[-50%] text-MainColor text-[20px] cursor-pointer"
                      onClick={() => {
                        setShowNew(!showNew);
                      }}
                    />
                  )}
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-[#F5F5F5] py-2.5 px-3 rounded-sm font-Poppins font-normal text-MainColor text-[16px] outline-none"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm New Password"
                  />
                  {showConfirm ? (
                    <FaRegEyeSlash
                      className="absolute right-5 top-[50%] translate-y-[-50%] text-MainColor text-[20px] cursor-pointer"
                      onClick={() => {
                        setShowConfirm(!showConfirm);
                      }}
                    />
                  ) : (
                    <MdOutlineRemoveRedEye
                      className="absolute right-5 top-[50%] translate-y-[-50%] text-MainColor text-[20px] cursor-pointer"
                      onClick={() => {
                        setShowConfirm(!showConfirm);
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="w-full flex justify-end gap-2.5">
                <Button
                  type="button"
                  className="text-MainColor"
                  sx={{
                    backgroundColor: "transparent",
                    padding: "10px 30x",
                    color: "#000000",
                    fontWeight: "500",
                  }}
                  variant="contained"
                >
                  Cencel
                </Button>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#DB4444",
                    padding: "10px 30px",
                    "&:hover": {
                      backgroundColor: "#b33636",
                    },
                  }}
                  variant="contained"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
