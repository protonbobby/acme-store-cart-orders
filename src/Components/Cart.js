import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import Products from './Products';

class Cart extends Component {
  render() {
    return (
      <div>
        <Products />
        <Button color='primary'>Create Order</Button>
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
