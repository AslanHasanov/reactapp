import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <header className='text-center'>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
        </header>
    )
  }
}

export default Header