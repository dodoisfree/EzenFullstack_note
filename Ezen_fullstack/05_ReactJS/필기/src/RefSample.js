import React, { useRef } from "react";

const RefSample = () => {
  const input = useRef();
  const handleFocus = () => {
    input.current.focus();
  };
  
  return (
    <div>
       <input ref={input} />
    </div>
  );
};

export default RefSample;
