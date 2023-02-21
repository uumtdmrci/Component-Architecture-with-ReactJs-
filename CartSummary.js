import React, { Component } from "react";
 import { Link } from 'react-router-dom'

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
export default class cartSummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown
          nav
          inNavbar
          className="justify-content-end"
          right
        >
          <DropdownToggle nav caret>
            Your Cart - {this.props.cart.length}
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map((cardItem) => (
              <DropdownItem key={cardItem.product.id}>
                <Badge color="danger" onClick={() => this.props.removefromCart(cardItem.product)}>-</Badge>
                    {cardItem.product.productName}
                 <Badge color="success">{cardItem.quantity}</Badge>
              </DropdownItem>
            ))}

            <DropdownItem divider />
            <DropdownItem> <Link to="cart">Cart</Link></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}
