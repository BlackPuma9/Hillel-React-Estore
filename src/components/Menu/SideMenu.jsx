import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CategoryIcon from "@mui/icons-material/Category";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const SideMenu = ({ categories, isLoading }) => {
  if (isLoading)
    return (
      <>
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
      </>
    );

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          All Categories
        </ListSubheader>
      }
    >
      {categories.map((category, index) => (
        <Link
          to={`/category/${category}`}
          key={index}
          style={{ textDecoration: "none" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "#212121" }} primary={category} />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
};

export default SideMenu;
