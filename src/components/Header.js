import React from 'react'

const Header = props => (
    <header className='top'>
      <div className='order'>
        <h1>
          Crypto
          <span className='logo'>
          </span>
          Sale!
        </h1>
        <h3 className='tagline'><span>{props.tagline}</span></h3>
      </div>
    </header>
)

export default Header;
