import React from "react";
import styled from "styled-components";
import Button from "../share/Button";

const Header = () => {
  return (
    <HeaderWrapper className="header">
      <h1>Next generation digital banking</h1>
      <p>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving,
        <br /> budgeting, investing, and much more
      </p>
      <Button />
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  text-align: center;
  padding: 150px 0;

  h1 {
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
      padding: 100px 20px;
    }
  }
`;

export default Header;
