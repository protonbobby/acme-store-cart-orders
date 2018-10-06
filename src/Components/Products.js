import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../Reducers/products';

class Products extends Component {
  render() {
    console.log(this.props.products)
    return (
      <div>
        Products
      <hr />
        <ul>
          {
            this.props.products
              .map(product => {
                return (
                  <li key={product.id}>{product.name}</li>
                )
              })
          }
        </ul>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
