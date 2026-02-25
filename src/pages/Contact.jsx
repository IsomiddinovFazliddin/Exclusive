import { Button } from "@mui/material";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div>
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
            Contact
          </NavLink>
        </div>
        <div className="flex gap-10 py-10">
          <div className="p-8 shadow-md w-85 rounded-sm">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#DB4444] flex justify-center items-center">
                <IoCallOutline className="text-white text-[20px]" />
              </div>
              <h4 className="font-Poppins font-medium text-[16px] text-MainColor">
                Call To Us
              </h4>
            </div>
            <h6 className="font-Poppins font-normal text-[14px] text-MainColor mb-5">
              We are available 24/7, 7 days a week.
            </h6>
            <h6 className="font-Poppins font-normal text-[14px] text-MainColor mb-5">
              Phone: +8801611112222
            </h6>
            <hr className="mb-5 border-0.5 border-[#808080]" />
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#DB4444] flex justify-center items-center">
                <MdOutlineMailOutline className="text-white text-[20px]" />
              </div>
              <h4 className="font-Poppins font-medium text-[16px] text-MainColor">
                Write To US
              </h4>
            </div>
            <h6 className="font-Poppins font-normal text-[14px] text-MainColor mb-5">
              Fill out our form and we will contact you within 24 hours.
            </h6>
            <h6 className="font-Poppins font-normal text-[14px] text-MainColor mb-5">
              Emails: customer@exclusive.com
            </h6>
            <h6 className="font-Poppins font-normal text-[14px] text-MainColor mb-5">
              Emails: support@exclusive.com
            </h6>
          </div>
          <div className="p-8 shadow-md flex-1 rounded-sm">
            <form className="" action="">
              <div className="flex gap-5 justify-between mb-5">
                <input
                  className="font-Poppins font-normal text-[16px] text-MainColor  bg-[#F5F5F5] outline-none py-2.5 px-4 w-[33%] rounded-sm"
                  type="text"
                  placeholder="Your Name *"
                  required
                />
                <input
                  className="font-Poppins font-normal text-[16px] text-MainColor  bg-[#F5F5F5] outline-none py-2.5 px-4 w-[33%] rounded-sm"
                  type="email"
                  placeholder="Your Email *"
                  required
                />
                <input
                  className="font-Poppins font-normal text-[16px] text-MainColor  bg-[#F5F5F5] outline-none py-2.5 px-4 w-[33%] rounded-sm"
                  type="number"
                  placeholder="Your Phone *"
                  required
                />
              </div>
              <textarea
                className="font-Poppins font-normal text-[16px] text-MainColor  bg-[#F5F5F5] outline-none py-2.5 px-4 w-full h-50 mb-5 rounded-sm"
                name=""
                id=""
                placeholder="Your Massage"
              ></textarea>
              <div className="flex justify-end">
                <Button
                type="submit"
                  sx={{
                    backgroundColor: "#DB4444",
                    padding: "12px 30px",
                    "&:hover": {
                      backgroundColor: "#b33636",
                    },
                  }}
                  variant="contained"
                >
                  Send Massage
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
