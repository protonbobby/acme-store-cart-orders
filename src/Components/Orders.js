import React, { Component } from 'react';
import { connect } from 'react-redux';

class Orders extends Component {
  render() {
    return (
      <div>
        Orders
        <hr />
        <ul>
          {

          }
        </ul>

      </div>
    )
  };
};

//____________________________________________
const mapStateToProps = ({ products, orders }) => ({
  products,
  orders,
})
const mapDispatchToPtops = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
  loadOrders: () => dispatch(loadOrders()),
})
export default connect(mapStateToProps, mapDispatchToPtops)(Orders);
