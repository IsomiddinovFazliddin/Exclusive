import { Button } from "@mui/material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../App";
import { baseUrl } from "../services/config";
import { toast } from "react-toastify";
import { cartItem } from "../services";

function CheckOut() {
  const { cartData, setCartData } = useContext(DataContext);

  const subtotal = cartData?.cart_items?.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  console.log(cartData);

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex items-center gap-2">
          <NavLink
            to={"/"}
            className="text-[#808080] font-Poppins font-normal text-[14px] cursor-pointer hover:text-MainColor"
          >
            Account
          </NavLink>
          <span className="text-[#808080] font-Poppins font-normal text-[14px] ">
            /
          </span>
          <NavLink
            to={""}
            className="text-[#808080] font-Poppins font-normal text-[14px] cursor-pointer hover:text-MainColor"
          >
            My Account
          </NavLink>
          <span className="text-[#808080] font-Poppins font-normal text-[14px] ">
            /
          </span>
          <NavLink
            to={""}
            className="text-[#808080] font-Poppins font-normal text-[14px] cursor-pointer hover:text-MainColor"
          >
            Product
          </NavLink>
          <span className="text-[#808080] font-Poppins font-normal text-[14px] ">
            /
          </span>
          <NavLink
            to={""}
            className="text-[#808080] font-Poppins font-normal text-[14px] cursor-pointer hover:text-MainColor"
          >
            View Cart
          </NavLink>
          <span className="text-[#808080] font-Poppins font-normal text-[14px] ">
            /
          </span>
          <NavLink
            to={""}
            className={({ isActive }) => {
              `text-[#808080] font-Poppins font-normal text-[14px] cursor-pointer`;
            }}
          >
            CheckOut
          </NavLink>
        </div>
        <h2 className="font-Inter font-medium text-[34px] tracking-[4%] text-MainColor mt-5">
          Billing Details
        </h2>
        <div className="flex gap-20 py-5 justify-between">
          <form
            action=""
            className="w-[40%]"
            id="myForm"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Buyurtma berildi");
            }}
          >
            <label
              className="font-Poppins font-normal text-[16px] text-[#999999] mb-2 flex"
              htmlFor=""
            >
              First Name*
            </label>
            <input
              className="w-full bg-[#F5F5F5] font-Poppins font-normal text-[16px] py-2 px-4 rounded-sm outline-none text-MainColor mb-5"
              type="text"
              required
            />
            <label
              className="font-Poppins font-normal text-[16px] text-[#999999] mb-2 flex"
              htmlFor=""
            >
              Company Name
            </label>
            <input
              className="w-full bg-[#F5F5F5] font-Poppins font-normal text-[16px] py-2 px-4 rounded-sm outline-none text-MainColor mb-5"
              type="text"
              required
            />
            <label
              className="font-Poppins font-normal text-[16px] text-[#999999] mb-2 flex"
              htmlFor=""
            >
              Street Address*
            </label>
            <input
              className="w-full bg-[#F5F5F5] font-Poppins font-normal text-[16px] py-2 px-4 rounded-sm outline-none text-MainColor mb-5"
              type="text"
              required
            />
            <label
              className="font-Poppins font-normal text-[16px] text-[#999999] mb-2 flex"
              htmlFor=""
            >
              Apartment, floor, etc. (optional)
            </label>
            <input
              className="w-full bg-[#F5F5F5] font-Poppins font-normal text-[16px] py-2 px-4 rounded-sm outline-none text-MainColor mb-5"
              type="text"
            />
            <label
              className="font-Poppins font-normal text-[16px] text-[#999999] mb-2 flex"
              htmlFor=""
            >
              Town/City*
            </label>
            <input
              className="w-full bg-[#F5F5F5] font-Poppins font-normal text-[16px] py-2 px-4 rounded-sm outline-none text-MainColor mb-5"
              type="text"
            />
            <label
              className="font-Poppins font-normal text-[16px] text-[#999999] mb-2 flex"
              htmlFor=""
            >
              Phone Number*
            </label>
            <input
              className="w-full bg-[#F5F5F5] font-Poppins font-normal text-[16px] py-2 px-4 rounded-sm outline-none text-MainColor mb-5"
              type="number"
              required
            />
            <label
              className="font-Poppins font-normal text-[16px] text-[#999999] mb-2 flex"
              htmlFor=""
            >
              Email Address*
            </label>
            <input
              className="w-full bg-[#F5F5F5] font-Poppins font-normal text-[16px] py-2 px-4 rounded-sm outline-none text-MainColor mb-5"
              type="email"
              required
            />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input type="checkbox" name="check" className="peer hidden" />

                <div
                  className="
                    w-6 h-6
                    rounded-md
                    bg-white
                    border border-gray-300
                    flex items-center justify-center
                    transition-all duration-200
                    peer-checked:bg-[#DB4444]
                    peer-checked:border-[#DB4444]
                    "
                >
                  <svg
                    className="
                        w-4.5 h-4.5
                        text-white
                        opacity-100
                        peer-checked:opacity-100
                        transition-opacity duration-200
                    "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </label>
              <h4 className="font-Poppins font-normal text-[16px] text-MainColor">
                Save this information for faster check-out next time
              </h4>
            </div>
          </form>
          <div className="w-[40%] ">
            <div className="h-[30vh] overflow-y-auto mb-5 scrollbar-none">
              {cartData?.cart_items?.length > 0 ? (
                cartData?.cart_items?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between mb-5 shadow-md"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14">
                          <img
                            className="w-full h-full"
                            src={`${baseUrl}${item?.pictures?.[0].file}`}
                            alt=""
                          />
                        </div>
                        <h5 className="font-Poppins font-normal text-[16px] text-MainColor">
                          {item?.title.slice(0, 24)}
                        </h5>
                      </div>
                      <h4 className="font-Poppins font-normal text-[16px] text-MainColor">
                        {item?.price * item?.quantity}
                      </h4>
                    </div>
                  );
                })
              ) : (
                <div className="flex items-center justify-center h-full flex-col">
                  <img
                    className="h-[90%]"
                    src="https://cdn.dribbble.com/userupload/32744211/file/original-888ecc665e715aa9433dcc0e35c0078c.gif"
                    alt=""
                  />
                  <h2 className="font-Poppins font-medium text-[14px]">
                    Mahsulot mavjud emas
                  </h2>
                </div>
              )}
            </div>
            <div className="pb-4 border-b-2 border-[#999999] flex justify-between mb-4">
              <h4 className="font-Poppins font-normal text-[16px] text-MainColor">
                Subtotal:
              </h4>
              <h4 className="font-Poppins font-normal text-[16px] text-MainColor">
                {subtotal}
              </h4>
            </div>
            <div className="pb-4 border-b-2 border-[#999999] flex justify-between mb-4">
              <h4 className="font-Poppins font-normal text-[16px] text-MainColor">
                Shipping:
              </h4>
              <h4 className="font-Poppins font-normal text-[16px] text-MainColor">
                Free
              </h4>
            </div>
            <div className="pb-4 flex justify-between mb-4">
              <h4 className="font-Poppins font-normal text-[16px] text-MainColor">
                Total:
              </h4>
              <h4 className="font-Poppins font-normal text-[16px] text-MainColor">
                {subtotal}
              </h4>
            </div>
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-5 ">
                <input
                  type="radio"
                  form="myForm"
                  className="w-6 h-6"
                  required
                  name="payment"
                  value="bank"
                />
                <h4 className="font-Poppins font-normal text-[16px] text-MainColor">
                  Bank
                </h4>
              </div>
              <img src="/imgs/checkOut.png" alt="" />
            </div>
            <div className="flex items-center gap-5 mb-5">
              <input
                type="radio"
                form="myForm"
                className="w-6 h-6"
                required
                name="payment"
                value="cash"
              />
              <h4 className="font-Poppins font-normal text-[16px] text-MainColor">
                Cash on delivery
              </h4>
            </div>
            <form
              className="flex gap-3 mb-5"
              action=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Coupon Code"
                className="font-Poppins font-normal text-[16px] leading-6 text-MainColor border border-[#00000080] rounded-sm outline-none py-2.5 px-5 w-[60%]"
              />
              <Button
                className="w-[40%]"
                type="submit"
                sx={{
                  backgroundColor: "#DB4444",
                  padding: "5.5px 30px",
                  "&:hover": {
                    backgroundColor: "#b33636",
                  },
                }}
                variant="contained"
              >
                Apply Coupon
              </Button>
            </form>
            <Button
              type="submit"
              form="myForm"
              sx={{
                backgroundColor: "#DB4444",
                padding: "10px 30px",
                "&:hover": {
                  backgroundColor: "#b33636",
                },
              }}
              variant="contained"
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
