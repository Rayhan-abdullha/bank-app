import React from "react";
import Header from "../components/Header";
import LatestArticles from "../components/LatestArticles";
import WhyChoose from "../components/WhyChoose";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <WhyChoose />
      <LatestArticles />
    </React.Fragment>
  );
};

export default Home;
