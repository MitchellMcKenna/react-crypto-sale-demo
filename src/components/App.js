import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Crypto from './Crypto';
import sampleCrypto from '../sample-crypto'

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
    };

    loadSampleCrypto = () => {
        this.setState({ cryptoCurrencies: sampleCrypto });
    };

  render() {
    return (
      <div className="crypto-sale">
        <div className="menu">
          <Header tagline="Every Coin Must Go!" />
            <ul className="crypto-list">
                {Object.keys(this.state.cryptoCurrencies).map(id => (<Crypto key={id} details={this.state.cryptoCurrencies[id]} />))}
            </ul>
        </div>
        <Order />
        <Inventory addCrypto={this.addCrypto} loadSampleCrypto={this.loadSampleCrypto} />
      </div>
    );
  }
}

export default App;
