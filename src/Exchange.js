import React from "react";


function Exchange() {
  return(
    <div className="Exchange">
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
  )
}


export default Exchange;