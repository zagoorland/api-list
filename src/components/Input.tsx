import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 18px;
`;

interface InputProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ setInput }: InputProps) => {
  return (
    <div>
      <StyledInput
        placeholder="Search for Github users..."
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
