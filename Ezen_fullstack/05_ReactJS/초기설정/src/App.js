import React from "react";
import MenuLink from "./components/MenuLink";

import MyState from "./pages/MyState";
import DateRange1 from "./pages/DateRange1";
import MyReducer from "./pages/MyReducer";
import DateRange2 from "./pages/DateRange2";
import MyEffect from "./pages/MyEffect";
import MyRef from "./pages/MyRef";
import MyCallback from "./pages/MyCallback";
import MyMemo from "./pages/MyMemo";
import MyWidth from "./pages/MyWidth";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>06-hook-event</h1>
      <nav>
        <MenuLink to="/mystate">MyState</MenuLink>
        <MenuLink to="/datesrange1">DateRange1</MenuLink>
        <MenuLink to="/myeffect">MyEffect</MenuLink>
        <MenuLink to="/myref">MyRef</MenuLink>
        <MenuLink to="/myreducer">MyReducer</MenuLink>
        <MenuLink to="/daterange2">DateRange2</MenuLink>
        <MenuLink to="/mymemo">MyMemo</MenuLink>
        <MenuLink to="/mycallback">MyCallback</MenuLink>
        <MenuLink to="/mywidth">MyWidth</MenuLink>
      </nav>
      <hr />

      <Routes>
        <Route path="/mystate" element={<MyState />} />
        <Route path="/datesrange1" element={<DateRange1 />} />
        <Route path="/myeffect" element={<MyEffect />} />
        <Route path="/myref" element={<MyRef />} />
        <Route path="/myreducer" element={<MyReducer />} />
        <Route path="/daterange2" element={<DateRange2 />} />
        <Route path="/mymemo" element={<MyMemo />} />
        <Route path="/mycallback" element={<MyCallback />} />
        <Route path="/mywidth" element={<MyWidth />} />
      </Routes>
    </div>
  );
}

export default App;
