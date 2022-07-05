import React from "react";
import Logo from "../assets/images/shared/logo.svg";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header_content">
          <div className="logo">
            <Link to="/">
              <img src={Logo} />
            </Link>

            <p className="logo_text">mangcoding Store</p>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/shop"> Shop</Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>
              </li>
              <li>
                <BsHandbag />
              </li>
              <li>
                <FaRegHeart />
              </li>
              <li>
                <HiOutlineUser />
              </li>
            </ul>

            <div className="search_bar">
              <input type="text" placeholder="Search" name="search" />
              <AiOutlineSearch />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer_content">
          <div className="footer_logo">
            <div className="logo_content">
              <img src={Logo} />

              <p className="footer_logo_text">mangcoding Store</p>
            </div>
            <p className="footer_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam{"\n"}
              mollis, justo nec porttitor auctor, erat sapien faucibus lectus,
              {"\n"}
              vel tempor dolor augue et lectus.
            </p>
            <button className="footer_button">Login Now</button>
          </div>

          <div className="footer_navbar">
            <div className="footer_scontent">
              <div>
                <p>Home</p>
                <h1>Product</h1>
                <h1>Categories</h1>
                <h1>Shop</h1>
                <h1>Log in</h1>
              </div>
              <div>
                <p>Shop</p>
                <h1>T-Shirt</h1>
                <h1>Jacket</h1>
                <h1>Shirt</h1>
                <h1>Jeans</h1>
              </div>
              <div>
                <p>Categories</p>
                <h1>Men</h1>
                <h1>Children</h1>
                <h1>Woman</h1>
              </div>
              <div>
                <p>Contact</p>
                <h1>mangcoding@gmail.com</h1>
                <div className="icons">
                  <div className="facebook">
                    <TiSocialFacebook color="white" fontSize="25px" />
                  </div>
                  <div className="twitter">
                    <AiOutlineTwitter color="white" fontSize="25px" />
                  </div>
                  <div className="linkedin">
                    <TiSocialLinkedin color="white" fontSize="25px" />
                  </div>
                  <div className="instagram">
                    <IoLogoInstagram color="white" fontSize="25px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
