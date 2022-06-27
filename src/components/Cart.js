import React, { Component } from 'react'
import formatCurrency from '../util';
// import { Link } from 'react-router-dom';
// import Checkout from './Checkout';

export default class cart extends Component {
  render() {
    const {cartItems} = this.props;
    return (
      <div>
        {cartItems.length === 0? 
            <div className='cart cart-header'> 
                Your cart is empty right now. Please add courses in the cart from the list. 
            </div>
            :
            <div className='cart cart-header'>
                You have {cartItems.length} in the cart {" "}
            </div>
        }
        <div>
        <div className='cart'>
            <ul className='cart-items'>
                {cartItems.map(item =>(
                    <li key={item.id}>
                        <div>
                            <img src={item.image} alt="img"></img>
                        </div>
                        <div>
                            <div>{item.description}</div>
                            <div className='right'>
                                {formatCurrency(item.prices)}
                                <button className='button' onClick={()=>this.props.removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                        <hr></hr>
                    </li>
                ))}
            </ul>
        </div>
        {cartItems.length!==0 && (
            <div className='cart'>
            <div className='total'>
                <div>
                    Total:{" "}
                    {formatCurrency(
                        cartItems.reduce((a,c) => a + (c.prices*c.count),0)
                    )}
                </div>
                {/* <button className='button primary'>
                    <Link to="/Checkout">Go to Checkout</Link>
                </button> */}
            </div>
        </div>
        )}
      </div>
      </div>
    )
  }
}
