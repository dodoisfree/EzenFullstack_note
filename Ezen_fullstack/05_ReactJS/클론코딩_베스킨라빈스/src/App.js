import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import styled from "styled-components";

const AppCss = styled.div`
  .content {
    filter: brightness(1);
  }
`;

function App() {
  const [Shadow, setShadow] = useState(true);
  const shadowArea = useRef();

  const getShadow = React.useCallback((shadow) => {
      setShadow(shadow);
      if (Shadow === true) {
        setShadow(false);
        shadowArea.current.style.filter = "brightness(0.5)";
      } else {
        setShadow(true);
        shadowArea.current.style.filter = "brightness(1)";
      }
      console.log("App : " + Shadow);
    }, [Shadow]);
  return (
    <AppCss>
      <Header getShadow={getShadow} />
      <div className="content" ref={shadowArea}>
        <Main />
      </div>
    </AppCss>
  );
}

export default App;
