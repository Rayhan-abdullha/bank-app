import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../share/Button";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer container">
        <div className="footerItem">
          <img className="footerLogo" src={logo} alt="" />
          <SocialLInk>
            <Link to="/">
              <li>
                <FaFacebook />
              </li>
            </Link>
            <Link to="/">
              <li>
                <FaInstagram />
              </li>
            </Link>
            <Link to="/">
              <li>
                <FaYoutube />
              </li>
            </Link>
            <Link to="/">
              <li>
                <FaLinkedin />
              </li>
            </Link>
          </SocialLInk>
        </div>
        <div className="footerItem">
          <FooterMenu>
            <ul>
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
            </ul>
          </FooterMenu>
        </div>
        <div className="footerItem">
          <FooterMenu>
            <ul>
              <Link to="/careers">
                <li>About Us</li>
              </Link>
              <Link to="/Support">
                <li>Support</li>
              </Link>
              <Link to="/Privacy">
                <li>Privacy</li>
              </Link>
            </ul>
          </FooterMenu>
        </div>
        <div className="footerItem copyright">
          <Button />
          <p>Copyright Easybank. All Rights Reserved</p>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #2c3e50;
  position: relative;
  bottom: 0;
  right: 0;
  left: 0;
  color: #fff;

  .footerLogo {
    background: #fff;
  }
  .footer {
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
  }
  p {
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    .copyright {
      display: none;
      visibility: hidden;
    }

    .footer {
      display: table;
      text-align: center;
    }
  }
  @media (max-width: 992px) {
    .container {
      width: 100%;
      padding: 50px 20px;
    }
  }
`;
const SocialLInk = styled.ul`
  margin-top: 30px;
  a {
    display: inline-block;
    margin-right: 20px;
    color: #fff;
  }
`;

const FooterMenu = styled.nav`
  ul a {
    color: #fff;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    display: none;
    visibility: hidden;
  }
`;

export default Footer;
