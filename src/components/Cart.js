import React from 'react'
import { formatPrice } from '../helpers'

class Cart extends React.Component {
    renderCartItem(id) {
        const crypto = this.props.cryptoCurrencies[id]
        const count = this.props.cart[id]
        const isAvailable = crypto.status === 'available'
        if (!isAvailable) {
            return <li key={id}>Sorry, {crypto ? crypto.name : 'this crypto'} is no longer available!</li>
        }
        return <li key={id}>{count} x {crypto.name} {formatPrice(crypto.price)}</li>
    }

    render() {
        const cart = this.props.cart
        const cryptoCurrencies = this.props.cryptoCurrencies

        const total = Object.keys(cart).reduce((prevTotal, id) => {
            if (cryptoCurrencies && cryptoCurrencies[id].status === 'available') {
                return prevTotal + (cryptoCurrencies[id].price * cart[id])
            }
            return prevTotal
        }, 0)

        return (
            <div className='cart-wrap'>
                <h2>Cart</h2>
                <ul className='cart'>
                    {Object.keys(cart).map(id => this.renderCartItem(id))}
                </ul>
                <h3>Total: <strong>{formatPrice(total)}</strong></h3>
            </div>
        )
    }
}

export default Cart
