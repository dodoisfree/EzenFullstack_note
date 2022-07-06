import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";
import { useSelector, useDispatch } from "react-redux";
import { getKakaoSearch } from "../Slices/kakaoSlice";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import ListItem from "../components/ListItem";
import ImageItem from "../components/ImageItem";
import GoTop from "../components/GoTop";

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.api === 'image' ? 'row' : 'column'};
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const KakaoSearch = memo(() => {
  // Path 파라미터 받아오기
  const { api } = useParams();
  // QueryString의 검색어 가져오기
  const { query } = useQueryString();
  // 리덕스를 통한 검색 결과 상태 조회
  const dispatch = useDispatch();
  const { meta, documents, loading, error } = useSelector(
    (state) => state.kakao
  );

  // 페이지 번호 상태값
  const [page, setPage] = React.useState(1);
  // 무한 스크롤 관련
  const [ref, inView] = useInView();

  const getContent = React.useCallback((p=1) => {
    console.log(`api=${api}, page=${p}`);
    setPage(p);
    dispatch(getKakaoSearch({
      api: api,
      query: query,
      page: p,
      size: api === 'image' ? 80 : 50
    }));
  }, [api, dispatch, query])

  // 검색어가 전달되었을 경우의 hook
  useEffect(() => {
    window.scrollTo(0, 0);
    getContent(1);
  }, [api, getContent, query]);

  // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
  React.useEffect(() => {
    if (inView && !loading) {
      getContent(page+1);
    }
  }, [getContent, inView, loading, page]);
  return (
    <div>
      <Spinner visible={loading} />
      <GoTop />

      {error ? (
        <ErrorView error={error} />
      ) : documents && (
          <ListContainer api={api}>
            {documents.map((v, i) => {
              return api === 'image' ? (
                <ImageItem key={i} type={api} item={v}
                {...(!meta?.is_end && !loading && documents.length -1 === i ? { inview: ref} : {})} />
              ) : (
                <ListItem key={i} type={api} item={v} 
                {...(!meta?.is_end && !loading && documents.length -1 === i ? { inview: ref} : {})} />
              )
            })}
          </ListContainer>
      )}
    </div>
  );
});

export default KakaoSearch;
