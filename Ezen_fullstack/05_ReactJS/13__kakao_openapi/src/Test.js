import React, { memo } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getKakaoSearch } from "./Slices/kakaoSlice";

const Test = memo(() => {
  const dispatch = useDispatch();
  const { meta, documents, loading, error } = useSelector((state) => state.kakao);

  React.useEffect(() => {
    dispatch(
      getKakaoSearch({
        api: "cafe",
        query: "리액트",
        page: 1,
        size: 5,
      })
    );
  }, [dispatch]);

  console.log(JSON.stringify(meta), documents);


  return (
    loading ? "loading..." : (
      error ? JSON.stringify(error) : (
        <>
          <h1>Meta</h1>
          {JSON.stringify(meta)}
          <h1>documents</h1>
          {JSON.stringify(documents)}
        </>
      )
    )
  )
});

export default Test;
