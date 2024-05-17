import React from "react";
import "./currencyPrice.css";

export default function CurrencyPrice() {
  return (
    <div className='currency-container'>
      <div>
        <img src='./assets/icons/icon-ethereum.svg' alt='ethereum icon' />
        <span className='currency text-sm'> 0.041 ETH</span>
      </div>
      <div>
        <img src='./assets/icons/icon-clock.svg' alt='clock icon' />
        <span className='days-left text-sm'>3 days left</span>
      </div>
    </div>
  );
}
