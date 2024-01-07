import React from 'react';
import { getRandomStoreName } from '../helpers'

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Enter A Crypto Store</h2>
        <input type="test" required placeholder="Store Name" defaultValue={getRandomStoreName()}/>
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
