import React, { useEffect, useRef, useState } from 'react'
import Header from './Header';
import Cart from './Cart';
import Inventory from './Inventory';
import Crypto from './Crypto';
import sampleCrypto from '../sample-crypto'

function App (props) {
    const [cart, setCart] = useState({});
    const [cryptoCurrencies, setCryptoCurrencies] = useState({});

    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            // re-instate local storage
            const localCart = localStorage.getItem(props.match.params.storeId);

            if (localCart) {
                setCart(JSON.parse(localCart));
            }
            mounted.current = true;
        } else {
            localStorage.setItem(props.match.params.storeId, JSON.stringify(cart));
        }
    }, [props.match.params.storeId, cart]);

    const addCrypto = crypto => {
        // Get current cryptoCurrencies state
        const newCryptoCurrencies = { ...cryptoCurrencies };

        newCryptoCurrencies[`crypto${Date.now()}`] = crypto;

        setCryptoCurrencies(newCryptoCurrencies);
    };

    const updateCrypto = (id, crypto) => {
        const newCryptoCurrencies = { ...cryptoCurrencies };
        newCryptoCurrencies[id] = crypto;
        setCryptoCurrencies(newCryptoCurrencies);
    }

    const deleteCrypto = id => {
        const newCryptoCurrencies = { ...cryptoCurrencies };
        delete newCryptoCurrencies[id];
        setCryptoCurrencies(newCryptoCurrencies);
    }

    const loadSampleCrypto = () => {
        setCryptoCurrencies({ ...sampleCrypto });
    };

    const addToCart = id => {
        const newCart = { ...cart };

        if (newCart[id]) {
            newCart[id] += 1;
        } else {
            newCart[id] = 1;
        }

        setCart(newCart);
    }

    const removeFromCart = id => {
        const newCart = {...cart};
        delete newCart[id];
        setCart(newCart);
    }

    return (
      <div className="crypto-sale">
        <div className="menu">
          <Header tagline="Every Coin Must Go!" />
            <ul className="crypto-list">
                {Object.keys(cryptoCurrencies).map(id => (<Crypto key={id} id={id} details={cryptoCurrencies[id]} addToCart={addToCart} />))}
            </ul>
        </div>
        <Cart cryptoCurrencies={cryptoCurrencies} cart={cart} removeFromCart={removeFromCart} />
        <Inventory addCrypto={addCrypto} updateCrypto={updateCrypto}  deleteCrypto={deleteCrypto} loadSampleCrypto={loadSampleCrypto} cryptoCurrencies={cryptoCurrencies} />
      </div>
    );
}

export default App;
