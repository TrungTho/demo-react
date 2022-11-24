import React, { Component } from "react";

const cartContext = React.createContext();

class CartProvider extends Component() {
  constructor(props) {
    super(props);

    this.state = { cartItems: [] };
    this.addNewItem = this.addNewItem.bind.call(this);
  }

  addNewItem(item) {
    this.setState({
      cartItems: this.state.cartItems.concat(item),
      addNewItem: this.addNewItem,
    });
  }

  render() {
    return (
      <cartContext.Provider value={{ cartItems: this.state.cartItems }}>
        {this.props.children}
      </cartContext.Provider>
    );
  }
}
