import React from "react";
import { CgCopyright } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-MainColor">
      <div className="container mx-auto pt-10">
        <div className="card flex justify-between mb-10 gap-7">
          <div className="w-[25%]">
            <h4 className="font-Poppins font-medium text-[20px] leading-7 text-white mb-5">
              Exclusive
            </h4>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              Subscribe
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              Get 10% off your first order
            </h5>
            <form action="" className="relative">
              <input
                className="w-full border border-[#FAFAFA] rounded-sm outline-none font-Poppins font-normal text-[16px] text-[#FAFAFA] py-2 px-4 pr-9"
                type="email"
                placeholder="Enter your email"
              />
              <IoSend className="text-white absolute right-3 top-[50%] translate-y-[-50%]" />
            </form>
          </div>
          <div className="w-[25%]">
            <h4 className="font-Poppins font-medium text-[20px] leading-7 text-white mb-5">
              Support
            </h4>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              exclusive@gmail.com
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              +88015-88888-9999
            </h5>
          </div>
          <div className="w-[25%]">
            <h4 className="font-Poppins font-medium text-[20px] leading-7 text-white mb-5">
              Account
            </h4>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              My Account
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              Login / Register
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              Cart
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              Wishlist
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              Shop
            </h5>
          </div>
          <div className="w-[25%]">
            <h4 className="font-Poppins font-medium text-[20px] leading-7 text-white mb-5">
              Quick Link
            </h4>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              Privacy Policy
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              Terms Of Use
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              FAQ
            </h5>
            <h5 className="font-Poppins font-normal text-[16px] leading-6 text-[#FAFAFA] mb-2.5">
              Contact
            </h5>
          </div>
          <div className="w-[25%]">
            <h4 className="font-Poppins font-medium text-[20px] leading-7 text-white mb-5">
              Download App
            </h4>
            <h6 className="font-Poppins font-normal text-[12px] leading-6 text-[#FAFAFA] mb-2.5">
              Save $3 with App New User Only
            </h6>
            <img src="/imgs/footerImg.png" alt="" />
            <div className="flex items-center gap-5 mt-5">
              <FaFacebookF className="text-white text-[18px] cursor-pointer" />
              <FiTwitter className="text-white text-[18px] cursor-pointer" />
              <FaInstagram className="text-white text-[18px] cursor-pointer" />
              <FaLinkedinIn className="text-white text-[18px] cursor-pointer" />
            </div>
          </div>
        </div>
        <hr className="border-0.5 border-[#141414]" />
        <div className="flex justify-center py-2.5">
          <h6 className="flex items-center gap-1 font-Poppins font-normal text-[14px] leading-6 text-[#353535] mb-2.5">
            <CgCopyright className="text-[18px]" /> Copyright Rimel 2022. All
            right reserved
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
