import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";
import Navbar from "./Navbar";

interface IUsers {
  login: string;
  id: number;
}

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = () => {
  const [users, setUsers] = useState<IUsers[]>([{ login: "", id: 0 }]);

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

  return (
    <StyledContainer>
      {/* <Navbar />
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
            <Card key={index} username={item.login} id={item.id} />
          ))}
        </InfiniteScroll>
      )} */}
    </StyledContainer>
  );
};

export default Container;
