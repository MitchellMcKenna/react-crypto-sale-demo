import React from 'react'
import { formatPrice } from '../helpers'
import { TransitionGroup, CSSTransition } from'react-transition-group'

function Cart(props){
    const renderCartItem = (id) => {
        const crypto = props.cryptoCurrencies[id]
        const count = props.cart[id]
        const isAvailable = crypto && crypto.status === 'available'

        if (!crypto) {
            return null
        }

        if (!isAvailable) {
            return (
                <CSSTransition classNames="cart-fade" timeout={{ enter: 250, exit: 250 }} key={id}>
                    <li key={id}>Sorry, {crypto ? crypto.name : 'this crypto'} is no longer available!</li>
                </CSSTransition>
            )
        }

        return (
            <CSSTransition classNames="cart" timeout={{ enter: 250, exit: 250 }} key={id}>
                <li key={id}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition classNames="count" key={count} timeout={{ enter: 250, exit: 250 }}>
                                <span className='count'>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        x {crypto.name} {formatPrice(crypto.price)}
                        <button onClick={() => props.removeFromCart(id)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
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
            <TransitionGroup component="ul" className='cart'>
                {Object.keys(cart).map(id => renderCartItem(id))}
            </TransitionGroup>
            <h3>Total: <strong>{formatPrice(total)}</strong></h3>
        </div>
    )
}

export default Cart