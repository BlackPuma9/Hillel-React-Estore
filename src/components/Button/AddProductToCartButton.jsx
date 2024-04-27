import React from "react";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { AddShoppingCart } from "@mui/icons-material";
import { addToCart } from "../../store/slices/cart";
import { useDispatch } from "react-redux";
import {
  useCreateNewCartMutation,
  useUpdateCartProductsMutation,
} from "../../store/api";
import {
  getCartIdFromLocalStorage,
  getProductFromLocalStorageCart,
  setCartIdFromLocalStorage,
  setProductsToCart,
} from "../../utils/helpers/cartLocalStorage";

const AddProductToCartButton = ({ id }) => {
  const dispatch = useDispatch();

  const [createCart] = useCreateNewCartMutation();
  const [updateCart] = useUpdateCartProductsMutation();

  const addProductToCartHandler = async () => {
    const cartData = getProductFromLocalStorageCart();

    let cartId = getCartIdFromLocalStorage();

    const index = cartData.findIndex(
      (product) => Number(product.productId) === +id,
    );

    if (index < 0) {
      cartData.push({ productId: Number(id), quantity: 1 });
    } else {
      ++cartData[index].quantity;
    }

    if (!cartId) {
      const { id } = await createCart(cartData).unwrap();
      setCartIdFromLocalStorage(id);
    } else {
      updateCart({ id: cartId, products: cartData });
    }

    setProductsToCart(cartData);
    dispatch(addToCart());
  };

  return (
    <Tooltip title="Add to Cart">
      <IconButton onClick={addProductToCartHandler}>
        <AddShoppingCart
          sx={{
            fontSize: "1.6rem",
            background: "#43b02a",
            color: "white",
            borderRadius: "0.8rem",
            padding: "10px",
          }}
          id={id}
        />
      </IconButton>
    </Tooltip>
  );
};

export default AddProductToCartButton;
