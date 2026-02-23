import { Button } from "@mui/material";
import React from "react";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <>
      <div className="py-10">
        <div className="container mx-auto flex items-center justify-between gap-10">
          <div className="w-[60%] h-150 bg-[#CBE4E8] rounded-sm"></div>
          <div className="w-[40%] pl-10">
            <h2 className="font-Inter font-medium text-[36px] leading-7.5 tracking-[4%] text-MainColor mb-5">
              Log in to Exclusive
            </h2>
            <h4 className="font-Poppins font-normal text-[16px] leading-6  text-MainColor mb-5">
              Enter your details below
            </h4>
            <form action="" className="grid gap-5 mb-5">
              <input
                className="font-Poppins font-normal text-[16px] leading-6 text-MainColor border-b border-[#808080] pb-1 outline-none"
                type="email"
                placeholder="Email or Phone Number"
                required
              />
              <input
                className="font-Poppins font-normal text-[16px] leading-6 text-MainColor border-b border-[#808080] pb-1 outline-none"
                type="password"
                placeholder="Password"
                required
              />
              <div className="flex items-center justify-between gap-5">
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
                Log In
              </Button>
              <span className="font-Poppins font-normal text-[16px] leading-6 text-[#DB4444] cursor-pointer">Forget Password?</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
