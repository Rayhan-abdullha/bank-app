import React from "react";
import onlineBanking from "../assets/images/icon-online.svg";
import onboarding from "../assets/images/icon-onboarding.svg";
import budgeting from "../assets/images/icon-budgeting.svg";
import iconApi from "../assets/images/icon-api.svg";
import styled from "styled-components";

const WhyChoose = () => {
  return (
    <ServicesWrapper className="whyChoose py">
      <div className="section-title">
        <h1>Why choose Easybank?</h1>
        <p>
          We laverage Open Bankin to turn your bank account into your financial
          hub
        </p>
      </div>
      <Services className="services container">
        <div className="singleServices">
          <img src={onboarding} alt="" />
          <h3>Fast Onboarding</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world
          </p>
        </div>
        <div className="singleServices">
          <img src={iconApi} alt="" />
          <h3>Open Api</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world
          </p>
        </div>
        <div className="singleServices">
          <img src={budgeting} alt="" />
          <h3>Simple Budgeting</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world
          </p>
        </div>
        <div className="singleServices">
          <img src={onlineBanking} alt="" />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world
          </p>
        </div>
      </Services>
    </ServicesWrapper>
  );
};
const ServicesWrapper = styled.section`
  background: #fff;
  text-align: center;
  .section-title {
    text-align: center;
    margin-bottom: 70px;
  }
`;
const Services = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  img {
    margin-bottom: 20px;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 20px;
  }
`;
export default WhyChoose;
