import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  render() {
    let { dataListShoe, dataHandleAddToCart } = this.props;
    return (
      <div className="row col-6">
        {dataListShoe.map((itemShoe, index) => {
          return <ItemShoe key={index} dataItemShoe={itemShoe} />;
        })}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dataListShoe: state.listShoe,
  };
};
export default connect(mapStateToProps)(ListShoe);
