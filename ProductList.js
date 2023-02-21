import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h3>
          {this.props.title.title}-- {this.props.currentCategory}
        </h3>

        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  {" "}
                  <Button
                    outline
                    color="info"
                    onClick={() => this.props.addtoCart(product)}
                   >
                    + add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
