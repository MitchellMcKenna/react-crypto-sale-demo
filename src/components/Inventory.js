import React from 'react'
import AddCryptoForm from './AddCryptoForm'
import EditCryptoForm from './EditCryptoForm'

function Inventory(props) {
    return (
        <div className='intentory'>
            <h2>Inventory</h2>
            {Object.keys(props.cryptoCurrencies).map(id => (<EditCryptoForm key={id} id={id} crypto={props.cryptoCurrencies[id]} updateCrypto={props.updateCrypto} deleteCrypto={props.deleteCrypto} />))}
            <AddCryptoForm addCrypto={props.addCrypto} />
            <button onClick={props.loadSampleCrypto}>Load Sample Crypto</button>
        </div>
    );
}

export default Inventory
