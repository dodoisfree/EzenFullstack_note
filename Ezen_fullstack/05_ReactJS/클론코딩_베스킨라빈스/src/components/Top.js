import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import top_bg from "../assets/img/top_bg.png";
import logo_img from "../assets/img/logo_baskinrobbins.png";
import facebook from "../assets/img/icon_facebook.png";
import twitter from "../assets/img/icon_twitter.png";
import blog from "../assets/img/icon_blog.png";
import instagram from "../assets/img/icon_instagram.png";
import youtube from "../assets/img/icon_youtube.png";
import search from "../assets/img/icon_search.png";

const TopCss = styled.header`
  background: url(${top_bg}) repeat-x;
  width: 100%;
  height: 142px;
  border-top: 3px solid #ff7c98;
  border-bottom: 1px solid #ccc;

  .inner {
    box-sizing: border-box;
    width: 1260px;
    height: 142px;
    margin: 0px auto;
    padding-top: 22px;
    display: flex;
    h1 {
      display: block;
      width: 97px;
      height: 97px;
      .logo_link {
        display: block;
        background: url(${logo_img}) no-repeat;
        background-size: contain;
        width: 97px;
        height: 97px;
        text-indent: -9999em;
        margin: 0px auto;
      }
    }

    .sns {
      display: block;
      width: 225px;
      height: 35px;
      margin-right: auto;
      margin-top: 31px;
      ul {
        display: flex;
        justify-content: space-between;
      }
    }

    .etc {
      display: block;
      width: 217px;
      height: 54px;
      margin-top: 20px;
      margin-left: auto;

      ul {
        display: flex;
        justify-content: space-between;

        .customer {
          padding-left: 10px;
        }
        li:nth-child(2) {
          padding-right: 15px;
        }
        .search {
          display: inline-block;
          background: url(${search}) no-repeat;
          width: 54px;
          height: 54px;
          text-indent: -9999em;
        }
        .etc_link {
          color: #4a3d39;
          text-decoration: none;
          font-size: 12px;
          line-height: 54px;
          letter-spacing: -1.5px;
        }
      }
    }
  }
`;

const Top = () => {
  return (
    <TopCss>
      <div className="inner">
        <nav className="sns">
          <ul>
          <li>
							<a href="https://www.facebook.com/baskinrobbins.kr/" target="_blank" rel="noopener noreferrer">
								<img src={facebook} alt="FACEBOOK" />
							</a>
						</li>
            <li>
              <a href="https://twitter.com/BaskinrobbinsKR" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="TWITTER" />
              </a>
            </li>
            <li>
              <a href="http://blog.naver.com/brgirl31" target="_blank" rel="noopener noreferrer">
                <img src={blog} alt="BLOG" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/baskinrobbinskorea/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="INSTAGRAM" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/baskinrobbinskorea" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="YOUTUBE" />
              </a>
            </li>
          </ul>
        </nav>
        
        <h1 className="logo_h1">
          <Link className="logo_link" to="/">
            baskin robbins
          </Link>
        </h1>

        <nav className="etc">
          <ul>
            <li className="customer">
              <Link className='etc_link' to="/">고객센터</Link>
            </li>
            <li>
              <Link className='etc_link' to="/">CONTACT US</Link>
            </li>
            <li className="search">
              <Link className='etc_link' to="/">search</Link>
            </li>
          </ul>
        </nav>
      </div>
    </TopCss>
  );
};

export default Top;
