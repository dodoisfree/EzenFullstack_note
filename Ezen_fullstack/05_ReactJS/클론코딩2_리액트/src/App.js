import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/:menu" exact={true} element={<Content />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
