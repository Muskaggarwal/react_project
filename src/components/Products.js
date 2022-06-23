import React, { Component } from 'react';
import formatCurrency from '../util';

export default class products extends Component {
  render() {
    return (
      <div>
        <ul className='products'>
            {this.props.products.map(product => (
                <li key={product.id}>
                    <div className='product'>
                        <img src={product.image} alt="img" className='productimage'></img>
                        <div className='product-price'>
                            <a href={"#" + product.id}><p>{product.description}</p></a>
                            <p className='author'>Author: {product.author}</p>
                            <p>{formatCurrency(product.prices)}/-</p>
                            <button onClick={() =>this.props.addToCart(product)} className='button primary'>Add to Cart</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
      </div>
    )
  }
}
