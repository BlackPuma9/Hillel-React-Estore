import React from "react";
import NavBar from "../../components/NavBar";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Footer from "../../components/Footer";

const BaseTemplate = ({ children, id }) => {
  return (
    <Box>
      <NavBar />
      <main id={id}>
        <Container>
          {children}
          <Footer />
        </Container>
      </main>
    </Box>
  );
};

export default BaseTemplate;
