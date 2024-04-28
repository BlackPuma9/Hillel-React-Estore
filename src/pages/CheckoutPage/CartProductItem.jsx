import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const CartProductItem = ({
  id,
  quantity,
  price,
  image,
  updateQuantity,
  deleteProductHandler,
}) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      key={id}
      justifyContent="space-around"
      sx={{ mb: 3, borderRadius: 4, borderColor: "red" }}
    >
      <img src={image} alt="product" width={100} height={100} />

      <Typography variant="subtitle2" gutterBottom>
        Product Id: {id}
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Price: {price}
      </Typography>
      <Box key={id}>
        <Stack direction="row" spacing={1}>
          <Button
            onClick={() => updateQuantity(id, -1)}
            disabled={quantity === 0}
            variant="contained"
            size="small"
            sx={{ minWidth: 32 }}
          >
            -
          </Button>
          <Typography variant="subtitle2" gutterBottom sx={{ pt: 0.5 }}>
            Quantity: {quantity}
          </Typography>
          <Button
            onClick={() => updateQuantity(id, 1)}
            variant="contained"
            size="small"
            sx={{ minWidth: 32 }}
          >
            +
          </Button>
        </Stack>
      </Box>
      <Box component="div">
        <Button
          onClick={() => deleteProductHandler(id)}
          sx={{ mb: 2 }}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Box>
    </Stack>
  );
};

export default CartProductItem;
