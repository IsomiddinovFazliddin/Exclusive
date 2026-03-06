import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Product from "../components/Product";
import { DataContext } from "../App";
import { categoryFilter } from "../services";

function CategoryPage() {
  const { id } = useParams();
  const { productData, categoryTitle } = useContext(DataContext);
  const [filterCategory, setFilterCategory] = useState(null);

  useEffect(() => {
    categoryFilter(id).then((data) => {
      setFilterCategory(data);
    });
  }, []);

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex items-center gap-2 mb-5">
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
        <h2 className="font-Inter font-medium text-[18px] text-MainColor">
          {categoryTitle}
        </h2>
        <div className="card flex items-center gap-10 flex-wrap py-8">
          {filterCategory?.map((item, i) => {
            return <Product item={item} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
