import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <hr />
        <Link to='/home'>Home</Link>
        <Link to='/cart'>Cart (0)</Link>
        <Link to='/orders'>Orders (0)</Link>
      </div>
    )
  }
}
//____________________________________________
const mapStateToProps = ({ orders, products }) => ({
  orders,
  products,
})

export default connect(mapStateToProps)(Nav);

