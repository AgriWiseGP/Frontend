import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense } from "react";
import './index.css';
import './i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter fallback={(<div>Loading...</div>)}>
    <App />
  </BrowserRouter>
);
reportWebVitals();
