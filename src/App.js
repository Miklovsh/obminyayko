import React, { useEffect, useState } from 'react';
import Header from './Header';
import CurrencyRate from './CurrencyRate';
import Exchange from './Exchange';
import Footer from './Footer';
import Context from './Context';
import './App.css';
import axios from 'axios';

function App() {
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState()
  const [update, setUpdate] = useState();
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');
  const [gbp, setGbp] = useState('');
  const [cny, setCny] = useState('');
  const [chf, setChf] = useState('');
  const [aud, setAud] = useState('');
  const [cad, setCad] = useState('');
  const [czk, setCzk] = useState('');
  const [pln, setPln] = useState('');

  const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;


  useEffect(() => {
    try {
      axios.get(url).then((response) => {
        setUpdate(response.data[25].exchangedate);
        setUsd(response.data[25].rate.toFixed(2));
        setEur(response.data[32].rate.toFixed(2));
        setGbp(response.data[24].rate.toFixed(2));
        setCny(response.data[2].rate.toFixed(2));
        setChf(response.data[22].rate.toFixed(2));
        setAud(response.data[0].rate.toFixed(2));
        setCad(response.data[1].rate.toFixed(2));
        setCzk(response.data[4].rate.toFixed(2));
        setPln(response.data[33].rate.toFixed(2));
        // console.log(response.data);
      })
    } catch {
      setError('Виникла помилка, спробуйте трохи пізніше!');
    }
  }, [])



  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);
  }, []);


  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;


  const value = {
    usd,
    eur,
    cny,
    gbp,
    chf,
    aud,
    cad,
    czk,
    pln,
  }


  if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <Context.Provider value={value}>
        <div className="App">
          <Header />
          <main className='main'>
            <div className='container'>
              <p className='main__сurrent-date'>Сьогодні в нас: {day}.{month}.{year} {currentTime}</p>
              <h3 className='main__update'>Дата оновлення: {update} </h3>
              <h2 className="main__info">Курс від національного банку України</h2>
              <CurrencyRate />
              <Exchange />
            </div>
          </main>
          <Footer />
        </div>
      </Context.Provider>
    );
  }
}



export default App;
