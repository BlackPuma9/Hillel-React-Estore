import React from "react";
// import PropTypes from "prop-types";
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

// BaseTemplate.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.element,
//   id: PropTypes.string.isRequired,
// };

export default BaseTemplate;
