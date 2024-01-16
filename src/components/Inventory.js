import React from 'react'
import AddCryptoForm from './AddCryptoForm'
import EditCryptoForm from './EditCryptoForm'

class Inventory extends React.Component {
    render() {
        return (
            <div className='intentory'>
                <h2>Inventory</h2>
                {Object.keys(this.props.cryptoCurrencies).map(id => <EditCryptoForm key={id} id={id} crypto={this.props.cryptoCurrencies[id]} updateCrypto={this.props.updateCrypto} />)}
                <AddCryptoForm addCrypto={this.props.addCrypto} />
                <button onClick={this.props.loadSampleCrypto}>Load Sample Crypto</button>
            </div>
        )
    }
}

export default Inventory
