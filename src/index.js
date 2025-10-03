import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelmetProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </HelmetProvider> */}
  </React.StrictMode>
);

reportWebVitals();
