import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SHOE } from "./redux/const";

class ItemShoe extends Component {
  render() {
    let { dataItemShoe, dataHandleAddToCart } = this.props;
    return (
      <div className="col-3 mb-2 align-content-end text-start border border-danger rounded">
        <p>{dataItemShoe.name}</p>
        <img src={dataItemShoe.image} alt="" width={50} />
        <button
          onClick={() => {
            dataHandleAddToCart(dataItemShoe);
          }}
          className="btn btn-danger"
        >
          Add
        </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    dataHandleAddToCart: (shoe) => {
      let action = {
        type: ADD_SHOE,
        payload: shoe,
      };
      dispatch(action);
    },
  };
};
// ở đây trước mapDispatchToProps có null là vì mặc định trước đó phải có mapStateToProps, nếu không có thì phải null
export default connect(null, mapDispatchToProps)(ItemShoe);
