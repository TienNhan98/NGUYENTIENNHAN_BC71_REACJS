import React, { Component } from "react";
import PageFeature from "./PageFeature";

export default class PageContent extends Component {
  render() {
    return (
      <div>
        <section classname="pt-4">
          <div classname="container px-lg-5">
            <PageFeature />
          </div>
        </section>
      </div>
    );
  }
}
