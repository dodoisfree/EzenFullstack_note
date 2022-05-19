import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";

const FooterCss = styled.div`
  width: 100%;
  height: 83px;
  .f_area {
    width: 768px;
    height: inherit;
    overflow: hidden;
    margin: 0 auto;
    .area_in {
      width: 100%;
      margin: 0 auto;
      padding: 30px 0 15px;
      ul {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 14px;
        margin-top: -2px;
        margin-bottom: 12px;
        li {
          overflow: hidden;
          height: 100%;
          line-height: 14px;
          &:first-child {
              margin-left: 12px;
          }
          &::after {
            color: #cfcfcf;
            content: "∣";
            margin: 0 4.5px 0 4.5px;
          }
          &:last-child::after {
            content: "";
          }
          a {
            font-size: 12px;
            color: #333;
            text-decoration: none;
          }
        }
      }
      address {
        width: 100%;
        height: 15px;
        display: flex;
        justify-content: center;
        * {
          color: #333;
          text-decoration: none;
          font: 9px/14px Verdana;
        }
        em:first-child {
          display: block;
          width: 58px;
          height: 11px;
          margin-top: 2px;
          margin-right: 5px;
          .logo {
            display: block;
            width: 58px;
            height: 11px;
            line-height: 15px;
            background: url(${logo}) no-repeat;
            background-size: cover;
            margin-left: 1px;
            margin-right: 3px;
            text-indent: -9999px;
          }
        }
        em:nth-child(2) {
          padding-left: 7px;
        }
        em:nth-child(3) {
          text-indent: -9999px;
        }
        .all_r {
          padding-left: 4px;
        }
        .corp {
          font-weight: bold;
          margin-left: 3px;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterCss>
      <div className="f_area">
        <div className="area_in">
          <ul>
            <li>
              <a href="http://policy.naver.com/rules/service.html">이용약관</a>
            </li>
            <li>
              <strong>
                <a href="http://policy.naver.com/policy/privacy.html">
                  개인정보처리방침
                </a>
              </strong>
            </li>
            <li>
              <a href="http://policy.naver.com/rules/disclaimer.html">
                책임의 한계와 법적고지
              </a>
            </li>
            <li>
              <a href="https://help.naver.com/support/alias/membership/p.membership/p.membership_26.naver" 
                target="_blank" rel="noreferrer">회원정보 고객센터
              </a>
            </li>
          </ul>
          <address>
            <em>
              <a href="https://www.navercorp.com/" target="_blank"
                className="logo" rel="noreferrer"><span>naver</span>
              </a>
            </em>
            <em>Copyright</em>
            <em>&copy;</em>
            <a href="https://www.navercorp.com/" target="_blank"
              className="corp" rel="noreferrer">NAVER Corp.
            </a>
            <span className="all_r">All Rights Reserved.</span>
          </address>
        </div>
      </div>
    </FooterCss>
  );
};

export default Footer;
