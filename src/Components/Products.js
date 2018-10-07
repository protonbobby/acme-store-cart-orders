import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../Reducers/products';

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Tortillas: 0,
      Cheese: 0,
      Salsa: 0,
      Limes: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, product, direction) {
    if (direction) {
      return this.setState({
        [product]: this.state[product] + 1,
      })
    } else if (this.state[product] > 0) {
      this.setState({
        [product]: this.state[product] - 1,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    const { handleChange } = this;
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
                    {this.state[product.name]} ordered <br />
                    <button
                      onClick={(e) => handleChange(e, product.name, true)} className='button'>+</button>

                    <button
                      onClick={(e) => handleChange(e, product.name, false)} className='button'>-</button>
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
