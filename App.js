import React, { Component } from "react";
import Navi from "./Navi.js";
import ProductList from "./ProductList.js";
import CategoryList from "./CategoryList.js";
import NotFound from "./NotFound";
import CartList from "./CartList";
 import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route } from "react-router-dom";

import alertify from "alertifyjs";
import formDemo from "./formDemo";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?categoryId=" + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addtoCart = (product) => {
    
    alertify.set("notifier", "position", "bottom-center");
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added", 1.5);
  };
  removefromCart = (product) => {
    let newCarti = this.state.cart;
    var addedItem = newCarti.find((c) => c.product.id === product.id);
    if (addedItem.quantity > 1) {
      addedItem.quantity -= 1;
      this.setState({ quantity: addedItem.quantity });
      alertify.error(product.productName + " 1 Piece Deleted", 1.5);
    } else {
      var newCart = newCarti.filter((c) => c.product.id !== product.id);
      this.setState({ cart: newCart });
      alertify.error(product.productName + " Deleted", 1.5);
    }
  };
  render() {
    let productInfo = { title: "Product List", text2: "text2" };
    let categoryInfo = { title: "Category List", text2: "text2" };
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="12">
              <Navi
                cart={this.state.cart}
                removefromCart={this.removefromCart}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
                title={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      title={productInfo}
                      products={this.state.products}
                      addtoCart={this.addtoCart}
                      currentCategory={this.state.currentCategory}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removefromCart={this.removefromCart}
                    />
                  )}
                ></Route>
                <Route path="/Form" component={formDemo}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
