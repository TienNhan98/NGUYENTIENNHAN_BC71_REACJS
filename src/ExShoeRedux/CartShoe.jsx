import React, { Component } from "react";
import { connect } from "react-redux";
import { CHANGE, DELETE } from "./redux/const";
import { type } from "@testing-library/user-event/dist/type";

class CartShoe extends Component {
  renderTable = () => {
    // console.log("📢[CartShoe.jsx:5]: this.props: ", this.props);
    let { dataCart, datahandeleDeleteCart, dataHandleChangeTotal } = this.props;
    return dataCart.map((itemShoe, index) => {
      return (
        <tr key={index}>
          <td>{itemShoe.name}</td>
          <td>
            <img src={itemShoe.image} alt="" width={50} />
          </td>
          <td>{itemShoe.price}.000</td>
          <td>
            <button
              onClick={() => {
                dataHandleChangeTotal(itemShoe.id, +1);
              }}
              className="btn btn-success"
            >
              +
            </button>
            <strong>{itemShoe.total}</strong>
            <button
              onClick={() => {
                dataHandleChangeTotal(itemShoe.id, -1);
              }}
              className="btn btn-info"
            >
              -
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                datahandeleDeleteCart(itemShoe.id);
              }}
              className="btn btn-dark"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Imgage</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
        {this.props.dataCart.length === 0 && (
          <h3 className="text-center">No items to display</h3>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dataCart: state.cart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    datahandeleDeleteCart: (idShoe) => {
      let action = {
        type: DELETE,
        payload: idShoe,
      };
      dispatch(action);
    },
    dataHandleChangeTotal: (idShoe, option) => {
      let action = {
        type: CHANGE,
        payload: { idShoe, option },
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);
