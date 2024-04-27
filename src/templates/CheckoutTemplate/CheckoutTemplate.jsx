import React from "react";
// import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Footer from "../../components/Footer";

const CheckoutTemplate = ({ children, id }) => {
  return (
    <Box>
      <main id={id}>
        <Container>
          {children}
          <Footer />
        </Container>
      </main>
    </Box>
  );
};

// BaseTemplate.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.element,
//   id: PropTypes.string.isRequired,
// };

export default CheckoutTemplate;
