import React from 'react'
import { formatPrice } from '../helpers'

function Cart(props){
    const renderCartItem = (id) => {
        const crypto = props.cryptoCurrencies[id]
        const count = props.cart[id]
        const isAvailable = crypto && crypto.status === 'available'

        if (!crypto) {
            return null
        }

        if (!isAvailable) {
            return <li key={id}>Sorry, {crypto ? crypto.name : 'this crypto'} is no longer available!</li>
        }

        return (
            <li key={id}>
                {count} x {crypto.name} {formatPrice(crypto.price)}
                <button onClick={() => props.removeFromCart(id)}>&times;</button>
            </li>
        );
    }

    const cart = props.cart
    const cryptoCurrencies = props.cryptoCurrencies

    const total = Object.keys(cart).reduce((prevTotal, id) => {
        if (cryptoCurrencies && cryptoCurrencies[id] && cryptoCurrencies[id].status === 'available') {
            return prevTotal + (cryptoCurrencies[id].price * cart[id])
        }
        return prevTotal
    }, 0)

    return (
        <div className='cart-wrap'>
            <h2>Cart</h2>
            <ul className='cart'>
                {Object.keys(cart).map(id => renderCartItem(id))}
            </ul>
            <h3>Total: <strong>{formatPrice(total)}</strong></h3>
        </div>
    )
}

export default Cart