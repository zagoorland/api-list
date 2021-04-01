import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: lightcoral;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Navbar = () => {
  return <Container>content</Container>;
};

export default Navbar;
