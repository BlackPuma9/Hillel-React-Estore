import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Skeleton, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Slider = ({ products, isProductsLoading }) => {
  if (isProductsLoading)
    return (
      <>
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
      </>
    );

  return (
    <Carousel>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </Carousel>
  );
};

const Item = ({ product }) => {
  const { image, title, id } = product;

  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ pl: 4 }}
        >
          <Grid item xs={6}>
            <img
              srcSet={`${image}?w=242&h=121&fit=crop&auto=format&dpr=2 2x`}
              src={`${image}?w=242&h=121&fit=crop&auto=format`}
              height={250}
              alt={title}
            />
          </Grid>
          <Grid item xs={6}>
            <h2>{title}</h2>

            <Link to={`/product/${id}`}>
              <Button className="CheckButton">Check it out!</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Slider;
