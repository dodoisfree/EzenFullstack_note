import React from "react";
import ContentCss from "../StyledComponents/ContentCss";
import CMid from "./CMid";
import CTop from "./CTop";

const Content = () => {
  new Array(0 + 12);

  return (
    <ContentCss>
      <form>
        <div className="joinArea">
          <CTop />
          <CMid />
        </div>
      </form>
    </ContentCss>
  );
};

export default Content;
