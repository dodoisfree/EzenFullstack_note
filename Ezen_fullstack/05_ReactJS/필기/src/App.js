import React from "react";

function App() {
  const name = "리액트";

  return ( 
    <div>
      {name == "리액트" && <h1>and 연산자 리액트입니다</h1>}
    </div>
  );
}

export default App;