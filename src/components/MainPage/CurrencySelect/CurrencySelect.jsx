import './CurrencySelect.css'
import { useState } from 'react'

export default function CurrencySelect({
  currency,
  setCurrency,
  price,
  setPrice,
}) {
  const currencies = [
    { value: 'USD', price: 495 },
    { value: 'EU', price: 520 },
    { value: 'ETH', price: 0.3 },
    { value: 'BTC', price: 0.5 },
  ]
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div
        className="dropdown-container"
        onMouseLeave={() => setIsActive(false)}
      >
        <div className="dropdown" onClick={() => setIsActive(true)}>
          <h4>{currency}</h4>
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 5.75L8 10.25L12.5 5.75"
              stroke="#333333"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        </div>
        <ul
          className={
            isActive ? 'dropdown__list dropdown__list_active' : 'dropdown__list'
          }
        >
          {currencies.map((currency) => (
            <li
              className="dropdown__point"
              onClick={() => {
                setCurrency(currency.value)
                setPrice(currency.price)
                setIsActive(false)
              }}
              key={currency.value}
            >
              {currency.value}
            </li>
          ))}
        </ul>
      </div>
      <p className="price">{price}</p>
    </>
  )
}
