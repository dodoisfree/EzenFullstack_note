import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";
import { useSelector, useDispatch } from "react-redux";
import { getKakaoSearch } from "../Slices/kakaoSlice";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";

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

  // 검색어가 전달되었을 경우의 hook
  useEffect(() => {
    dispatch(
      getKakaoSearch({
        api: api,
        query: query,
        page: 1,
        size: 20,
      })
    );
  }, [api, dispatch, query]);

  return (
    <div>
      <Spinner visible={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        documents && (
          <>
            <h2>Meta</h2>
            {JSON.stringify(meta)}
            <h2>Documents</h2>
            {JSON.stringify(documents)}
          </>
        )
      )}
    </div>
  );
});

export default KakaoSearch;
