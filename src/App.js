import React from 'react';
import Header from './Header';
import CurrencyRate from './CurrencyRate';
import Exchange from './Exchange';
import Footer from './Footer';
import Context from './Context';
import './App.css';

function App() {
  return (

    <div className="App">
      <Header />
      <main className='main'>
        <div className='container'>
          <p className='main__сurrent-date'>Сьогодні в нас:</p>
          <h2 className='main__update'>Дата останього оновлення:</h2>
        <CurrencyRate />
        <Exchange />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
