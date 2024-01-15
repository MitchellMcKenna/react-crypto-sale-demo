import React from 'react'
import { formatPrice } from '../helpers'

class Crypto extends React.Component {
    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        const addToCart = this.props.addToCart;

        return (
            <li className='menu-crypto'>
                <img src={image} alt={name} />
                <h3 className='crypto-name'>
                    {name}
                    <span className='price'>{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToCart(this.props.id)}>{isAvailable ? 'Add to Cart' : 'Sold Out'}</button>
            </li>
        )
    }
}

export default Crypto;