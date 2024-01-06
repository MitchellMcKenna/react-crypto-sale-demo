import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  render() {
    return (
      <div className="crypto-sale">
        <div className="menu">
          <Header tagline="Every Coin Must Go!" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
