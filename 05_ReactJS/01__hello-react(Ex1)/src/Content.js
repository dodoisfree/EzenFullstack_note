import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Content = () => {
    return(
        <div id="content">
            <Sidebar />

            <hr/>

            <Main />
        </div>
    );
};

export default Content;