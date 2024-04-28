import React from "react";
import Typography from "@mui/material/Typography";
import { useGetUserByIdQuery } from "../../store/api";
import { Divider, Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import BaseTemplate from "../../templates/BasicTemplate";

const MyProfilePage = () => {
  const userId = 1;
  const { data: userData, isLoading } = useGetUserByIdQuery(userId);

  if (isLoading) {
    return (
      <>
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
        <Skeleton animation="wave" height={50} />
      </>
    );
  }

  return (
    <BaseTemplate title="Profile Page" id="profile-page">
      <Box component="section" sx={{ m: 3 }}>
        <Typography variant="h2" color="textSecondary">
          My Profile Page
        </Typography>
        <Divider sx={{ mt: 3, mb: 3 }} />
        <Typography variant="body2" color="textSecondary">
          User ID: {userData.id}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          User Email: {userData.email}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          UserName: {userData.username}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Name: {userData.name.firstname}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Last Name: {userData.name.lastname}
        </Typography>
        <Divider sx={{ mt: 3, mb: 3 }} />
        <Typography variant="body2" color="textSecondary">
          Address: {userData.address.zipcode}, {userData.address.city},{" "}
          {userData.address.street} {userData.address.number},
        </Typography>
        <Divider sx={{ mt: 3, mb: 3 }} />
        <Typography variant="body2" color="textSecondary">
          Phone: {userData.phone}
        </Typography>
      </Box>
    </BaseTemplate>
  );
};

export default MyProfilePage;
