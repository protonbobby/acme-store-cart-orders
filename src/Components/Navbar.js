import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import { activeNav, inactiveNav } from '../selectors';

const Navbar = ({ orders, products, path }) => {
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            to='/home'
            tag={RRNavLink}
            replace
            className={activeNav('/home', path)}
            style={inactiveNav('/home', path)}>
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to='/cart'
            tag={RRNavLink}
            replace
            className={activeNav('/cart', path)}
            style={inactiveNav('/cart', path)}>
            Cart
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to='/orders'
            tag={RRNavLink}
            replace
            className={activeNav('/orders', path)}
            style={inactiveNav('/orders', path)}>
            Orders ({orders.length})
          </NavLink>
        </NavItem>
      </Nav>

      <div className='itemsSold'>
        0 Items Sold!!
        </div>
      <Button color='warning'>Reset</Button>
    </div >
  )
}
//____________________________________________
const mapStateToProps = ({ orders, products }) => ({
  orders,
  products,
})

export default connect(mapStateToProps)(Navbar);

