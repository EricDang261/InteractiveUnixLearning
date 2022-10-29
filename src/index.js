import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ValueProvider } from './components/context/ValueContext';
import { CheckBoxProvider } from './components/context/CheckBoxContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CheckBoxProvider>
    <ValueProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ValueProvider>  
  </CheckBoxProvider>
);
