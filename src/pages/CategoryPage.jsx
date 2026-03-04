import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Product from "../components/Product";
import { DataContext } from "../App";
import { ListItemButton } from "@mui/material";

function CategoryPage() {
  const { productData, categoryTitle } = useContext(DataContext);

  const categoryFilter = productData?.filter((item) => {
    return item.category.title == categoryTitle;
  });

  return (
    <>
      <div className="container mx-auto py-8">
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
            to={"/categorypage"}
            className={({ isActive }) => {
              `text-[#808080] font-Poppins font-normal text-[14px] cursor-pointer`;
            }}
          >
            Category
          </NavLink>
        </div>
        <div className="card flex items-center gap-10 flex-wrap py-8">
          {categoryFilter?.map((item) => {
            return <Product item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
