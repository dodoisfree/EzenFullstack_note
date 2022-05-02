import React from "react";
import { Routes, Route, } from "react-router-dom";
import Header from "./components/Header";
import Content from "./page/Content";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import Meta from "./components/Meta";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Meta />
      <Header />
      <Routes>
        <Route path="/home" exact={true} element={<Content/>}/>
        <Route path="/link:num" element={<Content/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
