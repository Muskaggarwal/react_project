import React, { Component } from 'react';
import formatCurrency from '../util';
import Modal from 'react-modal';
// import { fetchProducts } from '../actions/productActions';
// import {connect} from 'react-redux';

export default class products extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: null,
    }
  }
  // componentDidMount(){
  //   this.props.fetchProducts();
  // }
  openModal = (product) => {
    this.setState({product});
  };
  closeModal = () => {
    this.setState({product: null});
  }

  render() {
    const {product} = this.state;
    return (
      <div>
        {/* {
          !this.props.products ? ( 
            <div> Loading... </div>
          ) : ( */}
          <ul className='products'>
            {this.props.products.map(product => (
                <li key={product.id}>
                    <div className='product'>
                        <img src={product.image} alt="img" className='productimage'></img>
                        <div className='product-price'>
                            <a href={"#" + product.id} onClick={() => this.openModal(product)}>
                              <p>{product.description}</p>
                            </a>
                            <p className='author'>Author: {product.author}</p>
                            <div style={{display:"flex", justifyContent: "end"}}>
                              <p>{formatCurrency(product.prices)}/-</p>
                              <button onClick={() =>this.props.addToCart(product)} style={{float: "right"}} className='button primary'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
          </ul>
        {/* )} */}
        {
          product && (
            <Modal isOpen={true} onRequestClose={this.closeModal} className='react-modal'>
              <button className='close-modal' onClick={this.closeModal}>X</button>
              <div className='product-details'>
                <img src={product.image} alt="img"></img>
                  <p>
                    {product.author}
                  </p>
                  <p>
                  <strong>{product.description}</strong>
                  </p>
              </div>
              <div className='description'>
                <div className='details-box'>
                  <p>
                        <strong>Course Details</strong>
                        <pre>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </pre>
                        <pre>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</pre>
                        <br/>
                        <pre>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </pre>
                        <pre>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</pre>
                        <br/>
                        <pre>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </pre>
                        <pre>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</pre>
                  </p>
                </div>
                <div className='product-price-details'>
                    <div className='value'>
                      {formatCurrency(product.prices)}
                    </div>
                    <br/>
                    <div className='timeLeft'>
                      8 hours left for this price.
                    </div>
                    <br/>
                    <button className='button primary' onClick={() => {
                      this.props.addToCart(product);
                      this.closeModal();
                    }}
                    >Add to Cart</button>
                    <br/>
                    <button className='button primary' onClick={() => {
                      this.props.addToCart(product);
                      this.closeModal();
                    }}
                    >Add to Wishlist</button>
                </div>
              </div>
            </Modal>
          )
        }
      </div>
    )
  }
}
//fuction and action and connect has its own parameter
// export default connect((state) => ({products: state.products.items}), {
//   fetchProducts,
// })(products);