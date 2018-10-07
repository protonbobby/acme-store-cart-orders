import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../Reducers/products';

class Products extends Component {
  render() {
    console.log(this.props.products)
    return (
      <div>
        <h2>Products</h2>
        <hr />
        <div className='flexbox'>
          {
            this.props.products
              .map(product => {
                return (
                  <div className='products' key={product.id}>{product.name} <br />
                    0 ordered <br />
                    <button className='button'>+</button>
                    <button className='button'>-</button>
                  </div>
                )
              })
          }
        </div>
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
