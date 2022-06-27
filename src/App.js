import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Profile from './components/Profile';
import Wishlist from './components/Wishlist';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="grid-container">
          <header>
              <a href="/"><img src="images/logomain.png" alt="HashedIn" className='productimage'></img></a>
              <div className='list'>
                <a href='/'>Courses</a>
                <a href='/Wishlist'>My Wishlist</a>
                <a href='/Checkout'><img src="images/shopping.png" alt="cart"></img></a>
                <a href='/Profile'><img src="images/profile.png" alt="prof"></img></a>
              </div>
          </header>
          <main>
          <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/Checkout' element={< Checkout />} ></Route>
                 <Route exact path='/Profile' element={< Profile/>} ></Route>
                 <Route exact path='/Wishlist' element={< Wishlist/>} ></Route>
          </Routes>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
