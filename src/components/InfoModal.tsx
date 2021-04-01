import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import cancel from "../svgs/cancel.svg";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 400px;
  height: 300px;
  background: white;
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 5%;
  display: flex;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  .sub {
    margin-top: 5px;
    text-align: center;
    font-weight: normal;
    font-size: 14px;
  }
`;

const Stats = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  font-weight: normal;
  .stat_number {
    font-weight: bold;
  }
`;

interface IModal {
  username: string;
  closeModal: Dispatch<SetStateAction<boolean>>;
}

interface IUser {
  avatar_url: string;
  name: string;
  login: string;
  created_at: string;
  location: string;
  followers: string;
  following: string;
}

const InfoModal = ({ username, closeModal }: IModal) => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const response = fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [username]);

  console.log(user);

  return (
    <StyledModal>
      <CloseButton onClick={() => closeModal(false)}>
        <img src={cancel} />
      </CloseButton>
      <Avatar src={user?.avatar_url} alt="avatar" />
      <Title>
        <span>{user?.name}</span>
        <div className="sub">{user?.location}</div>
      </Title>
      <Stats>
        <div>
          Followers: <span className="stat_number">{user?.followers}</span>
        </div>
        <div>
          Following: <span className="stat_number">{user?.following}</span>
        </div>
      </Stats>
    </StyledModal>
  );
};

export default InfoModal;
