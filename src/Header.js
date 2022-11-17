import React from "react";
import Logo from '../src/logo.svg'

function Header(){
  return(
    <div className="Header">
    <header className='header'>
        <div className='container'>
          <div className='header__top'>
            <a className='header__logo-link' href='#'><img className='header__logo' src={Logo} /></a>
            <h1 className='header__title'>Обміняйко</h1>
          </div>
        </div>
      </header>
    </div>
  )
}


export default Header;