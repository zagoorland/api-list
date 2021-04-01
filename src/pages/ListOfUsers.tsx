import React, { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import InfoModal from "../components/InfoModal";

interface IUsers {
  login: string;
  id: number;
}

const ModalContainer = styled.div`
  z-index: 4;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const ListOfUsers = () => {
  const [users, setUsers] = useState<IUsers[]>([{ login: "", id: 0 }]);
  const [clickedName, setClickedName] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const response = fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);

  const fetchMoreData = () => {
    const lastId = users[users.length - 1].id;
    if (users) {
      const response = fetch(
        `https://api.github.com/users?perPage=30&since=${lastId}`
      )
        .then((response) => response.json())
        .then((data) => setUsers([...users, ...data]));
    }
  };

  const handleCardClick = (username: string) => {
    setClickedName(username);
    setIsModalOpen(true);
  };

  return (
    <PageWrapper>
      {isModalOpen && (
        <ModalContainer>
          <InfoModal username={clickedName} closeModal={setIsModalOpen} />
        </ModalContainer>
      )}

      {users && (
        <InfiniteScroll
          dataLength={users.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>End of list</b>
            </p>
          }
        >
          {users.map((item, index) => (
            <Card
              key={index}
              username={item.login}
              id={item.id}
              handleClick={handleCardClick}
            />
          ))}
        </InfiniteScroll>
      )}
    </PageWrapper>
  );
};

export default ListOfUsers;
