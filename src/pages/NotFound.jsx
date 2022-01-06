import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>Opps</h1>
      <h1>404 Page Not Found!!</h1>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  text-align: center;
  margin-top: 50px;
`;
export default NotFound;
