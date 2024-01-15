import React from 'react';
import Header from './Header';
import Cart from './Cart';
import Inventory from './Inventory';
import Crypto from './Crypto';
import sampleCrypto from '../sample-crypto'

class App extends React.Component {
    state = {
        cryptoCurrencies: {},
        cart: {},
    }

    componentDidMount() {
        // re-instate local storage
        const localCart = localStorage.getItem(this.props.match.params.storeId);

        if (localCart) {
            this.setState({ cart: JSON.parse(localCart) });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.cart));
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

    addToCart = id => {
        const cart = {...this.state.cart };

        if (cart[id]) {
            cart[id] += 1;
        } else {
            cart[id] = 1;
        }

        this.setState({ cart });
    }

  render() {
    return (
      <div className="crypto-sale">
        <div className="menu">
          <Header tagline="Every Coin Must Go!" />
            <ul className="crypto-list">
                {Object.keys(this.state.cryptoCurrencies).map(id => (<Crypto key={id} id={id} details={this.state.cryptoCurrencies[id]} addToCart={this.addToCart} />))}
            </ul>
        </div>
        <Cart cryptoCurrencies={this.state.cryptoCurrencies} cart={this.state.cart} />
        <Inventory addCrypto={this.addCrypto} loadSampleCrypto={this.loadSampleCrypto} />
      </div>
    );
  }
}

export default App;
