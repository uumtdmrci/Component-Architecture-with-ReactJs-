import React from 'react';
import CartSummary from "./CartSummary.js";
import { Link } from 'react-router-dom'
 

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav  } from 'reactstrap';

export default class Navi extends React.Component {
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand> <Link  to="/" style={{color: 'black'}}>Navigation</Link></NavbarBrand>
          <NavbarBrand> <Link  to="/form" style={{color: 'black'}}>Form</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <CartSummary removefromCart={this.props.removefromCart} cart={this.props.cart}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}