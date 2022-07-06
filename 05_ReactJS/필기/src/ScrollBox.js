import React from "react";

const ScrollBox = React.forwardRef((props, ref) => {
  const style = {
    border: "1px solid black",
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: "relative",
  };
  const innerStyle = {
    width: "100%",
    height: "650px",
    background: "linear-gradient(white, black)",
  };

  return (
    <div style={style} ref={ref}>
      <div style={innerStyle} />
    </div>
  );
});
 
export default ScrollBox;

