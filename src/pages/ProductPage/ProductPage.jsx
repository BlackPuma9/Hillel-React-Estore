import React from "react";
import BaseTemplate from "../../templates/BasicTemplate";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/api";
import { Chip, Divider, Grid, Rating, Skeleton, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddProductToCartButton from "../../components/Button";

const ProductPage = () => {
  const { id } = useParams();

  const { data: product, isLoading: isProductLoading } =
    useGetProductByIdQuery(id);

  if (isProductLoading) {
    return (
      <>
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
      </>
    );
  }

  return (
    <BaseTemplate title="Product Page" id="product-page">
      <Divider sx={{ mt: 3 }}>
        <Chip label={product.id} size="small" />
      </Divider>

      <Box component="section">
        <Grid sx={{ mt: 3 }} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={product.image} height="50%" alt="product" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Chip label={product.category} color="success" />
            <br />
            <Rating
              sx={{ mt: 3, mb: 3 }}
              name="read-only"
              value={product.rating.rate}
              readOnly
            />

            <Typography variant="subtitle2" gutterBottom>
              {product.description}
            </Typography>

            <Divider sx={{ mt: 3, mb: 3 }} />

            <Stack direction="row" alignItems="center" spacing={4}>
              <Typography variant="h5" gutterBottom>
                Price: {product.price}
              </Typography>
              <AddProductToCartButton id={id} />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </BaseTemplate>
  );
};

export default ProductPage;
