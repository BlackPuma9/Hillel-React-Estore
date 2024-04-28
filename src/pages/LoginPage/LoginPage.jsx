import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useLoginMutation } from "../../store/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const defaultFormState = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();

  // get token from cookies
  const userToken = Cookies.get("user_token");
  console.log(userToken);

  const [login] = useLoginMutation();

  const formik = useFormik({
    validationSchema,
    initialValues: { ...defaultFormState },
    onSubmit: async (values) => {
      const { email, password } = values;
      const response = await login({ username: email, password });

      if (response?.error) {
        console.error(response);
      }

      if (response.data.token.includes("eyJhbGciOiJIUzI1NiIsInR")) {
        Cookies.set("user_token", `${response.data.token}`, {
          expires: 1,
          path: "/",
        });
        navigate("/");
      }

      // set token to cookies
      // redirect user to home page
    },
  });

  return (
    <Box
      sx={{ mt: 5 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" color="textSecondary">
        Login Page
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="column" spacing={2}>
          <TextField
            // fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            // fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;
