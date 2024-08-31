import React, { Component } from "react";
import ReponsiveNavbar from "./ReponsiveNavbar";
import Header from "./Header";
import PageContent from "./PageContent";
import Footer from "./Footer";

export default class BaiTap1 extends Component {
  render() {
    return (
      <div>
        <ReponsiveNavbar />
        <Header />
        <PageContent />
        <Footer />
      </div>
    );
  }
}
