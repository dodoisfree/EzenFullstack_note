/**
 * 05-stylesheet 단원의 `/pages/NewsList.js`를 이 단원의 `/pages/News.js` 로 복사
 */

import React from "react";
import styled from "styled-components";
import axios from "axios";
import NewsItem from "../components/NewsItem";
import Spinner from "../components/Spinner";

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const NewsList = () => {
  // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [newsList, setNewsList] = React.useState([]);
  // 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = React.useState(false);

  /** 페이지가 처음 열렸을 때 실행할 hook */
  React.useEffect(() => {
    // Ajax 로딩 시작을 알림
    setLoading(true);

    // 로딩시간이 너무 빨라서 0.5초의 딜레이를 적용함
    setTimeout(() => {
      (async () => {
        let json = null;

        try {
          const response = await axios.get("http://localhost:3001/news");
          json = response.data;
        } catch (e) {
          console.error(e);
          alert("Ajax 연동 실패");
        } finally {
            // Ajax 로딩 종료를 알림
            setLoading(false);
        }

        // ajax 연동 결과가 있다면 그 결과를 상태값에 적용함
        if (json != null) {
          // 일반 상태값 업데이트
          // setNewsList(json);
          // 성능 향상을 위한 함수형 업데이트 적용
          setNewsList(newList => json);
        }
      })();
    }, 500);
  }, []);

  return (
    <div>
      <Spinner visible={loading} />
      <ListContainer>
        {newsList.map((v, i) => <NewsItem key={i} item={v} />)}
      </ListContainer>
    </div>
  );
};

export default React.memo(NewsList);
