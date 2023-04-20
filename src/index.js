import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css'

import { Provider } from './context/books.js';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
