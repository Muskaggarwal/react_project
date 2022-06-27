import React, { Component } from 'react';
import formatCurrency from '../util'; 
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  render() {
    const {cartItems} = this.props;

    return (
      <div className="grid-container">
          <div className='content'>
            <div className='Checkoutmain'>
              {cartItems?.length === 0? 
                  <div className='cart cart-header'> 
                      Your cart is empty right now. Please add courses in the cart from the list. 
                  </div>
                  :
                  <div className='cart cart-header'>
                      You have {cartItems?.length} in the cart {" "}
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
                                      <button className='button' onClick={()=>this.props.wishList(item)}>Wishlist</button>
                                  </div>
                              </div>
                              <hr></hr>
                          </li>
                      ))}
                  </ul>
              </div>
              </div>
            </div>
            <div className='Checkoutside'>
              <div>
                <span> Total Amount</span>
                <div className='total'>
                  <div>
                    Total:{" "}
                      {formatCurrency(
                        cartItems.reduce((a,c) => a + (c.prices*c.count),0)
                      )}
                      </div>
                      <button className='button primary' onClick={() => this.setState({ show: !this.state.show })}>
                        Checkout
                      </button>
                </div>
              </div>
            </div>
            <Modal show={this.state.show} animation={false} dialogClassName="my-modal">
                <Modal.Header>
                  <Modal.Title></Modal.Title>
                    </Modal.Header>
                      <Modal.Body>You have successfully placed your Order.</Modal.Body>
                      <br/>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => this.setState({ show: !this.state.show })}>
                            OK
                          </Button>
                        </Modal.Footer>
            </Modal>
        </div>
      </div>
    )
  }
}
