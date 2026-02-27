import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { registerFunction } from "../services";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const [showPassword, setSHowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  window.scrollTo({
    top: "0px",
    behavior: "smooth",
  });

  return (
    <>
      <div className="py-10">
        <div className="container mx-auto flex items-center justify-between gap-10">
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]  w-[60%] h-150 bg-[#CBE4E8] rounded-sm">
            <img className="w-full h-full" src="/imgs/loginImg.png" alt="" />
          </div>
          <div className="w-[40%] pl-10">
            <h2 className="font-Inter font-medium text-[36px] leading-7.5 tracking-[4%] text-MainColor mb-5 ">
              Create an account
            </h2>
            <h4 className="font-Poppins font-normal text-[16px] leading-6  text-MainColor mb-5">
              Enter your details below
            </h4>
            <form
              action=""
              className="grid gap-5 mb-5"
              onSubmit={(e) => {
                e.preventDefault();
                registerFunction(name, email, password).then((info) => {
                  console.log(info);
                  if (
                    info?.email_or_phone ==
                    "Bu elektron pochta manzili allaqachon ro'yxatdan o'tgan."
                  ) {
                    toast.info("Elektron pochta allaqachon mavjud..", {
                      pauseOnHover: false,
                    });
                  } else if (
                    info?.message ==
                    "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tkazildi."
                  ) {
                    navigate("/login", {
                      state: {
                        message: "Ro'yxatdan muvaffaqiyatli o'tdingiz",
                      },
                    });
                  }
                });
              }}
            >
              <input
                onInput={(e) => {
                  setName(e.target.value);
                }}
                className="font-Poppins font-normal text-[16px] leading-6 text-MainColor border-b border-[#808080] pb-1 outline-none"
                type="text"
                placeholder="Name"
                required
              />
              <input
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
                className="font-Poppins font-normal text-[16px] leading-6 text-MainColor border-b border-[#808080] pb-1 outline-none"
                type="email"
                placeholder="Email or Phone Number"
                required
              />
              <div className="relative">
                <input
                  onInput={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full font-Poppins font-normal text-[16px] leading-6 text-MainColor border-b border-[#808080] pb-1 outline-none"
                  placeholder="Password"
                  required
                  type={showPassword ? "text" : "password"}
                />
                {showPassword ? (
                  <FaRegEyeSlash
                    className="absolute right-5 top-[50%] translate-y-[-50%] text-MainColor cursor-pointer"
                    onClick={() => {
                      setSHowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <MdOutlineRemoveRedEye
                    className="absolute right-5 top-[50%] translate-y-[-50%] text-MainColor cursor-pointer"
                    onClick={() => {
                      setSHowPassword(!showPassword);
                    }}
                  />
                )}
              </div>
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
                Create Account
              </Button>
            </form>
            <button className="flex items-center justify-center gap-2 w-full mb-5 border border-[#999999] rounded-sm py-2.5 px-5 font-Poppins font-normal text-[16px] leading-6 text-MainColor cursor-pointer">
              <FcGoogle className="text-[20px]" />
              Sign up with Google
            </button>
            <div className="flex gap-4 justify-center items-center">
              <h5 className="font-Poppins font-normal text-[16px] leading-6 text-MainColor">
                Already have account?
              </h5>
              <Link
                to={"/login"}
                className="font-Poppins font-medium text-[16px] leading-6 text-MainColor border-b border-[#4D4D4D] cursor-pointer"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
