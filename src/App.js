import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import { loadProducts } from './Reducers/products';
import { reset } from './Reducers/orders';
import { loadCount } from './Reducers/count';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Orders from './Components/Orders';

const state = ({ products, count }) => ({
  itemsSold: count,
  products,
})

const dispatch = dispatch => ({
  init: () => {
    dispatch(loadProducts());
    dispatch(loadCount());
  },
  reset: () => dispatch(reset())
});

class App extends Component {
  componentDidMount() { this.props.init(); }

  render() {
    const { reset, itemsSold } = this.props
    return (
      <div>
        <Router>
          <div>
            <Route component={({ location }) => <Navbar path={location.pathname} reset={reset} itemsSold={itemsSold} />} />

            <Route path='/home' render={() => <img src="../dist/images/tacos.png" id="homeImg"></img>} replace />

            <Route exact path='/orders' component={Orders} replace />
            <Route exact path='/cart' component={Cart} replace />
          </div>
        </Router>
      </div>
    )
  }
};

export default connect(state, dispatch)(App);
