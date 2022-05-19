import styled from "styled-components";
import selectArr from "../img/sel_arr_2x.gif";

const ContentCss = styled.div`
  width: 100%;
  height: 1018px;
  background-color: aliceblue;
  form {
    width: 768px;
    height: 100%;
    margin: 0 auto;
    .joinArea {
      width: 460px;
      height: 100%;
      margin: 0 auto;
      background-color: beige;

      // 아이디, 비밀번호, 비밀번호 확인, 까지의 CSS
      .privGroup {
        width: 100%;
        overflow: hidden;
        .inputArea {
          width: 100%;
          display: flex;
          flex-direction: column;
          h3 {
            font-size: 14px;
            margin: 19px 0 8px;
          }
          .inputBox {
            box-sizing: border-box;
            width: 100%;
            height: 51px;
            padding-left: 14px;
            background-color: #fff;
            border: 1px solid #dadada;
            &:hover {
              border: 1px solid #03c75a;
            }
            .input {
              width: 309px;
              height: 29px;
              padding: 0;
              padding-right: 25px;
              outline: 0;
              border: 0px;
              margin-top: 11px;
              font-size: 15px;
            }
            select {
              -webkit-appearance:none;
              background: #fff url(${selectArr}) 100% 50% no-repeat;
              background-size: 20px 8px;
            }
            span {
              display: inline-block;
              width: 82px;
              height: 18px;
              font-size: 15px;
              color: #8e8e8e;
              line-height: 18px;
              margin-left: 15px;
            }
            .risk {
              display: inline-block;
              width: 24px;
              height: 18px;
              color: #03c75a;
              font-size: 12px;
              margin-left: 47px;
            }
          }
        }
      }
      .alert {
        font-size: 12px;
        color: red;
        margin: 9px 0 2px;
      }

      // 이름, 생년월일, 성별, 이메일 까지의 CSS
      .privGroup:nth-child(2) {
        margin-top: 20px;
        .inputArea:nth-child(1),
        .inputArea:nth-child(4) {
          .input {
            width: 405px;
          }
        }
        .inputArea:nth-child(2) {
          .bdayIptBox {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .inputBox:nth-child(1) {
              width: 146.69px;
              height: 51px;
              .input {
                width: 91.61px;
              }
            }
            .inputBox:nth-child(2) {
              width: 146.61px;
              height: 51px;
              .input {
                width: 116.69px;
              }
            }
            .inputBox:nth-child(3) {
              width: 146.7px;
              height: 51px;
              .input {
                width: 91.7px;
              }
            }
          }
        }
        .inputArea:nth-child(3) {
          .input {
            width: 437px;
            padding-right: 0px;
          }
        }
      }
    }
  }
`;

export default ContentCss;
