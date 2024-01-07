import React from 'react';
import { getRandomStoreName } from '../helpers'

class StorePicker extends React.Component {
    myInput = React.createRef();
    goToCryptoStore = (event) => {
        event.preventDefault();

        // Grab the store name from the input field
        const cryptoStoreName = this.myInput.current.value;

        // Change the page to /store/<storeName>
        this.props.history.push(`/store/${cryptoStoreName}`);
    }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToCryptoStore}>
        <h2>Enter A Crypto Store</h2>
        <input type="test" ref={this.myInput} required placeholder="Store Name" defaultValue={getRandomStoreName()}/>
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
