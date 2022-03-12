import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css'
import App from './App'
import MainPage from './components/MainPage/MainPage/MainPage'
import Archive from './components/Archive/Archive'
import AboutUs from './components/AboutUs/AboutUs'

import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<MainPage />} />
        <Route path="archive" element={<Archive />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="/" element={<Navigate to="home" />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
)
reportWebVitals()
