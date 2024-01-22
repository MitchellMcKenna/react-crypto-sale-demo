import React from 'react';
import { getRandomStoreName } from '../helpers'

function StorePicker(props) {
    const myInput = React.createRef();
    const goToCryptoStore = (event) => {
        event.preventDefault();

        // Grab the store name from the input field
        const cryptoStoreName = myInput.current.value;

        // Change the page to /store/<storeName>
        props.history.push(`/store/${cryptoStoreName}`);
    }

    return (
      <form className="store-selector" onSubmit={goToCryptoStore}>
        <h2>Enter A Crypto Store</h2>
        <input type="text" ref={myInput} required placeholder="Store Name" defaultValue={getRandomStoreName()}/>
        <button type="submit">Visit Store</button>
      </form>
    );
}

export default StorePicker;
