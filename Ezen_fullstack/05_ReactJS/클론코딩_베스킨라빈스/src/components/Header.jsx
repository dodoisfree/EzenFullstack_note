import React, { useState } from "react";
import Top from "./Top";
import Menu from "./Menu";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const duration = 400;

const Motion = styled.div`
  .transSrcBar {
    &-enter {
      background-color: red;
      transition: all 0.5s;
    }
    &-enter-active {
      background-color: orange;
    }
    &-exit {
      position: absolute;
      top: 146px;
      opacity: 0;
      transition: all ${duration}ms;
    }
    &-exit-active {
      position: absolute;
      top: 186px;
      opacity: 1;
      transition: all ${duration}ms;
    }
  }
`;

const Header = (shadow) => {

  const [child, setChild] = useState(true);

  const getChild = React.useCallback((childe) => {
      setChild(childe);
      if (child === true) {
        setChild(false);
      } else {
        setChild(true);
      }
      shadow.getShadow(child);
      console.log('Header : ' + child);
    }, [child, shadow]);

  return (
    <Motion>
      <Top getChild={getChild} />
      <Menu />
      <CSSTransition in={child} classNames="transSrcBar" timeout={duration}>
        <Routes>
          <Route path="searchbar" element={<SearchBar />} />
        </Routes>
      </CSSTransition>
    </Motion>
  );
};

export default React.memo(Header);
