import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <Box
      sx={{ mt: 15 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h5" component="div">
        Ooops....Page not found
      </Typography>
      <Typography variant="body2" component="div">
        The page you are attempting to reach does not exist. Please verify the
        URL and try again.
      </Typography>
      <Typography variant="body2" component="div">
        You will be redirected to Home page after 10 sec....
      </Typography>
    </Box>
  );
};

export default PageNotFound;
