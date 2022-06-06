import styled from "styled-components";
import selectArr from "../img/sel_arr_2x.gif";
import riskImg from "../img/m_icon_pw_step.png";

const ContentCss = styled.div`
  width: 100%;
  height: auto;
  form {
    width: 768px;
    height: 100%;
    margin: 0 auto;
    .joinArea {
      width: 460px;
      height: 100%;
      margin: 0 auto;

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
            font-weight: 700;
            margin: 19px 0 8px;
          }
          .inputBox {
            box-sizing: border-box;
            width: 100%;
            height: 51px;
            padding-left: 14px;
            background-color: #fff;
            border: 1px solid #dadada;
            position: relative;
            &:hover {
              border: 1px solid #03c75a;
            }
            .field {
              width: 309px;
              height: 29px;
              padding: 0;
              padding-right: 25px;
              outline: 0;
              border: 0px;
              margin-top: 11px;
              font-size: 15px;
              background-color: #fff;
            }
            select {
              -webkit-appearance: none;
              background: #fff url(${selectArr}) 100% 50% no-repeat;
              background-size: 20px 8px;
            }
            span {
              display: inline-block;
              width: 82px;
              height: 18px;
              font-size: 15px;
              color: #8e8e8e;
              background-color: #fff;
              line-height: 18px;
              margin-left: 15px;
            }
            .safe {
              display: inline-block;
              width: 24px;
              height: 18px;
              color: #03c75a;
              font-size: 12px;
              margin-left: 47px;
            }
            .notSafe {
              display: inline-block;
              width: 48px;
              height: 18px;
              color: red;
              font-size: 12px;
              margin-left: 23px;
            }
            .defaultImg {
              background: url(${riskImg}) no-repeat;
              background-size: 125px 75px;
              background-position: 0 0;
              position: absolute;
              top: 50%;
              right: 13px;
              margin-top: -12.5px;
              width: 24px;
              height: 24px;
            }
            .notSafeImg {
              background: url(${riskImg}) no-repeat;
              background-size: 125px 75px;
              background-position: -27px -27px;
              position: absolute;
              top: 50%;
              right: 13px;
              margin-top: -12.5px;
              width: 24px;
              height: 24px;
            }
            .defaultImg2 {
              background: url(${riskImg}) no-repeat;
              background-size: 125px 75px;
              background-position: -27px 0;
              position: absolute;
              top: 50%;
              right: 13px;
              margin-top: -12.5px;
              width: 24px;
              height: 24px;
            }
            .safeImg {
              background: url(${riskImg}) no-repeat;
              background-size: 125px 75px;
              background-position: -81px 0;
              position: absolute;
              top: 50%;
              right: 13px;
              margin-top: -12.5px;
              width: 24px;
              height: 24px;
            }
          }
        }
      }
      .alert {
        font-size: 12px;
        color: red;
        margin: 9px 0 2px;
      }
      .checkYear {
        font-size: 12px;
        color: red;
        margin: 9px 0 2px;
      }

      // 이름, 생년월일, 성별, 이메일 까지의 CSS
      .privGroup:nth-child(2) {
        margin-top: 20px;
        .inputArea:nth-child(1),
        .inputArea:nth-child(4) {
          .field {
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
              .field {
                width: 91.61px;
              }
            }
            .inputBox:nth-child(2) {
              width: 146.61px;
              height: 51px;
              .field {
                width: 116.69px;
              }
            }
            .inputBox:nth-child(3) {
              width: 146.7px;
              height: 51px;
              .field {
                width: 91.7px;
              }
            }
          }
        }
        .inputArea:nth-child(3) {
          .field {
            width: 437px;
            padding-right: 0px;
          }
        }
      }

      // 휴대전화 CSS
      .privGroup:nth-child(3) {
        width: 100%;
        margin-top: 20px;
        .inputArea {
          height: auto;
          .ctryBox {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            .inputBox {
              width: 460px;
              height: 51px;
              .field {
                width: 437px;
                padding-right: 0px;
              }
              &:nth-child(3) {
                margin-top: 10px;
                background-color: #f5f6f7;
                .field {
                  background-color: inherit;
                }
                &:hover {
                  border: 1px solid #dadada;
                }
              }
            }
            .sendCellIptBox {
              width: 100%;
              height: 51px;
              margin-top: 10px;

              box-sizing: border-box;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              .inputBox {
                display: block;
                width: 335px;
                height: 100%;
                padding-left: 14px;
                background-color: #fff;
                border: 1px solid #dadada;
                .field {
                  width: 304px;
                  height: 29px;
                  font-size: 15px;
                }
                &:nth-child(2) {
                  display: block;
                  width: 115px;
                  height: 51px;
                  border: 0;
                  padding: 0;
                  margin: 0;
                  .sendCellBtn {
                    width: 100%;
                    height: 100%;
                    border: 1px solid #03b754;
                    background-color: #03c75a;
                    font-size: 15px;
                    font-weight: 700;
                    color: #fff;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
      .btnArea {
        width: 100%;
        height: 53px;
        margin: 30px 0 9px;
        button {
          width: 100%;
          height: 100%;
          border: 1px solid #03b754;
          background-color: #03c75a;
          cursor: pointer;
          span {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            text-align: center;
            background-color: inherit;
          }
        }
      }
    }
  }
`;

export default ContentCss;
