import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    state = {
        cryptoCurrencies: {},
        order: {},
    }

    addCrypto = crypto => {
        // Get current cryptoCurrencies state
        const cryptoCurrencies = { ...this.state.cryptoCurrencies };

        cryptoCurrencies[`crypto${Date.now()}`] = crypto;

        this.setState({ cryptoCurrencies });
    }
  render() {
    return (
      <div className="crypto-sale">
        <div className="menu">
          <Header tagline="Every Coin Must Go!" />
        </div>
        <Order />
        <Inventory addCrypto={this.addCrypto} />
      </div>
    );
  }
}

export default App;
