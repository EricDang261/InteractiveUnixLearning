import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ValueProvider } from './components/store/ValueContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ValueProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ValueProvider>
);
