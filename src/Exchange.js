import React, { useContext, useState } from "react";
import Context from "./Context";


function Exchange() {

  const value = useContext(Context); // дістав обєкт value який передав за допомогою Context.Provider з батьківського компоненту App

  const [inputMainState, setInputMainState] = useState(''); // Стейт для інпупа куди буде вводитися сума яку потрібно конвертувати
  const [result, setResult] = useState(0); //Стейт в який записується результат функції count

  let inputMain = React.createRef(); // створення нового ref для інпута для вводу суми яку потрібно конвертувати
  let selectRef = React.createRef(); //створення нового ref для селекта

  //Функція містить метод стейту inputMainState, метод приймає з атрибуту ref змінене значення в властивості current та записує результат в стейт inputMainState
  function changeInputMain() {
    setInputMainState(inputMain.current.value);
  }

  // Функція блокує можливість вводити в інпут всі символи крім 0-9 та крапка
  function validateInputMain(e) {
    let theEvent = e || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  // Якщо виконується умова то функція count в методі setResult множить суму яка була введена в інпуті на value обраного варіанту(валюти) в селекті, а результат операції записує в стейт result
  function count() {
    if (inputMainState.length > 0 && inputMainState.length < 8) {
      setResult(inputMain.current.value * selectRef.current.value);
    } else {
      alert('Поле "Хочу обміняти:" не може бути пустим або містити число яке має більше 7 символів!');
    }
  }

  return (
    <div className="Exchange">
      <div className='main__exchange'>
        <div className='main__exchange-inner'>
          <div className='main__exchange-box'>
            <label className='main__exchange-label'>Хочу обміняти</label>
            <input className='main__exchange-input' onKeyPress={validateInputMain} ref={inputMain} onChange={changeInputMain} value={inputMainState} type="text" />
            <select className='main__exchange-selecet' ref={selectRef}>
              <option className='main__exchange-option' value={value.usd}>USD</option>
              <option className='main__exchange-option' value={value.eur}>EUR</option>
              <option className='main__exchange-option' value={value.gbp}>GBP</option>
              <option className='main__exchange-option' value={value.cny}>CNY</option>
              <option className='main__exchange-option' value={value.chf}>CHF</option>
              <option className='main__exchange-option' value={value.aud}>AUD</option>
              <option className='main__exchange-option' value={value.cad}>CAD</option>
              <option className='main__exchange-option' value={value.czk}>CZK</option>
              <option className='main__exchange-option' value={value.pln}>PLN</option>
            </select>
          </div>
          <div className='main__exchange-box'>
            <label className='main__exchange-label'>Отримаю</label>
            <p className="main__exchange-result">{result} UAH</p>
          </div>
        </div>
        <input className='main__exchange-btn' onClick={count} type="button" value="обміняти" />
      </div>
    </div>
  )
}


export default Exchange;