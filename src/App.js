import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='header__container'>
          <div className='header__top'>
            <img className='header__logo' />
            <h1 className='header__title'>Обміняйко</h1>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='main__container'>
          <p className='main__сurrent-date'>Сьогодні в нас:</p>
          <h2 className='main__update'>Дата останього оновлення:</h2>
          <div className='main__currency-inner'>
            <div className='main__currency-box'>
              <h3 className='main__currency'>Долар</h3>
              <h4 className='main__currency-value'>40 гривень</h4>
            </div>
            <div className='main__currency-box'>
              <h3 className='main__currency'>Євро</h3>
              <h4 className='main__currency-value'>40 гривень</h4>
            </div>
            <div className='main__currency-box'>
              <h3 className='main__currency'>Фунт стерлінгів</h3>
              <h4 className='main__currency-value'>40 гривень</h4>
            </div>
            <div className='main__currency-box'>
              <h3 className='main__currency'>Юань</h3>
              <h4 className='main__currency-value'>40 гривень</h4>
            </div>
          </div>
          <div className='main__exchange'>
            <div className='main__exchange-inner'>
              <div className='main__exchange-box'>
                <label className='main__exchange-label'>Хочу обміняти</label>
                <input className='main__exchange-input' type="text" />
                <select className='main__exchange-selecet'>
                  <option className='main__exchange-option'>USD</option>
                  <option className='main__exchange-option'>GBP</option>
                  <option className='main__exchange-option'>EUR</option>
                  <option className='main__exchange-option'>UAH</option>
                  <option className='main__exchange-option'>CNY</option>
                </select>
              </div>
              <div className='main__exchange-box'>
                <label className='main__exchange-label'>Отримаю</label>
                <input className='main__exchange-input' type="text" />
                <select className='main__exchange-selecet'>
                  <option className='main__exchange-option'>USD</option>
                  <option className='main__exchange-option'>GBP</option>
                  <option className='main__exchange-option'>EUR</option>
                  <option className='main__exchange-option'>UAH</option>
                  <option className='main__exchange-option'>CNY</option>
                </select>
              </div>
            </div>
            <input className='main__exchange-btn' type="button" value="обміняти" />
          </div>
        </div>
      </main>
      <footer className='footer'>
        <div className='footer__developer'>
          <p className='footer__developer-label'>Розробник - </p>
          <a className='footer__developer-name' href="https://www.instagram.com/miklovsh_viktor/" target="_blank">Мікловш Віктор</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
