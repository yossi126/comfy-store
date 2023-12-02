import React from "react";
import {
  Filters,
  ProductsContainer,
  PaginationContainer,
} from "../components/index";
import { customFetch } from "../utils/index";

const url = "/products";

export const loader = async ({ request }) => {
  // console.log(request);
  // console.log(request.url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch(url, { params });

  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
