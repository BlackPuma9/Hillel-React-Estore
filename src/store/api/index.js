import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../utils/API_CONFIG";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),

  endpoints: (build) => ({
    getCategories: build.query({
      query: () => "products/categories",
    }),

    getAllProducts: build.query({
      query: () => "products",
    }),

    getCategoryProduct: build.query({
      query: (category) => `products/category/${category}`,
    }),

    getProductById: build.query({
      query: (productId = 1) => `products/${productId}`,
    }),

    createNewCart: build.mutation({
      query: (data) => ({
        url: "carts",
        method: "POST",
        body: {
          userId: data.id,
          date: new Date().toJSON().slice(0, 10),
          products: data,
        },
      }),
    }),

    updateCartProducts: build.mutation({
      query({ id, products }) {
        return {
          url: `carts/${id}`,
          method: "PUT",
          body: {
            date: new Date().toJSON().slice(0, 10),
            products,
          },
        };
      },
    }),

    getCartById: build.query({
      query: (userCartId = 1) => `carts/${userCartId}`,
    }),

    deleteCart: build.mutation({
      query(id) {
        return {
          url: `carts/${id}`,
          method: "DELETE",
        };
      },
    }),

    login: build.mutation({
      query: ({ username, password }) => ({
        url: "auth/login",
        method: "POST",
        body: { username, password },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetAllProductsQuery,
  useGetCategoryProductQuery,
  useGetProductByIdQuery,
  useCreateNewCartMutation,
  useUpdateCartProductsMutation,
  useGetCartByIdQuery,
  useDeleteCartMutation,
  useLoginMutation,
} = api;
