import React from "react";
import Top from "./Top";
import Menu from "./Menu";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <Top />
      <Menu searchBtnClick/>
      <Routes>
        <Route path="searchbar" element={<SearchBar />}/>
      </Routes>
    </>
  );
};

export default React.memo(Header);
