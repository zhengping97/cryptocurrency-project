import React from 'react';
import ReactDOM from 'react-dom';
import XRPHomePage from './components/xrpHomePage';
import OtherCoinsPage from './components/OtherCoinsPage';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<XRPHomePage />} />
        <Route path="/OtherCoins" element={<OtherCoinsPage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
