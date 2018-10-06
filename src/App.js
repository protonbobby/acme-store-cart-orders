import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { loadProducts } from './Reducers/products';
import { loadOrders } from './Reducers/orders';
import Nav from './Components/Nav';
import Cart from './Components/Cart';
import Orders from './Components/Orders';

class App extends Component {
  componentDidMount() {
    this.props.loadProducts();
    this.props.loadOrders();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Router>
          <div>
            <Route component={({ location }) => <Nav path={location.pathname} />} />

            <Route exact path='/orders' component={Orders} replace />
            <Route exact path='/cart' component={Cart} replace />
          </div>
        </Router>
      </div>
    )
  }
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
export default connect(mapStateToProps, mapDispatchToPtops)(App);