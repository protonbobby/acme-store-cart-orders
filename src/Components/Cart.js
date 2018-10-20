import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './Products';

class Cart extends Component {
  render() {
    return (
      <div>
        <Products />
      </div >
    )
  }
}

//___________________________________________
const mapStateToProps = ({ products, orders }) => ({
  products,
  orders,
})

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
