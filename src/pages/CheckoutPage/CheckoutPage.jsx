import React, { useState } from "react";
import CheckoutTemplate from "../../templates/CheckoutTemplate";
import { Button, Chip, Divider, Grid, Skeleton, Stack } from "@mui/material";
import {
  useGetAllProductsQuery,
  useDeleteCartMutation,
  useUpdateCartProductsMutation,
} from "../../store/api";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import {
  clearCartFromLocalStorage,
  getCartIdFromLocalStorage,
  getProductFromLocalStorageCart,
  setProductsToCart,
} from "../../utils/helpers/cartLocalStorage";

const CheckoutPage = () => {
  const cartId = getCartIdFromLocalStorage();
  const cartData = getProductFromLocalStorageCart();

  const [updateCart] = useUpdateCartProductsMutation();

  const { data: products, isLoading: isProductsLoading } =
    useGetAllProductsQuery();

  const [deleteCart] = useDeleteCartMutation();
  const deleteAllHandler = () => {
    deleteCart(cartId);
    clearCartFromLocalStorage();
  };

  const deleteProductHandler = (id) => {
    console.log(id)
    const updatedProducts = cartData.filter(
      (product) => product.productId !== id,
    );
    setProductsToCart(updatedProducts);
    setQuantityCount(updatedProducts);
  };

  const [quantityCount, setQuantityCount] = useState(cartData);
  const updateQuantity = (id, change) => {
    const updatedCartProducts = quantityCount.map((item) =>
      item.productId === id
        ? { ...item, quantity: item.quantity + change }
        : item,
    );
    setQuantityCount(updatedCartProducts);
    setProductsToCart(updatedCartProducts);
    updateCart({ id: cartId, products: updatedCartProducts });
  };

  if (isProductsLoading)
    return (
      <>
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
      </>
    );

  const filteredProductsBasedCart = products.filter((product) =>
    cartData.find((cartItem) => cartItem.productId === product.id),
  );

  const productsToRender = filteredProductsBasedCart.map((product) => {
    return (
      <Stack
        direction="row"
        spacing={1}
        key={product.id}
        justifyContent="space-around"
        sx={{ mb: 3, borderRadius: 4, borderColor: "red" }}
      >
        <img src={product.image} alt="product" width={100} height={100} />

        <Typography variant="subtitle2" gutterBottom>
          Product Id: {product.id}
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          Price: {product.price}
        </Typography>
        {cartData.map((cartItem) => {
          if (cartItem.productId === product.id) {
            return (
              <Box key={product.id}>
                <Stack direction="row" spacing={1}>
                  <Button
                    onClick={() => updateQuantity(product.id, -1)}
                    disabled={cartItem.quantity === 0}
                    variant="contained"
                    size="small"
                    sx={{ minWidth: 32 }}
                  >
                    -
                  </Button>
                  <Typography variant="subtitle2" gutterBottom sx={{ pt: 0.5 }}>
                    Quantity: {cartItem.quantity}
                  </Typography>
                  <Button
                    onClick={() => updateQuantity(product.id, 1)}
                    variant="contained"
                    size="small"
                    sx={{ minWidth: 32 }}
                  >
                    +
                  </Button>
                </Stack>
              </Box>
            );
          }
        })}
        <Box component="div">
          <Button
            onClick={() => deleteProductHandler(product.id)}
            sx={{ mb: 2 }}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      </Stack>
    );
  });

  return (
    <>
      <CheckoutTemplate title="checkout-page">
        <Box sx={{ mt: 3 }}></Box>
        <Divider>
          <Chip label="Your Cart" size="small" />
        </Divider>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} md={8}>
            <Button
              sx={{ mb: 2 }}
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={deleteAllHandler}
            >
              Delete All
            </Button>
            <Divider sx={{ mb: 3 }} />
            {productsToRender}
          </Grid>
          <Grid item xs={12} md={4} bgcolor={"lightsalmon"}>
            <Button variant="contained" color="success">
              Buy products
            </Button>
          </Grid>
        </Grid>
      </CheckoutTemplate>
    </>
  );
};

export default CheckoutPage;
