import React from 'react'
import { formatPrice } from '../helpers'

function Crypto(props) {
    const { image, name, price, desc, status } = props.details;
    const isAvailable = status === 'available';
    const addToCart = props.addToCart;

    return (
        <li className='menu-crypto'>
            <img src={image} alt={name} />
            <h3 className='crypto-name'>
                {name}
                <span className='price'>{formatPrice(price)}</span>
            </h3>
            <p>{desc}</p>
            <button disabled={!isAvailable} onClick={() => props.addToCart(props.id)}>{isAvailable ? 'Add to Cart' : 'Sold Out'}</button>
        </li>
    )
}

export default Crypto;