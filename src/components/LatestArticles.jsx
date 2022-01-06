import React from "react";
import styled from "styled-components";
import confetti from "../assets/images/image-confetti.jpg";
import plane from "../assets/images/image-plane.jpg";
import restaurant from "../assets/images/image-restaurant.jpg";
import currency from "../assets/images/image-currency.jpg";
import ArticleItems from "./ArticleItems";

const LatestArticles = () => {
  const Articles = [
    {
      id: 1,
      img: confetti,
      title: "What is useEffect",
      author: "By Codder Rayhan",
    },
    {
      id: 1,
      img: currency,
      title: "Recive money in any currency with no fees",
      author: "By Codder Rayhan",
    },
    {
      id: 1,
      img: plane,
      title: "Recive money in any currency with no fees",
      author: "By Codder Rayhan",
    },
    {
      id: 1,
      img: restaurant,
      title: "Recive money in any currency with no fees",
      author: "By Codder Rayhan",
    },
  ];
  return (
    <ArticleWrapper className="articles-area py">
      <h1>Latest Articles</h1>
      <LatestArticle className="container">
        {Articles.map((article) => (
          <ArticleItems item={article} />
        ))}
      </LatestArticle>
    </ArticleWrapper>
  );
};
const ArticleWrapper = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
`;
const LatestArticle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-bottom: 20px;
  }
`;

export default LatestArticles;
