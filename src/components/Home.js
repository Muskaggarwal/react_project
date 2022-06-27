import React, { Component } from 'react';
import data from '../data.json';
import Products from './Products.js';
import Filter from './Filter';
import Cart from './Cart';
import Checkout from './Checkout';
import store from "../store";
import { Provider } from 'react-redux';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      sort: ""
    };
  }

  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x=>x.id !== product.id)
    })
  };

  addToCart =(product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach( item =>{
      if(item.id === product.id){
        //no. of count increases if the item is already in the cart
        alert("Already exists in cart");
        alreadyInCart = true;
      }
    });
    //if already not present then push that product into cart
    if(!alreadyInCart){
      cartItems.push({...product, count: 1});
    }
    this.setState({cartItems});
    alert("Item is successfully added to cart.")
    localStorage.setItem('myCart', JSON.stringify(this.state.cartItems))
  };

  sortProducts =(event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState(state => ({
      sort: sort,
      products: this.state.products
      .slice()
        .sort((a,b) => 
        sort === "lowest"
          ? a.prices > b.prices
            ? 1
              : -1
            : sort === "highest"
              ? a.prices < b.prices 
                ? 1
                  : -1
            : a.id < b.id 
              ? 1
              : -1
      ),
    }));
  };

  render(){
    return (
      <Provider store={store}>
        <div className="grid-container">
            <div className='content'>
              <div className='main'>
                <Filter count={this.state.products.length}
                  sort={this.state.sort}
                  sortProducts={this.sortProducts}
                ></Filter>
                <Products products={this.state.products} addToCart={this.addToCart}/>
              </div>
              <div className='side'>
                
                Your Cart Details
                <hr></hr>
                <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
              </div>
              <Checkout cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
            </div>
        </div>
      </Provider>
    );
  }
}

