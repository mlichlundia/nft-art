import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css'
import App from './App'
import MainPage from './components/MainPage/ver1/MainPage_ver1'
import Archive from './components/Archive/Archive'
import AboutUs from './components/AboutUs/AboutUs'

import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<MainPage />} />
        <Route path="archive" element={<Archive />} />
        <Route path="about_us" element={<AboutUs />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
)
reportWebVitals()