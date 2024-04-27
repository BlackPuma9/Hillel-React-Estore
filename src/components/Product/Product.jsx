import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import AddProductToCartButton from "../Button";

const Product = ({ id, title, image, price, rating }) => {
  return (
    <Card
      sx={{ maxWidth: 245, marginY: "1rem" }}
      display="flex"
      flexdirection="column"
      alignitems="space-between"
    >
      <CardMedia
        component="img"
        alt="product image"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography
          sx={{ height: 90 }}
          gutterBottom
          variant="subtitle2"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          component="div"
          fontWeight="bold"
        >
          Price: {price}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Rating: {rating}
        </Typography>
      </CardContent>
      <CardActions>
        <AddProductToCartButton id={id} />
        <RouterLink to={`product/${id}`}>
          <Button size="small">Check it</Button>
        </RouterLink>
      </CardActions>
    </Card>
  );
};

export default Product;
