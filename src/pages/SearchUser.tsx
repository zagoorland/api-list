import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import styled from "styled-components";
import Input from "../components/Input";

const InputContainer = styled.div`
  margin: 20px;
  width: 500px;
`;

const SearchUser = () => {
  const [input, setInput] = useState("");
  return (
    <PageWrapper>
      <InputContainer>
        <Input setInput={setInput} />
      </InputContainer>
    </PageWrapper>
  );
};
export default SearchUser;
