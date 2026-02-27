import { Button } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  window.scrollTo({
    top: "0px",
    behavior: "smooth",
  });
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
            404 Error
          </NavLink>
        </div>
        <div className="w-full h-[70vh] text-center content-center">
          <h1 className="font-Inter font-medium text-[110px] leading-28.75 tracking-[3%] text-MainColor mb-5">
            404 Not Found
          </h1>
          <p className="font-Poppins font-normal text-[16px] leading-6 text-MainColor mb-10">
            Your visited page not found. You may go home page.
          </p>
          <Button
            onClick={() => {
              navigate("/");
            }}
            sx={{
              backgroundColor: "#DB4444",
              padding: "12px 30px",
              "&:hover": {
                backgroundColor: "#b33636",
              },
            }}
            variant="contained"
          >
            Back to home page
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Error;
