import React from "react";
import styled from "styled-components";

const Button = () => {
  return <ButtonWrapper>Request Invite</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  background-color: #35cc9d;
  border-radius: 30px;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  :hover {
    background: #56cc9d;
  }
`;
export default Button;
