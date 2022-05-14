import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hpapp from "../assets/img/img_happypoint_app.jpg";
import idal from "../assets/img/img_monthly_fom_220429.png";
import title from "../assets/img/gnb_menu.png";

const MenuCss = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid #e2d9d6;
  letter-spacing: -0.05em;
  position: absolute;
  .titles_all {
    width: 100%;
    height: 46px;
    .titles {
      width: 1320px;
      height: inherit;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      .link {
        display: block;
        text-decoration: none;
        color: #483834;
        font-size: 13px;
        font-weight: bold;
        line-height: 47px;
        height: 46px;
        text-indent: -9999px;
        &:nth-child(1) {
          background: url(${title}) no-repeat;
          width: 35px;
          background-position: 0px -1px;
          margin-right: -75px;
        }
        &:nth-child(2) {
          background: url(${title}) no-repeat;
          width: 30px;
          background-position: -95px -1px;
        }
        &:nth-child(3) {
          background: url(${title}) no-repeat;
          width: 164px;
          background-position: -133px -2px;
        }
        &:nth-child(4) {
          background: url(${title}) no-repeat;
          width: 42px;
          background-position: -416px -2px;
          margin-right: -30px;
        }
        &:nth-child(5) {
          background: url(${title}) no-repeat;
          width: 105px;
          background-position: -545px -2px;
          margin-right: -30px;
        }
        &:nth-child(6) {
          background: url(${title}) no-repeat;
          width: 42px;
          background-position: -736px -2px;
        }
        &:nth-child(7) {
          background: url(${title}) no-repeat;
          width: 49px;
          background-position: -893.5px -2px;
        }
        &:nth-child(8) {
          background: url(${title}) no-repeat;
          width: 49px;
          background-position: -1057px -2px;
        }
      }
    }
    .menu_all {
      width: 100%;
      height: 0; //275px
      text-align: center;
      overflow: hidden;
      border-top: 0px solid #3f291a;
      border-bottom: 1px solid #3f291a;
      background-color: white;
      .menu_sub {
        width: 1320px;
        height: inherit;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0 auto;
        .hpapp {
          width: 195px;
          height: 145px;
          margin: auto 0;
          margin-left: 47px;
        }
        .idal {
          margin-left: 0px;
        }
        .lists {
          width: 800px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          .list {
            font-size: 14px;
            color: #b7afaa;
            line-height: 37px;
            margin-top: 35px;
            &:first-child {
              margin-left: -15px;
            }
            &:nth-child(2) {
              margin-left: -15px;
            }
            &:nth-child(3) {
              margin-right: 10px;
            }
            &:nth-child(4) {
              margin-right: 10px;
            }
            &:nth-child(5) {
              margin-right: -13px;
            }
          }
        }
      }
    }
  }
`;



const Menu = () => {

  return (
    <MenuCss>
      <div className="titles_all">
        <div className="titles">
          <Link className="link" to="/">
            LOGIN
          </Link>
          <Link className="link" to="/">
            JOIN
          </Link>
          <Link className="link" to="/">
            FLAVOR OF THE MONTH
          </Link>
          <Link className="link" to="/">
            MENU
          </Link>
          <Link className="link" to="/">
            영양성분 및 알레르기
          </Link>
          <Link className="link" to="/">
            EVENT
          </Link>
          <Link className="link" to="/">
            STORE
          </Link>
          <Link className="link" to="/">
            ABOUT
          </Link>
        </div>
        <div className="menu_all">
          <div className="menu_sub">
            <img className="hpapp" src={hpapp} alt="해피포인트 QR코드" />
            <img
              className="idal"
              src={idal}
              alt="피카피카 피카츄 아이스크림 사진"
            />
            <div className="lists">
              <ul className="list">
                <li>아이스크림</li>
                <li>아이스크림케이크</li>
                <li>음료</li>
                <li>커피</li>
                <li>디저트</li>
              </ul>
              <ul className="list">
                <li>아이스크림</li>
                <li>음료</li>
                <li>커피</li>
              </ul>
              <ul className="list">
                <li>진행중이벤트</li>
                <li>당첨자발표</li>
              </ul>
              <ul className="list">
                <li>매장찾기</li>
                <li>고객센터</li>
                <li>단체주문</li>
              </ul>
              <ul className="list">
                <li>공지사항</li>
                <li>보도자료</li>
                <li>채용정보</li>
                <li>점포개설문의</li>
                <li>CONTACT US</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MenuCss>
  );
};

export default Menu;
