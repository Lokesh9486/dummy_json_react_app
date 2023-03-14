import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: (data) => {
        if (!data) {
          return "/products";
        } else {
          return `/products/category/${data}`;
        }
      },
    }),
    userComments: builder.query({
      query: () => "/comments",
    }),
    limitProduct:builder.query({
      query:()=>"/products?limit=10&skip=10"
    }),
    singleProduct:builder.query({
      query:(data)=>{return `/products/${data}`;}
    })
  }),
});

export const { useAllProductsQuery, useUserCommentsQuery,useLimitProductQuery,useSingleProductQuery } = ProductApi;
