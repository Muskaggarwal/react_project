import React, { Component } from 'react'

export default class Wishlist extends Component {
  render() {
    return (
        <div className='wishlist'>
        <div className='black'>
            <div className='profile-title'>
                Discover latest courses on React
            </div>
            <div className='profile-react'>
                <img src='images/react.png' alt='react' width="500" height="60"></img>
            </div>
        </div>
        <label> My Wishlist</label>
    </div>
    )
  }
}
