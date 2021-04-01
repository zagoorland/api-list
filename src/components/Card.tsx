import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 250px;
  height: 100px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  transition: transform 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  & > span {
    margin-left: 5px;
    font-size: 14px;
    font-weight: normal;
  }
`;

interface ICard {
  username: string;
  id?: number;
  handleClick: (username: string) => void;
}

const Card = ({ username, id, handleClick }: ICard) => {
  return (
    <StyledCard onClick={() => handleClick(username)}>
      <Title>
        Username:
        <span>{username}</span>
      </Title>

      <Title>
        ID:
        <span>{id}</span>
      </Title>
    </StyledCard>
  );
};

export default Card;
