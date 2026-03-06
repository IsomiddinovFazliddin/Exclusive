import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import Product from "../components/Product";
import { Box, Skeleton } from "@mui/material";

function Search() {
  const { productData } = useContext(DataContext);
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="container mx-auto py-8 flex">
        <div className="card flex items-center gap-7.5 flex-wrap py-8 justify-between">
          {productData?.length > 0
            ? productData?.map((item, i) => {
                return <Product item={item} key={i} />;
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
    </>
  );
}

export default Search;
