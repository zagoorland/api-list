import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IWrapper {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: IWrapper) => {
  return (
    <StyledWrapper>
      <Navbar />
      {children}
    </StyledWrapper>
  );
};

export default PageWrapper;
