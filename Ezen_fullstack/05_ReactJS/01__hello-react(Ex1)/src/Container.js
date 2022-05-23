import React from "react"
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Container = () => {
    return(
        <div id="container">
        <Header />
        
        <hr />
        <Content />

        <hr />

        <Footer />
        </div>
    );
};

export default Container;