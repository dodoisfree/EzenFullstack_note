import React from "react";
import styled from "styled-components";

const Ser = styled.div`
  width: 100%;
  height: 212.5px;
  background-color: white;
  position: absolute;
  top: 186px;
  z-index: 999;
  font-size: 14px;
  letter-spacing: -1.8px;
  border-bottom: 1px;
  padding: 25px 0;
  .searchbar {
    width: 1200px;
    height: inherit;
    text-align: left;
    margin: 0 auto;
    .t_title {
      font-weight: normal;
      font-size: 14px;
      color: #2f231c;
      padding-top: 8px;
    }
    .prod_select {
      width: 128px;
      height: 32px;
      border-radius: 4px;
      border: 1px solid #d1cecc;
      color: #636363;
      font-size: 13px;
      padding: 0 5px 0 10px;
      margin-right: 14px;
      outline-style: none;
    }
    .prodinput {
      width: 260px;
      height: 32px;
      font-size: 13px;
      padding: 8px 1px 8px 10px;
      line-height: 16px;
      box-sizing: border-box;
      background-color: #efefef;
      border: 0;
      outline: none;
    }
    .hashinput {
      width: 540px;
      height: 32px;
      color: #ff7c98;
      font-size: 13px;
      padding: 8px 1px 8px 10px;
      line-height: 16px;
      box-sizing: border-box;
      background-color: #efefef;
      border: 0px;
      outline: none;
    }
    .hashtag {
      font-size: 13px;
      margin: 10px 0 0 14px;
      line-height: 1.5;
      dt {
        color: #9c9c9c;
        font-weight: bold;
        &::before {
          content: "·";
          margin-right: 6px;
        }
      }
      dd {
        width: 526px;
        height: 39px;
        span {
          color: #ff7c98;
          margin-left: 6px;
          cursor: pointer;
          &:first-child,
          &:nth-child(6) {
            margin: 0px;
          }
        }
      }
    }
    .allergie {
      width: 280px;
      height: 50px;
      display: flex;
      flex-wrap: wrap;
      div {
        font-size: 12px;
        width: 70px;
        height: 17px;
        flex-basis: 25%;
        input {
          -webkit-appearance: none;
          width: 17px;
          height: 17px;
          outline: none;
          border: 1px solid #d8d1cc;
          border-radius: 3px;
          margin: 0 2px 0 0;
          cursor: pointer;
          &:checked {
            background-color: #ff7c98;
          }
        }
        span {
          padding-left: 3px;
          position: relative;
          bottom: 4px;
        }
      }
    }
    .search {
      width: 1200px;
      height: 37px;
      margin: 0 auto;
      padding-top: 25px;
      button {
        display: block;
        width: 147px;
        height: 37px;
        background: #ff7c98;
        color: #fff;
        font-size: 15px;
        font-family: arial;
        line-height: 37px;
        border-radius: 18px;
        border: 0;
        cursor: pointer;
        box-sizing: border-box;
        margin: 0 auto;
      }
    }
  }
`;

const SearchBar = () => {
  return (
    <Ser>
      <div className="searchbar">
        <table>
          <colgroup>
            <col width="90" />
            <col width="486" />
            <col width="90" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th>
                <label htmlFor="prodinput" className="t_title">
                  제품명
                </label>
              </th>
              <td>
                <select className="prod_select">
                  <option>전체</option>
                  <option>아이스크림</option>
                  <option>아이스크림케이크</option>
                  <option>음료</option>
                  <option>커피</option>
                  <option>디저트</option>
                  <option>block pack</option>
                  <option>ready pack</option>
                </select>
                <input type="text" id="prodinput" className="prodinput" />
              </td>
              <th>
                <label htmlFor="hashinput" className="t_title">
                  해시태그
                </label>
              </th>
              <td>
                <div>
                  <input type="text" id="hashinput" className="hashinput" />
                </div>
                <div className="hashtag">
                  <dl>
                    <dt>자주 찾는 해시태그</dt>
                    <dd>
                      <span>#피카피카피카츄</span>
                      <span>#피카츄초코바나나블라스트</span>
                      <span>#쿨쿨잠만보밀키소다블라스트</span>
                      <span>#고라파덕아이스크림콘</span>
                      <br />
                      <span>#푸린아이스크림콘</span>
                      <span>#포켓몬스터</span>
                    </dd>
                  </dl>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th className="t_title">알레르기 성분</th>
              <td colSpan="3">
                <div className="allergie">
                  <div>
                    <input type="checkbox" value="계란" />
                    <span>계란</span>
                  </div>
                  <div>
                    <input type="checkbox" value="대두" />
                    <span>대두</span>
                  </div>
                  <div>
                    <input type="checkbox" value="돼지고기" />
                    <span>돼지고기</span>
                  </div>
                  <div>
                    <input type="checkbox" value="땅콩" />
                    <span>땅꽁</span>
                  </div>
                  <div>
                    <input type="checkbox" value="밀" />
                    <span>밀</span>
                  </div>
                  <div>
                    <input type="checkbox" value="복숭아" />
                    <span>복숭아</span>
                  </div>
                  <div>
                    <input type="checkbox" value="우유" />
                    <span>우유</span>
                  </div>
                  <div>
                    <input type="checkbox" value="없음" />
                    <span>없음</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="search">
          <button type="button">검색</button>
        </div>
      </div>
    </Ser>
  );
};

export default React.memo(SearchBar);
