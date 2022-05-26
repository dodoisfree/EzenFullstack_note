import React, {memo, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";
import styled from "styled-components";

import MenuLink from "./MenuLink";

const Form = styled.form`
  position: sticky;
  display: flex;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin: 0;
  margin-bottom: 20px;

  input,
  button {
    display: block;
    margin-right: 5px;
    font-size: 16px;
    padding: 0 10px;
    height: 30px;
  }

  input {
    flex: 1;
  }

  button {
    width: 70px;
    flex: none;
  }
`;

const Top = memo(() => {
  const navigate = useNavigate();

  /**
  const qs = useQueryString();
  console.log(qs);
  const query = qs.query;
  /*/
  const { query } = useQueryString();
  /**/

  const onSearchSubmit = useCallback((e) => {
      e.preventDefault();
      navigate(`/web?query=${e.target.query.value}`);
    }, [navigate]);

  return (
    <div>
      <h1>카카오 검색</h1>
      <Form onSubmit={onSearchSubmit}>
        <input type='search' name='query' defaultValue={query} />
        <button type='submit'>검색</button>
      </Form>

      {query && (
        <nav>
          <MenuLink to={`/web?query=${encodeURIComponent(query)}`}>웹</MenuLink>
          <MenuLink to={`/image?query=${encodeURIComponent(query)}`}>이미지</MenuLink>
          <MenuLink to={`/blog?query=${encodeURIComponent(query)}`}>블로그</MenuLink>
          <MenuLink to={`/cafe?query=${encodeURIComponent(query)}`}>카페</MenuLink>
          <MenuLink to={`/book?query=${encodeURIComponent(query)}`}>책</MenuLink>
        </nav>
      )}
    </div>
  );
});

export default Top;
