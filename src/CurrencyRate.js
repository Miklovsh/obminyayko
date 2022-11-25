import React, { useContext, useState } from "react";
import Context from "./Context";

function CurrencyRate() {

  const value = useContext(Context);


  return (
    <div className="CurrencyRate">
      <div className='main__currency-inner'>
        <div className='main__currency-box'>
          <h3 className='main__currency'>Долар</h3>
          <h4 className='main__currency-value'>{value.usd} грн</h4>
        </div>
        <div className='main__currency-box'>
          <h3 className='main__currency'>Євро</h3>
          <h4 className='main__currency-value'>{value.eur} грн</h4>
        </div>
        <div className='main__currency-box'>
          <h3 className='main__currency'>Фунт стерлінгів</h3>
          <h4 className='main__currency-value'>{value.gbp} грн</h4>
        </div>
        <div className='main__currency-box'>
          <h3 className='main__currency'>Юань</h3>
          <h4 className='main__currency-value'>{value.cny} грн</h4>
        </div>
      </div>
    </div>
  )
}


export default CurrencyRate;