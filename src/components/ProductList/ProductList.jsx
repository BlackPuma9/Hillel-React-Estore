import Box from "@mui/material/Box";
import Product from "../Product";
import { Grid, Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ProductList = ({ products, isProductsLoading }) => {
  const initialSearchInputState = useSelector(
    (state) => state.searchInput.value,
  );

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (isProductsLoading) {
      return;
    }
    const inputData = initialSearchInputState.split(" ");

    const indices = products.reduce((acc, item, index) => {
      const result = inputData.some((word) =>
        item.title.toLowerCase().includes(word.toLowerCase()),
      );
      if (result) {
        acc.push(index);
      }
      return acc;
    }, []);

    indices.length
      ? setFilteredProducts(indices.map((index) => products[index]))
      : setFilteredProducts([]);
  }, [initialSearchInputState, products, isProductsLoading]);

  if (isProductsLoading) {
    return (
      <>
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
      </>
    );
  }

  const data = filteredProducts.length ? filteredProducts : products;

  if (!filteredProducts.length && initialSearchInputState.length) {
    return (
      <Box sx={{ mt: 1 }}>
        <Typography variant="h1" align="center">
          Product not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 5 }}>
      <Grid container spacing={2}>
        {data.map((product) => (
          <Grid item xs={12} sm={4} md={3} key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              rating={product.rating.rate}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
