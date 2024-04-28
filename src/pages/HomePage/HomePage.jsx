import React from "react";
import BaseTemplate from "../../templates/BasicTemplate";
import { Chip, Divider, Grid, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import SideMenu from "../../components/Menu";
import Slider from "../../components/Slider";
import ProductList from "../../components/ProductList";
import { useGetAllProductsQuery, useGetCategoriesQuery } from "../../store/api";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const { data: products, isLoading: isProductsLoading } =
    useGetAllProductsQuery();

  const cartProducts = useSelector((state) => state.cart.value);

  return (
    <BaseTemplate title="home-page">
      <Grid
        container
        spacing={1}
        sx={{ backgroundColor: "#379424", marginY: "1rem", pr: 1, pb: 2 }}
      >
        <Grid item xs={12} sm={12} md={4}>
          <SideMenu categories={categories} isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Stack spacing={1}>
            <Item>
              {cartProducts
                ? "You have some item in your bucket. Check it out!"
                : "No products in the cart bin. Feel free to add!"}
            </Item>
            <Slider products={products} isProductsLoading={isProductsLoading} />
          </Stack>
        </Grid>
      </Grid>

      <Divider>
        <Chip label="All Products" size="small" />
      </Divider>

      <ProductList products={products} isProductsLoading={isProductsLoading} />
    </BaseTemplate>
  );
};

export default HomePage;
