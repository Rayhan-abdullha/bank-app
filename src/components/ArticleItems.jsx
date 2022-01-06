import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ArticleItems = ({ item }) => {
  const { author, title, img } = item;
  return (
    <SingleItems className="singleItems">
      <Link to="/useEffect">
        <img className="articlesImg" src={img} alt="articleImg" />
      </Link>
      <small>{author}</small>
      <Link to="/">
        <h3>{title}</h3>
      </Link>
      <p></p>
    </SingleItems>
  );
};
const SingleItems = styled.div`
  .articlesImg {
    width: 100%;
    height: 300px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 22px;
    color: #101010;
  }
  h3:hover {
    text-decoration-line: underline;
  }
`;
export default ArticleItems;
