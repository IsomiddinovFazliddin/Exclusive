import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  IoIosArrowForward,
  IoMdArrowRoundBack,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { FaRegHeart, FaShippingFast, FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import Button from "@mui/material/Button";
import Product from "../components/Product";
import { Link, useNavigate } from "react-router-dom";
import { LuShieldCheck } from "react-icons/lu";
import { DataContext } from "../App";
import Marquee from "react-fast-marquee";
import { Avatar, Box, Grid, Skeleton, Typography } from "@mui/material";
import { categoryFilter } from "../services";

function HomePage() {
  const { setProductModal, categoryData, productData, setCategoryTitle } =
    useContext(DataContext);
  const [visibleData, setVisibleData] = useState({
    flash: 4,
    best: 4,
    our: 8,
  });

  const timer = 10 * 24 * 60 * 60 * 1000;

  const getTargetTime = () => {
    const now = new Date().getTime();
    const saved = localStorage.getItem("flashTarget");

    if (saved && now < Number(saved)) {
      return Number(saved);
    } else {
      const newTarget = now + timer;
      localStorage.setItem("flashTarget", newTarget);
      return newTarget;
    }
  };

  const [targetTime, setTargetTime] = useState(getTargetTime());
  const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        const newTarget = now + timer;
        localStorage.setItem("flashTarget", newTarget);
        setTargetTime(newTarget);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const navigate = useNavigate();

  return (
    <>
      <div className="hero mb-15 ">
        <div className="container mx-auto flexStill items-start gap-10">
          <div className=" border-r border-[#00000042] pt-10 pr-2">
            {categoryData?.length > 0
              ? categoryData?.map((item, index) => {
                  return (
                    <Link
                      onClick={() => {
                        setCategoryTitle(item.title);
                      }}
                      key={index}
                      to={`/categorypage/${item.id}`}
                      className="flex items-center gap-5 w-full mb-5 p-1 rounded-sm transition-all duration-500 ease-in-out hover:bg-[#F5F5F5] pr-10 group"
                    >
                      <img className="w-8" src={item.image} alt="" />
                      <h5 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor flex items-center gap-3  cursor-pointer transition-all duration-500 ease-in-out group-hover:text-[#DB4444]">
                        {item.title} <IoIosArrowForward />
                      </h5>
                    </Link>
                  );
                })
              : [1, 1, 1, 1, 1].map((item, i) => {
                  return (
                    <Box
                      key={i}
                      sx={{ width: 300 }}
                      className="flex gap-3 items-center mb-5"
                    >
                      <Skeleton variant="circular">
                        <Avatar />
                      </Skeleton>
                      <Skeleton
                        animation="wave"
                        className="w-50 rounded-sm"
                        variant="caption"
                      />
                    </Box>
                  );
                })}
          </div>
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
            className="mySwiper flex-1 pt-10"
          >
            <SwiperSlide>
              <div className="flex-1 pt-10 h-85">
                <div className=" flex items-center justify-between gap-5 bg-MainColor h-full overflow-hidden">
                  <div className="p-15">
                    <div className="flex gap-4 items-center mb-5">
                      <img className="w-8" src="/imgs/apple.png" alt="" />
                      <h6 className="font-Poppins font-normal text-[#FAFAFA]">
                        iPhone 14 Series
                      </h6>
                    </div>
                    <h2 className="font-Inter font-semibold text-[48px] leading-15 text-[#FAFAFA] mb-3 ">
                      Up to 10% off Voucher
                    </h2>
                    <button className="font-Poppins font-medium text-[16px] leading-6 text-[#FAFAFA] flex items-center gap-2 py-1 border-b border-[#FAFAFA] cursor-pointer">
                      Shop Now <IoArrowForward className="text-[19px]  " />
                    </button>
                  </div>
                  <div className=" flex items-center justify-center h-full">
                    <img
                      className="w-full"
                      src="/imgs/homeHeroImg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-1 pt-10 h-85">
                <div className=" flex items-center justify-between gap-5 bg-MainColor h-full overflow-hidden">
                  <div className="p-15">
                    <div className="flex gap-4 items-center mb-5">
                      <img className="w-8" src="/imgs/apple.png" alt="" />
                      <h6 className="font-Poppins font-normal text-[#FAFAFA]">
                        iPhone 14 Series
                      </h6>
                    </div>
                    <h2 className="font-Inter font-semibold text-[48px] leading-15 text-[#FAFAFA] mb-3 ">
                      Up to 10% off Voucher
                    </h2>
                    <button className="font-Poppins font-medium text-[16px] leading-6 text-[#FAFAFA] flex items-center gap-2 py-1 border-b border-[#FAFAFA] cursor-pointer">
                      Shop Now <IoArrowForward className="text-[19px]  " />
                    </button>
                  </div>
                  <div className=" flex items-center justify-center h-full">
                    <img
                      className="w-full"
                      src="/imgs/homeHeroImg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-1 pt-10 h-85">
                <div className=" flex items-center justify-between gap-5 bg-MainColor h-full overflow-hidden">
                  <div className="p-15">
                    <div className="flex gap-4 items-center mb-5">
                      <img className="w-8" src="/imgs/apple.png" alt="" />
                      <h6 className="font-Poppins font-normal text-[#FAFAFA]">
                        iPhone 14 Series
                      </h6>
                    </div>
                    <h2 className="font-Inter font-semibold text-[48px] leading-15 text-[#FAFAFA] mb-3 ">
                      Up to 10% off Voucher
                    </h2>
                    <button className="font-Poppins font-medium text-[16px] leading-6 text-[#FAFAFA] flex items-center gap-2 py-1 border-b border-[#FAFAFA] cursor-pointer">
                      Shop Now <IoArrowForward className="text-[19px]  " />
                    </button>
                  </div>
                  <div className=" flex items-center justify-center h-full">
                    <img
                      className="w-full"
                      src="/imgs/homeHeroImg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-1 pt-10 h-85">
                <div className=" flex items-center justify-between gap-5 bg-MainColor h-full overflow-hidden">
                  <div className="p-15">
                    <div className="flex gap-4 items-center mb-5">
                      <img className="w-8" src="/imgs/apple.png" alt="" />
                      <h6 className="font-Poppins font-normal text-[#FAFAFA]">
                        iPhone 14 Series
                      </h6>
                    </div>
                    <h2 className="font-Inter font-semibold text-[48px] leading-15 text-[#FAFAFA] mb-3 ">
                      Up to 10% off Voucher
                    </h2>
                    <button className="font-Poppins font-medium text-[16px] leading-6 text-[#FAFAFA] flex items-center gap-2 py-1 border-b border-[#FAFAFA] cursor-pointer">
                      Shop Now <IoArrowForward className="text-[19px]  " />
                    </button>
                  </div>
                  <div className=" flex items-center justify-center h-full">
                    <img
                      className="w-full"
                      src="/imgs/homeHeroImg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex-1 pt-10 h-85">
                <div className=" flex items-center justify-between gap-5 bg-MainColor h-full overflow-hidden">
                  <div className="p-15">
                    <div className="flex gap-4 items-center mb-5">
                      <img className="w-8" src="/imgs/apple.png" alt="" />
                      <h6 className="font-Poppins font-normal text-[#FAFAFA]">
                        iPhone 14 Series
                      </h6>
                    </div>
                    <h2 className="font-Inter font-semibold text-[48px] leading-15 text-[#FAFAFA] mb-3 ">
                      Up to 10% off Voucher
                    </h2>
                    <button className="font-Poppins font-medium text-[16px] leading-6 text-[#FAFAFA] flex items-center gap-2 py-1 border-b border-[#FAFAFA] cursor-pointer">
                      Shop Now <IoArrowForward className="text-[19px]  " />
                    </button>
                  </div>
                  <div className=" flex items-center justify-center h-full">
                    <img
                      className="w-full"
                      src="/imgs/homeHeroImg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <main>
        <section className="mb-10">
          <div className="container mx-auto border-b border-[#B3B3B3] pb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
              <span className="font-Poppins font-semibold text-[16px] leading-5 text-[#DB4444]">
                Today's
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex items-end gap-15">
                <h2 className="font-Inter font-semibold text-[36px] leading-12 text-MainColor">
                  Flash Sales
                </h2>
                <div className="flex items-end gap-3">
                  <div className="">
                    <h6 className="font-Poppins font-medium text-[12px] text-MainColor mb-1">
                      Days
                    </h6>
                    <h2 className="font-Inter font-bold text-[32px] leading-7.5 text-MainColor">
                      {String(days).padStart(2, "0")}
                    </h2>
                  </div>
                  <span className="font-Poppins font-bold text-[20px] text-[#E07575]">
                    :
                  </span>
                  <div className="">
                    <h6 className="font-Poppins font-medium text-[12px] text-MainColor mb-1">
                      Hours
                    </h6>
                    <h2 className="font-Inter font-bold text-[32px] leading-7.5 text-MainColor">
                      {String(hours).padStart(2, "0")}
                    </h2>
                  </div>
                  <span className="font-Poppins font-bold text-[20px] text-[#E07575]">
                    :
                  </span>
                  <div className="">
                    <h6 className="font-Poppins font-medium text-[12px] text-MainColor mb-1">
                      Minutes
                    </h6>
                    <h2 className="font-Inter font-bold text-[32px] leading-7.5 text-MainColor">
                      {String(minutes).padStart(2, "0")}
                    </h2>
                  </div>
                  <span className="font-Poppins font-bold text-[20px] text-[#E07575]">
                    :
                  </span>
                  <div className="">
                    <h6 className="font-Poppins font-medium text-[12px] text-MainColor mb-1">
                      Seconds
                    </h6>
                    <h2 className="font-Inter font-bold text-[32px] leading-7.5 text-MainColor">
                      {String(seconds).padStart(2, "0")}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundBack />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundForward />
                </button>
              </div>
            </div>
            <div className="card flex items-center gap-7.5 flex-wrap py-8 justify-between">
              {productData?.length > 0
                ? productData?.slice(0, visibleData.flash).map((item) => {
                    return <Product key={item.id} item={item} />;
                  })
                : [1, 1, 1, 1].map((item, i) => {
                    return (
                      <Box key={i} sx={{ width: 290 }}>
                        <Skeleton
                          sx={{ bgcolor: "grey.900" }}
                          variant="rectangular"
                          width={290}
                          height={290}
                          button={50}
                        />
                        <Skeleton animation="wave" className="w-72.5" />
                        <Skeleton animation="wave" className="w-50" />
                        <Skeleton animation="wave" className="w-40" />
                      </Box>
                    );
                  })}
            </div>
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  setVisibleData((item) => ({
                    ...item,
                    flash:
                      item.flash >= productData?.length
                        ? 4
                        : productData?.length,
                  }));
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
                {visibleData.flash >= productData.length
                  ? "Show All Products"
                  : "View All Products"}
              </Button>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <div className="container mx-auto pb-2 border-b border-[#B3B3B3]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
              <span className="font-Poppins font-semibold text-[16px] leading-5 text-[#DB4444]">
                Categories
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex items-end gap-15">
                <h2 className="font-Inter font-semibold text-[36px] leading-12 text-MainColor">
                  Browse By Category
                </h2>
              </div>
              <div className="flex items-center gap-2.5">
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundBack />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundForward />
                </button>
              </div>
            </div>
            <div className="overflow-hidden py-8 flex justify-between">
              {categoryData?.length > 0 ? (
                <Marquee speed={60} gradient={false} pauseOnHover={true}>
                  {[...categoryData, ...categoryData].map((item, i) => (
                    <div
                      key={i}
                      className="w-[18vw] flex items-center justify-center"
                    >
                      <div
                        className="w-42.5 h-36.5 content-center border border-[#0000004D] rounded-sm hover:bg-[#DB4444] group transition-all duration-500"
                        onClick={() => {
                          setCategoryTitle(item.title);
                          navigate("/categorypage");
                        }}
                      >
                        <img
                          className="mx-auto w-14 h-14 mb-2"
                          src={item.image}
                          alt=""
                        />
                        <h4 className="text-center transition-all duration-500 group-hover:text-white">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </Marquee>
              ) : (
                [1, 1, 1, 1, 1].map((item, i) => {
                  return (
                    <Box key={i} sx={{ width: 170 }}>
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        variant="rectangular"
                        width={170}
                        height={146}
                      />
                    </Box>
                  );
                })
              )}
            </div>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto pb-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
              <span className="font-Poppins font-semibold text-[16px] leading-5 text-[#DB4444]">
                This Month
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex items-end gap-15">
                <h2 className="font-Inter font-semibold text-[36px] leading-12 text-MainColor">
                  Best Selling Products
                </h2>
              </div>
              <div className="flex items-center gap-2.5">
                <Button
                  onClick={() => {
                    setVisibleData((item) => ({
                      ...item,
                      best:
                        item.best >= productData?.length
                          ? 4
                          : productData?.length,
                    }));
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
                  {visibleData.best >= productData?.length
                    ? "Show All"
                    : "View All"}
                </Button>
              </div>
            </div>
            <div className="card flex items-center gap-7.5 flex-wrap py-8 justify-between">
              {productData?.length > 0
                ? productData?.slice(0, visibleData.best).map((item) => {
                    return <Product key={item.id} item={item} />;
                  })
                : [1, 1, 1, 1].map((item, i) => {
                    return (
                      <Box key={i} sx={{ width: 290 }}>
                        <Skeleton
                          sx={{ bgcolor: "grey.900" }}
                          variant="rectangular"
                          width={290}
                          height={290}
                          button={50}
                        />
                        <Skeleton animation="wave" className="w-72.5" />
                        <Skeleton animation="wave" className="w-50" />
                        <Skeleton animation="wave" className="w-40" />
                      </Box>
                    );
                  })}
            </div>
          </div>
        </section>
        <section className="p-15">
          <div className="container mx-auto flex items-center justify-between gap-10 p-10 bg-MainColor">
            <div className="w-1/2">
              <span className="font-Poppins block font-semibold text-[16px] text-[#00FF66] mb-5">
                Categories
              </span>
              <h1 className="font-Inter font-semibold text-[48px] leading-15 text-[#FAFAFA] mb-5">
                Enhance Your Music Experience
              </h1>
              <div className="flex items-center gap-5 mb-5">
                <div className="w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-center content-center">
                  <h3 className="font-Poppins font-semibold text-[16px] leading-5 text-MainColor">
                    23
                  </h3>
                  <span className="font-Poppins font-normal text-[11px] leading-4.5 text-MainColor">
                    Hours
                  </span>
                </div>
                <div className="w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-center content-center">
                  <h3 className="font-Poppins font-semibold text-[16px] leading-5 text-MainColor">
                    05
                  </h3>
                  <span className="font-Poppins font-normal text-[11px] leading-4.5 text-MainColor">
                    Days
                  </span>
                </div>
                <div className="w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-center content-center">
                  <h3 className="font-Poppins font-semibold text-[16px] leading-5 text-MainColor">
                    59
                  </h3>
                  <span className="font-Poppins font-normal text-[11px] leading-4.5 text-MainColor">
                    Minutes
                  </span>
                </div>
                <div className="w-15.5 h-15.5 rounded-full bg-[#FFFFFF] text-center content-center">
                  <h3 className="font-Poppins font-semibold text-[16px] leading-5 text-MainColor">
                    35
                  </h3>
                  <span className="font-Poppins font-normal text-[11px] leading-4.5 text-MainColor">
                    Seconds
                  </span>
                </div>
              </div>
              <Button
                sx={{
                  backgroundColor: "#00FF66",
                  padding: "10px 30px",
                  "&:hover": {
                    backgroundColor: "#00FF46",
                  },
                }}
                variant="contained"
                className="font-Poppins font-medium text-[16px] text-[#FAFAFA]"
              >
                Buy Now!
              </Button>
            </div>
            <div className="w-1/2 drop-shadow-[0_0_100px_#3C3C3C]">
              <img className="w-full" src="/imgs/musicImg.png" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
              <span className="font-Poppins font-semibold text-[16px] leading-5 text-[#DB4444]">
                Our Products
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex items-end gap-15">
                <h2 className="font-Inter font-semibold text-[36px] leading-12 text-MainColor">
                  Explore Our Products
                </h2>
              </div>
              <div className="flex items-center gap-2.5">
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundBack />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-MainColor text-[18px] cursor-pointer">
                  <IoMdArrowRoundForward />
                </button>
              </div>
            </div>
            <div className="card flex items-center gap-7.5 flex-wrap py-8 justify-between">
              {productData?.length > 0
                ? productData?.slice(0, visibleData.our).map((item) => {
                    return <Product key={item.id} item={item} />;
                  })
                : [1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => {
                    return (
                      <Box key={i} sx={{ width: 290 }}>
                        <Skeleton
                          sx={{ bgcolor: "grey.900" }}
                          variant="rectangular"
                          width={290}
                          height={290}
                          button={50}
                        />
                        <Skeleton animation="wave" className="w-72.5" />
                        <Skeleton animation="wave" className="w-50" />
                        <Skeleton animation="wave" className="w-40" />
                      </Box>
                    );
                  })}
            </div>
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  setVisibleData((item) => ({
                    ...item,
                    our:
                      item.our >= productData?.length ? 4 : productData?.length,
                  }));
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
                {visibleData.our >= productData?.length
                  ? "Show All Products"
                  : "View All Products"}
              </Button>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-10 rounded-sm bg-[#DB4444]"></div>
              <span className="font-Poppins font-semibold text-[16px] leading-5 text-[#DB4444]">
                Featured
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex items-end gap-15">
                <h2 className="font-Inter font-semibold text-[36px] leading-12 text-MainColor">
                  Explore Our Products
                </h2>
              </div>
            </div>
            <div className="card py-8 flex justify-between gap-8">
              <div className="w-1/2 h-150 relative border bg-MainColor group overflow-hidden flex justify-center items-end">
                <img src="/imgs/arrivalImg1.png" alt="" />
                <div className="absolute -bottom-full left-8 w-60 transition-all duration-300 ease-in-out group-hover:bottom-8">
                  <h4 className="font-Inter font-semibold text-[24px] leading-6 text-[#FAFAFA] mb-3">
                    PlayStation 5
                  </h4>
                  <p className="font-Poppins font-normal text-[14px] leading-5 text-[#FAFAFA] mb-5">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <button className="font-Poppins font-medium text-[16px] leading-6 text-white border-b border-[#FFFFFF] cursor-pointer">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="w-1/2 grid gap-8">
                <div className="w-full h-71 border relative bg-[#0D0D0D] group overflow-hidden flex justify-end">
                  <img src="/imgs/arrivalImg2.png" alt="" />
                  <div className="absolute -bottom-full left-8 w-60 transition-all duration-300 ease-in-out group-hover:bottom-8">
                    <h4 className="font-Inter font-semibold text-[24px] leading-6 text-[#FAFAFA] mb-3">
                      Women’s Collections
                    </h4>
                    <p className="font-Poppins font-normal text-[14px] leading-5 text-[#FAFAFA] mb-5">
                      Featured woman collections that give you another vibe.
                    </p>
                    <button className="font-Poppins font-medium text-[16px] leading-6 text-white border-b border-[#FFFFFF] cursor-pointer">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="flex justify-between gap-8 ">
                  <div className="w-1/2 h-71 border bg-[#0C0C0C] relative group overflow-hidden flex items-center justify-center">
                    <img src="/imgs/arrivalImg3.png" alt="" />
                    <div className="absolute -bottom-full left-8 w-60 transition-all duration-300 ease-in-out group-hover:bottom-8">
                      <h4 className="font-Inter font-semibold text-[24px] leading-6 text-[#FAFAFA] mb-3">
                        Speakers
                      </h4>
                      <p className="font-Poppins font-normal text-[14px] leading-5 text-[#FAFAFA] mb-5">
                        Amazon wireless speakers
                      </p>
                      <button className="font-Poppins font-medium text-[16px] leading-6 text-white border-b border-[#FFFFFF] cursor-pointer">
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 h-71 border bg-[#0C0C0C] relative group overflow-hidden flex items-center justify-center">
                    <img src="/imgs/arrivalImg4.png" alt="" />
                    <div className="absolute -bottom-full left-8 w-60 transition-all duration-300 ease-in-out group-hover:bottom-8">
                      <h4 className="font-Inter font-semibold text-[24px] leading-6 text-[#FAFAFA] mb-3">
                        Perfume
                      </h4>
                      <p className="font-Poppins font-normal text-[14px] leading-5 text-[#FAFAFA] mb-5">
                        GUCCI INTENSE OUD EDP
                      </p>
                      <button className="font-Poppins font-medium text-[16px] leading-6 text-white border-b border-[#FFFFFF] cursor-pointer">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-10">
          <div className="container mx-auto py-5 flex item-center justify-around">
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

export default HomePage;
