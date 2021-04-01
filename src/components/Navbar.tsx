import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100px;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 2;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const StyledLink = styled.li`
  margin: 0 120px;
  font-size: 18px;
  cursor: pointer;
`;

const Navbar = () => {
  const history = useHistory();
  return (
    <Container>
      <List>
        <StyledLink onClick={() => history.push("/")}>Users List</StyledLink>
        <StyledLink onClick={() => history.push("/search")}>Search</StyledLink>
      </List>
    </Container>
  );
};

export default Navbar;
