import React from 'react';
import AddCryptoForm from './AddCryptoForm'

class Inventory extends React.Component {
  render() {
    return (
      <div className="intentory">
        <h2>Inventory</h2>
        <AddCryptoForm addCrypto={this.props.addCrypto} />
          <button onClick={this.props.loadSampleCrypto}>Load Sample Crypto</button>
      </div>
    );
  }
}

export default Inventory;
