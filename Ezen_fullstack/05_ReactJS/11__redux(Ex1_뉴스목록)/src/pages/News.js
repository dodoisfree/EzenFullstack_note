import React from 'react';
import Spinner from '../components/Spinner';
import NewsItem from '../components/NewsItem';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../Slice/NewsSlice';


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

const News = () => {
  React.useEffect(() => console.clear(), []);

  const { data, loading, error } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div>
      <Spinner visible={loading} />
      {error ? (
        <div>
          <h1>Oops~!!! {error.code} Error.</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        <ListContainer>
           {data && data.map((v, i) => <NewsItem key={i} item={v} />)}
        </ListContainer>
      )}
    </div>
  );
};

export default React.memo(News);