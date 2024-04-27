import React from "react";
import BasicTemplate from "../../templates/BasicTemplate";
import ProductList from "../../components/ProductList";
import { useGetCategoryProductQuery } from "../../store/api";
import { useParams } from "react-router-dom";
import { Chip, Divider } from "@mui/material";
const CategoryPage = () => {
  const { category } = useParams();

  const { data: products, isLoading: isProductsLoading } =
    useGetCategoryProductQuery(category);

  return (
    <div>
      <BasicTemplate title="category page">
        <Divider>
          <Chip label={category} size="small" />
        </Divider>
        <ProductList
          products={products}
          isProductsLoading={isProductsLoading}
        />
      </BasicTemplate>
    </div>
  );
};

export default CategoryPage;
