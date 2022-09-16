import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense } from "react";
import './index.css';
import './i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={(<div>Loading...</div>)}>
    <App />
  </Suspense>
);
reportWebVitals();
