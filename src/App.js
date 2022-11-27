import React, { useEffect, useState } from 'react';
import Header from './Header';
import CurrencyRate from './CurrencyRate';
import Exchange from './Exchange';
import Footer from './Footer';
import Context from './Context';
import './App.css';
import axios from 'axios';

function App() {
  const [error, setError] = useState(null); //Стейт для опрацювання помилки при GET запросі
  const [currentTime, setCurrentTime] = useState() //Стейт для показу часу
  const [update, setUpdate] = useState(); //Стейт для показу дати оновлення
  const [usd, setUsd] = useState(''); //Стейт для валюти долар
  const [eur, setEur] = useState(''); //Стейт для валюти євро
  const [gbp, setGbp] = useState(''); //Стейт для валюти фунт стерлінгів
  const [cny, setCny] = useState(''); //Стейт для валюти юань
  const [chf, setChf] = useState(''); //Стейт для валюти швейцарський франк
  const [aud, setAud] = useState(''); //Стейт для валюти австралійський долар
  const [cad, setCad] = useState(''); //Стейт для валюти канадський долар
  const [czk, setCzk] = useState(''); //Стейт для валютий чеська крона
  const [pln, setPln] = useState(''); //Стейт для валюти польська злота

  const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`; //Змінна url зберігає посилання на JSON файл куди відправляються GET запроси


  // Хук спочатку намагається виконати GET запрос та отримати курс валют і записати результат в кожний зі стейтів, якщо виконати GET запрос не вдається то повинна спрацювати помилка
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
      })
    } catch {
      setError('Виникла помилка, спробуйте трохи пізніше!');
    }
  }, [])


  // Годиник
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);
  }, []);

  // Змінні використовуються для формування дати(день,рік,місяць)
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  // Обєкт value, передається дочірним компонентам через Context.Provider
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
