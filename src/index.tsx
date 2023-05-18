import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from './context/Provider';
import 'bootstrap-icons/font/bootstrap-icons.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Provider>
      <App />
    </Provider>
  </>
);
reportWebVitals();
