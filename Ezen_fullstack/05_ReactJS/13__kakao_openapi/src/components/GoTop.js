import React, { memo } from 'react';
import styled from 'styled-components';

import btnTop from '../assets/img/btnTop.png';

const TopButton = styled.button`
  width: 50px;
  height: 50px;
  background: url(${btnTop}) center center no-repeat;
  background-size: 100% 100%;
  border: 0;
  cursor: pointer;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 100;
`;

const GoTop = memo(() => {
  return (
    <TopButton onClick={e => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }} />
  );
});

export default GoTop;