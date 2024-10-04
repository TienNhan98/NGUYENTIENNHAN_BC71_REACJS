import React, { Component } from "react";
import { dataShoe } from "./DataShoe";
import ListShoe from "./ListShoe";
import CartShoe from "./CartShoe";

export default class ExShoeRedux extends Component {
  render() {
    return (
      <div className="row align-items-start">
        <ListShoe />
        <CartShoe />
      </div>
    );
  }
}
