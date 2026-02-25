import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShop } from "react-icons/ai";
import {
  FaDollarSign,
  FaInstagram,
  FaLinkedinIn,
  FaShippingFast,
} from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuShieldCheck } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function About() {
  return (
    <>
      <div className="">
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
              About
            </NavLink>
          </div>
          <div className="flex items-center justify-between gap-10 py-5">
            <div className="w-[40%]">
              <h1 className="font-Inter font-semibold text-[50px] leading-16 text-MainColor mb-5">
                Our Story
              </h1>
              <p className="font-Poppins font-nor,al text-[16px] leading-6.5 text-MainColor mb-5">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p className="font-Poppins font-nor,al text-[16px] leading-6.5 text-MainColor mb-5">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <div className=" w-[60%]">
              <img className="w-full" src="/imgs/aboutHeroImg.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <main>
        <section>
          <div className="container mx-auto py-10 flex items-center justify-between gap-5">
            <div className="w-67.5 h-57.5 border border-[#B3B3B3] content-center rounded-sm text-center transition-all duration-500 ease-in-out hover:bg-[#DB4444] hover:border-[#DB4444] group">
              <div className="w-18 h-18 rounded-full bg-MainColor border-9 border-[#C1C0C1] mx-auto flex items-center justify-center mb-3 transition-all duration-500 ease-in-out group-hover:bg-white">
                <AiOutlineShop className="text-white text-[30px] transition-all duration-500 ease-in-out group-hover:text-MainColor" />
              </div>
              <h3 className="font-Inter font-bold text-[32px] text-MainColor mb-1 transition-all duration-500 ease-in-out group-hover:text-white">
                10.5k{" "}
              </h3>
              <h6 className="font-Poppins font-normal text-[16px] text-MainColor transition-all duration-500 ease-in-out group-hover:text-white">
                Sallers active our site
              </h6>
            </div>
            <div className="w-67.5 h-57.5 border border-[#B3B3B3] content-center rounded-sm text-center transition-all duration-500 ease-in-out hover:bg-[#DB4444] hover:border-[#DB4444] group">
              <div className="w-18 h-18 rounded-full bg-MainColor border-9 border-[#C1C0C1] mx-auto flex items-center justify-center mb-3 transition-all duration-500 ease-in-out group-hover:bg-white">
                <FaDollarSign className="text-white text-[30px] transition-all duration-500 ease-in-out group-hover:text-MainColor" />
              </div>
              <h3 className="font-Inter font-bold text-[32px] text-MainColor mb-1 transition-all duration-500 ease-in-out group-hover:text-white">
                33k{" "}
              </h3>
              <h6 className="font-Poppins font-normal text-[16px] text-MainColor transition-all duration-500 ease-in-out group-hover:text-white">
                Mopnthly Produduct Sale
              </h6>
            </div>
            <div className="w-67.5 h-57.5 border border-[#B3B3B3] content-center rounded-sm text-center transition-all duration-500 ease-in-out hover:bg-[#DB4444] hover:border-[#DB4444] group">
              <div className="w-18 h-18 rounded-full bg-MainColor border-9 border-[#C1C0C1] mx-auto flex items-center justify-center mb-3 transition-all duration-500 ease-in-out group-hover:bg-white">
                <MdOutlineShoppingBag className="text-white text-[30px] transition-all duration-500 ease-in-out group-hover:text-MainColor" />
              </div>
              <h3 className="font-Inter font-bold text-[32px] text-MainColor mb-1 transition-all duration-500 ease-in-out group-hover:text-white">
                45.5k{" "}
              </h3>
              <h6 className="font-Poppins font-normal text-[16px] text-MainColor transition-all duration-500 ease-in-out group-hover:text-white">
                Customer active in our site
              </h6>
            </div>
            <div className="w-67.5 h-57.5 border border-[#B3B3B3] content-center rounded-sm text-center transition-all duration-500 ease-in-out hover:bg-[#DB4444] hover:border-[#DB4444] group">
              <div className="w-18 h-18 rounded-full bg-MainColor border-9 border-[#C1C0C1] mx-auto flex items-center justify-center mb-3 transition-all duration-500 ease-in-out group-hover:bg-white">
                <TbMoneybag className="text-white text-[30px] transition-all duration-500 ease-in-out group-hover:text-MainColor" />
              </div>
              <h3 className="font-Inter font-bold text-[32px] text-MainColor mb-1 transition-all duration-500 ease-in-out group-hover:text-white">
                25k{" "}
              </h3>
              <h6 className="font-Poppins font-normal text-[16px] text-MainColor transition-all duration-500 ease-in-out group-hover:text-white">
                Anual gross sale in our site
              </h6>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto py-10 ">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex items-center justify-between gap-10">
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg1.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Tom Cruise
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Founder & Chairman
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg2.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Emma Watson
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Managing Director
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg3.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Will Smith
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Product Designer
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-between gap-10">
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg1.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Tom Cruise
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Founder & Chairman
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg2.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Emma Watson
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Managing Director
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg3.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Will Smith
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Product Designer
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-between gap-10">
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg1.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Tom Cruise
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Founder & Chairman
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg2.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Emma Watson
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Managing Director
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg3.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Will Smith
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Product Designer
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-between gap-10">
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg1.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Tom Cruise
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Founder & Chairman
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg2.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Emma Watson
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Managing Director
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg3.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Will Smith
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Product Designer
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-between gap-10">
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg1.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Tom Cruise
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Founder & Chairman
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg2.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Emma Watson
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Managing Director
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                  <div className="w-92.5 ">
                    <div className="bg-[#F5F5F5] w-full flex justify-center pt-10 rounded-sm mb-5">
                      <img src="/imgs/aboutImg3.png" alt="" />
                    </div>
                    <h4 className="font-Inter font-medium text-[32px] text-MainColor mb-1">
                      Will Smith
                    </h4>
                    <h6 className="font-Poppins font-normal text-[16px] text-MainColor mb-2">
                      Product Designer
                    </h6>
                    <div className="flex items-center gap-5">
                      <FiTwitter className="text-MainColor text-[18px] cursor-pointer" />
                      <FaInstagram className="text-MainColor text-[18px] cursor-pointer" />
                      <FaLinkedinIn className="text-MainColor text-[18px] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="pb-10">
          <div className="container mx-auto py-20 flex item-center justify-around">
            <div className="text-center">
              <div className="w-18 h-18 flex items-center justify-center rounded-full border-10 border-[#C1C0C1] bg-MainColor mx-auto mb-5">
                <FaShippingFast className="text-white text-[28px]" />
              </div>
              <h4 className="font-Poppins font-semibold text-[20px] leading-7 text-MainColor mb-2">
                FREE AND FAST DELIVERY
              </h4>
              <p className="font-Poppins font-normal text-[14px] leading-5 text-MainColor">
                Free delivery for all orders over $140
              </p>
            </div>
            <div className="text-center">
              <div className="w-18 h-18 flex items-center justify-center rounded-full border-10 border-[#C1C0C1] bg-MainColor mx-auto mb-5">
                <RiCustomerService2Fill className="text-white text-[28px]" />
              </div>
              <h4 className="font-Poppins font-semibold text-[20px] leading-7 text-MainColor mb-2">
                24/7 CUSTOMER SERVICE
              </h4>
              <p className="font-Poppins font-normal text-[14px] leading-5 text-MainColor">
                Friendly 24/7 customer support
              </p>
            </div>
            <div className="text-center">
              <div className="w-18 h-18 flex items-center justify-center rounded-full border-10 border-[#C1C0C1] bg-MainColor mx-auto mb-5">
                <LuShieldCheck className="text-white text-[28px]" />
              </div>
              <h4 className="font-Poppins font-semibold text-[20px] leading-7 text-MainColor mb-2">
                MONEY BACK GUARANTEE
              </h4>
              <p className="font-Poppins font-normal text-[14px] leading-5 text-MainColor">
                We reurn money within 30 days
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
