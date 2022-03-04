import { useState } from 'react'
import './MainPage_ver1.css'
import CurrencySelect from '../CurrencySelect/CurrencySelect'

export default function MainPage() {
  const [currency, setCurrency] = useState('USD')
  const [price, setPrice] = useState('495')

  return (
    <main className="main page">
      <section className="main__art-container">
        <div className="main_art-info art-info">
          <div className="art-info__index-name">
            <h5 className="art-info__index">01</h5>
            <h5>Irene Francesca</h5>
          </div>
          <h5 className="art-info__year">2022</h5>
          <h5>OK</h5>
        </div>
        <hr className="main__hr_first" />
        <div className="main__art">
          <img
            src="https://images.unsplash.com/photo-1606318621597-c057f7d4926e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="art"
          />
        </div>
      </section>
      <section className="title main__title">
        <h1>OK</h1>
      </section>
      <section className="main__content">
        <p className="p1">
          Digital painting. Comes with Gallery Quality Print. Shipping &
          packaging included. Print only guaranteed for the first buyer. Printed
          with Canon Pro 1000 with original inks on 350gsm Hahnemühle Museum
          Etching paper. Size 420x594mm. 20mm border. Signed and numbered
          edition 1 of 1.
        </p>
        <div className="main__authorship">
          <div className="main__avatar-container">
            <img
              className="avatar"
              src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="avatar"
            />
            <hr className="main__hr_second" />
            <h3>Irene Francesca</h3>
          </div>
          <p className="p1">
            Digital painting. Comes with Gallery Quality Print. Shipping &
            packaging included. Print only guaranteed for the first buyer.
          </p>
        </div>
        <div className="collect">
          <div className="collect__price-container">
            <CurrencySelect
              currency={currency}
              setCurrency={setCurrency}
              price={price}
              setPrice={setPrice}
            />
          </div>
          <a className="collect__button" href="https://">
            Collect
          </a>
        </div>
      </section>
    </main>
  )
}
