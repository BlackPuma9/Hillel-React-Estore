import React, { useState } from "react";
import CheckoutTemplate from "../../templates/CheckoutTemplate";
import { Button, Chip, Divider, Grid, Skeleton } from "@mui/material";
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
import CartProductItem from "./CartProductItem";

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

  const renderProduct = (product) => {
    return (
      <CartProductItem
        key={product.id}
        id={product.id}
        price={product.price}
        image={product.image}
        quantity={product.quantity}
        updateQuantity={updateQuantity}
        deleteProductHandler={deleteProductHandler}
      />
    );
  };

  const cartProducts = products
    .map((product) => {
      const productFromCart = cartData.find(
        (cartItem) => cartItem.productId === product.id,
      );

      return productFromCart
        ? renderProduct({ ...product, quantity: productFromCart.quantity })
        : null;
    })
    .filter(Boolean);

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
            {cartProducts}
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{ mt: 25 }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignContent="center"
            >
              <Typography variant="subtitle2" gutterBottom>
                Here should be payment block
              </Typography>
              <Button variant="contained" color="success">
                Order Now!
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CheckoutTemplate>
    </>
  );
};

export default CheckoutPage;
